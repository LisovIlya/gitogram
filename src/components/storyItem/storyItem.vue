<template>
    <div class="story-item-wrapper" :class="{active}">
      <div class="story-item__top-container">
          <xProgress :active="active" @on-finish="emitOnFinish"/>
          <user
              :usernameClass="'story-item__username'"
              :userWrapper="'story-item__user-wrapper'"
              :avatarWrapper="'story-item__avatar-wrapper'"
              :avatarUrl="data.userAvatar"
              :avatarImg="'story-item__avatar-img'"
              :username="data.username"
              @onPress="handlePress(story.id)"
              :isShown="true"
          />
        </div>
        <div class="content-wrapper">
          <div class="loader" v-if="loading">
            <spinner />
          </div>
          <div class="info" v-else>
            <div
              v-if="data.content?.length"
              class="content-text"
              v-html="data.content"
            ></div>
            <placeholder v-else :paragraphs="2" />
          </div>
        </div>
        <div class="story-item__bottom-container">
          <xButton followState="Follow"/>
        </div>
        <template v-if="active">
          <button class="btn btn-next">
            <span class="icon">
              <icon name="arrow" />
            </span>
          </button>
          <button class="btn btn-prev">
            <span class="icon">
              <icon name="arrow" />
            </span>
          </button>
        </template>
    </div>
</template>

<script>
import { xProgress } from '../progress'
import profiles from '../../pages/feeds/data.json'
import { user } from '../user'
import { xButton } from '../button'
import { placeholder } from '../placeholder'

export default {
  name: 'StoryItem',
  components: {
    xProgress,
    user,
    xButton,
    placeholder
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {
      profiles,
      profile: profiles[3]
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  }
}
</script>

<style lang="scss" src="./storyItem.scss"></style>
