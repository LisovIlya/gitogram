<template>
    <button class="follow-btn">{{followState}}</button>
</template>

<script>
export default {
  name: 'button',
  props: ['followState']
}
</script>

<style lang="scss" scoped src="./button.scss"></style>
