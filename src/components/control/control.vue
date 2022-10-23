<template>
    <div class="control-wrapper">
        <div class="control-item home">
          <icon name="home" />
        </div>
        <div class="control-item user">
          <user
            :avatarWrapper="'user__avatar-wrapper'"
            :avatarUrl="stories[2].avatar"
          />
        </div>
        <div class="control-item signout">
          <icon name="signout" />
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
import { user } from '../user'
import stories from '../../pages/feeds/data.json'

export default {
  name: 'control',
  components: {
    icon,
    user
  },
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./control.scss"></style>
