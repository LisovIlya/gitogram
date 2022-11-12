<template>
    <button :class="['follow-btn', { disable }]">
      <div class="btn-loader" v-if="loading">
        <spinner :btn="true" />
      </div>
      <div class="btn-text" v-else>{{followState}}
        <slot></slot>
      </div>
    </button>
</template>

<script>
import { spinner } from '../spinner'

export default {
  name: 'xButton',
  components: {
    spinner
  },
  props: {
    followState: String,
    loading: Boolean,
    disable: Boolean
  }
}
</script>

<style lang="scss" scoped src="./button.scss"></style>
