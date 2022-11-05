<template>
    <div class="wrapper">
        <div class="topline-container">
          <topline>
              <template #headline>
                  <button class="logo">
                    <icon name="logo" />
                  </button>
                  <button class="close-btn">
                    <icon name="close" />
                  </button>
              </template>
          </topline>
        </div>
        <div class="content">
          <stories-slider />
        </div>
    </div>
</template>

<script>
import { topline } from '../../components/topline'
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'

export default {
  name: 'stories',
  components: {
    topline,
    icon,
    storiesSlider
  }
}
</script>

<style lang="scss" src="./stories.scss" scoped></style>
