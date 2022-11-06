<template>
    <div class="story-item-wrapper" :class="{active}">
      <div class="story-item__top-container">
          <xProgress :active="active" @onFinish="$emit('onProgressFinish')"/>
          <user
              :usernameClass="'story-item__username'"
              :userWrapper="'story-item__user-wrapper'"
              :avatarWrapper="'story-item__avatar-wrapper'"
              :avatarUrl="data.userAvatar"
              :avatarImg="'story-item__avatar-img'"
              :username="data.username"
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
          <button v-if="btnsShown.includes('next')" class="arrow btn-next" @click="$emit('onNextSlide')">
            <span class="icon">
              <icon name="arrow" />
            </span>
          </button>
          <button v-if="btnsShown.includes('prev')" class="arrow btn-prev" @click="$emit('onPrevSlide')">
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
import { icon } from '../../icons'
import { spinner } from '../spinner'

export default {
  name: 'StoryItem',
  components: {
    xProgress,
    user,
    xButton,
    placeholder,
    icon,
    spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onFinish'],
  props: {
    active: Boolean,
    startProgress: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
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
  }
}
</script>

<style lang="scss" src="./storyItem.scss"></style>
