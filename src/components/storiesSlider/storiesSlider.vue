<template>
    <div class="c-stories-slider">
        <div class="stories-container">
            <ul class="stories" ref="stories">
                <li class="stories-item" ref="trending" v-for="(trending, index) in trendings" :key="trending.id">
                    <story-item
                      :data="getStoryData(trending)"
                      :active="storyIndex === index"
                      :loading="storyIndex === index && loading"
                      :btnsShown="activeBtns"
                      @onNextSlide="handleSlide(index + 1)"
                      @onPrevSlide="handleSlide(index - 1)"
                      @onProgressFinish="handleSlide(index + 1)"
                      @onFollow="starRepo"
                      @onUnFollow="unStarRepo"
                    />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { storyItem } from '../storyItem'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'storiesSlider',
  components: {
    storyItem
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      storyIndex: 0,
      storiesPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.trendings,
      starred: (state) => state.starred.data
    }),
    activeBtns () {
      if (this.btnsShown === false) return []
      if (this.storyIndex === 0) return ['next']
      if (this.storyIndex === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions('trendings', ['fetchTrendings', 'fetchReadme', 'starRepo', 'unStarRepo']),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    async fetchReadmeForActiveStory () {
      const { id, owner, name } = this.trendings[this.storyIndex]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    goToSlide (currentIndex) {
      const { stories, trending } = this.$refs
      const storyWidth = parseInt(getComputedStyle(trending[0]).width, 10)

      this.storyIndex = currentIndex
      this.storiesPosition = -(storyWidth * currentIndex)

      stories.style.transform = `translateX(${this.storiesPosition}px)`
    },
    handleSlide (currentIndex) {
      if (currentIndex < this.trendings.length) {
        this.goToSlide(currentIndex)
        this.loadReadme()
      } else {
        this.$emit('noMoreSlides')
      }
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveStory()
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    }
  },
  async mounted () {
    if (this.initialSlide) {
      console.log(this.initialSlide)
      const ndx = this.trendings.findIndex(
        (item) => item.id === this.initialSlide
      )
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }
}

</script>

<style lang="scss" src="./storiesSlider.scss" scoped></style>
