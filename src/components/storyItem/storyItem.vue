<template>
    <div class="story-item-wrapper">
      <div class="story-item__top-container">
          <xProgress @on-finish="emitOnFinish"/>
          <user
              :usernameClass="'story-item__username'"
              :userWrapper="'story-item__user-wrapper'"
              :avatarWrapper="'story-item__avatar-wrapper'"
              :avatarUrl="profile.avatar"
              :avatarImg="'story-item__avatar-img'"
              :username="profile.username"
              @onPress="handlePress(story.id)"
              :isShown="true"
          />
        </div>
        <div class="content-wrapper">
            <slot />
        </div>
        <div class="story-item__bottom-container">
          <xButton followState="Follow"/>
        </div>
    </div>
</template>

<script>
import { xProgress } from '../progress'
import profiles from '../../pages/feeds/data.json'
import { user } from '../user'
import { xButton } from '../button'

export default {
  name: 'StoryItem',
  components: {
    xProgress,
    user,
    xButton
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
