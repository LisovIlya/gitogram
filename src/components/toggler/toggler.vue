<template>
    <button :class="['button', {active: isOpened}]" @click="toggle">
        <span class="text">{{isOpened ? "Hide" : "View"}} issues</span>
        <span class="icon">
            <icon name="triangle" />
        </span>
    </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
