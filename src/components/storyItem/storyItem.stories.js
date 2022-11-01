import storyItem from './storyItem.vue'

export default {
  title: 'styryItem',
  components: { storyItem }
}

const template = (args) => ({
  components: { storyItem },
  data () {
    return { args }
  },
  template: '<storyItem><h1> some strange context</h1></storyItem>'
})

export const Default = template.bind({})
