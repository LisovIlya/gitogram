<template>
    <div class="c-stories-slider">
        <div class="stories-container">
            <ul class="stories" ref="stories">
                <li class="stories-item" ref="trending" v-for="(trending, index) in trendings" :key="trending.id">
                    <story-item
                      :data="getStoryData(trending)"
                      :active="storyIndex === index"
                      :btnsShown="activeBtns"
                      @onNextSlide="handleSlide(index + 1)"
                      @onPrevSlide="handleSlide(index - 1)"
                      @onProgressFinish="handleSlide(index + 1)"
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
  data () {
    return {
      storyIndex: 0,
      storiesPosition: 0
    }
  },
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.trendings
    }),
    activeBtns () {
      if (this.storyIndex === 0) return ['next']
      if (this.storyIndex === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions('trendings', ['fetchTrendings']),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
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
      } else {
        this.$emit('noMoreSlides')
      }
    }
  },
  async created () {
    await this.fetchTrendings()
  }
}

</script>

<style lang="scss" src="./storiesSlider.scss" scoped></style>
