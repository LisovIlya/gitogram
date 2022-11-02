import storyItem from './storyItem.vue'

export default {
  title: 'styryItem',
  components: { storyItem },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

const template = (args) => ({
  components: { storyItem },
  data () {
    return { args }
  },
  template: '<storyItem @onFinish="args.onFinish"><h1> some strange context</h1></storyItem>'
})

export const Default = template.bind({})
