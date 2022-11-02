import control from './control.vue'

export default {
  title: 'control',
  components: {
    control
  },
  argTypes: {
    avatarUrl: {
      name: 'avatarUrl',
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: {
    control
  },
  data () {
    return {
      args
    }
  },
  template: '<control v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/116829461?v=4'
}
