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
          <button class="signout" @click="logout">
            <icon name="signout" />
          </button>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
import { user } from '../user'
import { mapState, mapActions, mapGetters } from 'vuex'

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
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data
    }),
    ...mapGetters({
      hasUser: 'user/hasUser'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      getUserData: 'user/getUserData'
    })
  },
  created () {
    this.getUserData()
  }
}
</script>

<style lang="scss" src="./control.scss"></style>
