<template>
    <div class="c-stories-slider">
        <div class="stories-container">
            <pre>{{trendings}}</pre>
            <ul class="stories" ref="slider">
                <li class="stories-item" v-for="(trending) in trendings" :key="trending.id">
                    <story-item active />
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
    return {}
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      getTrendings: 'trendings/getTrendings'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created () {
    await this.getTrendings()
  }
}

</script>

<style lang="scss" src="./storiesSlider.scss" scoped></style>
