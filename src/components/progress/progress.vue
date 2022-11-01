<template>
    <div :class={active} class="c-progress">
        <div ref="indicator" class="indicator"></div>
    </div>
</template>

<script>
export default {
  name: 'Progress',
  data () {
    return {
      active: false
    }
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFifish')
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.active = true
    // })
    document.addEventListener('DOMContentLoaded', () => {
      this.active = true
    })
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped src="./progress.scss"></style>
