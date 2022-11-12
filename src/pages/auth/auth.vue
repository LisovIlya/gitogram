<template>
    <div class="container">
        <div class="auth-top">
            <div class="auth-wrapper">
                <div class="auth-logo">
                    <icon name="logo" />
                </div>
                <div class="tagline">
                    More than just one repository. This is our digital world.
                </div>
                <x-button
                @click="getAuthCode"
                :followState="'Authorize with github'"
                >
                    <template #default>
                        <div class="github-logo">
                            <icon name="github" />
                        </div>
                    </template>
                </x-button>
            </div>
            <div class="img-wrapper">
                <img src="../../assets/comp.png" class="auth-img">
            </div>
        </div>
        <div class="auth-bottom">
            <div class="copyright">© Gitogram from Loftschool</div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons'
import { xButton } from '../../components/button'
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  name: 'auth',
  components: {
    icon,
    xButton
  },
  methods: {
    ...mapActions('auth', ['getAuthCode', 'getTokenByCode', 'logout'])
  },
  async mounted () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      const token = await this.getTokenByCode(code)
      localStorage.setItem('token', token)
      axios.defaults.headers.Authorization = `token ${token}`
      this.$router.replace({ name: 'feeds', query: { search: '' } })
    }
  }
}
</script>

<style lang="scss" src="./auth.scss" scoped></style>
