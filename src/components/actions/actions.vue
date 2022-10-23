<template>
    <div class="actions-wrapper">
        <div class="star">
            <button class="star__btn">
              <div class="star__img">
                <icon name="star" />
              </div>
              <div class="star__name">Star</div>
            </button>
            <div class="star__info">{{starCount}}</div>
        </div>
        <div class="fork">
            <button class="fork__btn">
              <div class="fork__img">
                <icon name="fork" />
              </div>
              <div class="fork__name">Fork</div>
            </button>
            <div class="fork__info">{{forkCount}}</div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons/'

export default {
  name: 'acrions',
  components: {
    icon
  },
  props: {
    starCount: {
      type: Number,
      required: true
    },
    forkCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./actions.scss"></style>
