<template>
    <div class="control-wrapper">
        <div class="control-item home">
          <icon name="home" />
        </div>
        <div class="control-item user">
          <user
            :avatarWrapper="'user__avatar-wrapper'"
            :avatarUrl="avatarUrl"
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

export default {
  name: 'control',
  props: {
    avatarUrl: {
      type: String,
      required: true
    }
  },
  components: {
    icon,
    user
  }
}
</script>

<style lang="scss" src="./control.scss"></style>
