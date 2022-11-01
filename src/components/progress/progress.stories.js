import xProgress from './progress.vue'

export default {
  title: 'progress',
  components: { xProgress },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

const template = (args) => ({
  components: { xProgress },
  data () {
    return { args }
  },
  template: '<xProgress @onFinish="args.onFinish" />'
})

export const Default = template.bind({})
