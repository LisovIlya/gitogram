<template>
    <div class="actions-wrapper">
        <div class="star actions__item">
            <button class="star__btn item__btn">
              <div class="star__img">
                <icon name="star" />
              </div>
              <div class="star__name">Star</div>
            </button>
            <div class="star__info-wrapper item__info-wrapper">
              <div class="star__info item__info">{{starCount}}</div>
            </div>
        </div>
        <div class="fork actions__item">
            <button class="fork__btn item__btn">
              <div class="fork__img">
                <icon name="fork" />
              </div>
              <div class="fork__name">Fork</div>
            </button>
            <div class="fork__info-wrapper item__info-wrapper">
              <div class="fork__info item__info">{{forkCount}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { icon } from '../../icons/'

export default {
  name: 'actions',
  components: {
    icon
  },
  props: ['starCount', 'forkCount']
}
</script>

<style lang="scss" src="./actions.scss"></style>
