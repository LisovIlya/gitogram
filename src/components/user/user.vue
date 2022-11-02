<template>
    <button :class="userWrapper" @click="$emit('onPress')">
        <div :class="avatarWrapper">
            <img :src="avatarUrl" alt="" :class="avatarImg">
        </div>
        <div :class="usernameClass" v-if="isShown">{{username}}</div>
    </button>
</template>

<script>

export default {
  name: 'User',
  emits: ['onPress'],
  props: {
    usernameClass: {
      type: String,
      default: 'username'
    },
    userWrapper: {
      type: String,
      default: 'user-wrapper'
    },
    isShown: {
      type: Boolean,
      default: false
    },
    avatarImg: {
      type: String,
      default: 'avatar-img'
    },
    avatarWrapper: {
      type: String,
      default: 'avatar-wrapper'
    },
    avatarUrl: {
      type: String,
      required: true
    },
    username: {
      type: String
    }
  }
}
</script>

<style lang="scss" src="./user.scss" scoped></style>
