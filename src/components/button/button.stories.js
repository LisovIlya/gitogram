import xButton from './button.vue'

export default {
  title: 'Button',
  components: { xButton },
  argTypes: {
    followState: {
      control: { type: 'text' }
    },
    loading: {
      control: { type: 'boolean' }
    },
    disable: {
      control: { type: 'boolean' }
    }
  }
}

const template = (args) => ({
  components: { xButton },
  data () {
    return { args }
  },
  template: '<xButton v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  followState: 'Follow'
}
