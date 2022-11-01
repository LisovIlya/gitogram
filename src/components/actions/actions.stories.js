import xActions from './actions.vue'

export default {
  title: 'actions',
  components: {
    xActions
  },
  argTypes: {
    starCount: {
      name: 'Star count',
      control: { type: 'number' }
    },
    forkCount: {
      name: 'Fork count',
      control: { type: 'number' }
    }
  }
}

const defaultView = (args) => ({
  components: {
    xActions
  },
  data () {
    return { args }
  },
  template: '<xActions v-bind="args" />'
})

export const Default = defaultView.bind({})

Default.args = {
  starCount: 124,
  forkCount: 5
}
