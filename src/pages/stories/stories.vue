<template>
    <div class="wrapper">
        <div class="topline-container">
          <topline>
              <template #headline>
                  <button class="logo" @click="$router.push({name: 'feeds'})">
                    <icon name="logo" />
                  </button>
                  <button class="close-btn" @click="print($route)">
                    <icon name="close" />
                  </button>
              </template>
          </topline>
        </div>
        <div class="content">
          <stories-slider :initialSlide="Number($route.params.initialSlide)" />
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
  },
  props: ['initialSlide'],
  methods: {
    print (id) {
      console.log(id)
    }
  }
}
</script>

<style lang="scss" src="./stories.scss" scoped></style>
