<template>
    <div class="post-wrapper">
        <user
            :usernameClass="'post__username'"
            :userWrapper="'post__user-wrapper'"
            :avatarWrapper="'post__avatar-wrapper'"
            :avatarUrl="profile.avatar"
            :avatarImg="'post__avatar-img'"
            :username="profile.username"
            @onPress="handlePress(story.id)"
            :isShown="true"
        />
        <div class="post__repository-wrapper">
            <slot name="repository" />
        </div>
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
                <li class="comments-item" v-for="n in 5" :key="n">
                    <comment text="Some text" username="John Doe" />
                </li>
            </ul>
        </div>
        <div class="release-date">{{releaseDate}}</div>
    </div>
</template>

<script>
import { user } from '../user'
import profiles from '../../pages/feeds/data.json'
import { toggler } from '../toggler'
import { comment } from '../comment'

export default {
  name: 'Post',
  components: {
    comment,
    toggler,
    user
  },
  data () {
    return {
      profiles,
      profile: profiles[2],
      shown: false,
      releaseDate: '15 MAY'
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" src="./post.scss"></style>
