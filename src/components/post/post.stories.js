import post from './post.vue'

export default {
  title: 'post',
  components: {
    post
  },
  argTypes: {
    avatarUrl: {
      name: 'avatarUrl',
      control: { type: 'text' }
    },
    username: {
      name: 'username',
      control: { type: 'text' }
    },
    id: {
      name: 'userId',
      control: { type: 'number' }
    }
  }
}

const template = (args) => ({
  components: {
    post
  },
  data () {
    return { args }
  },
  template: '<post v-bind="args" />'
})

export const Default = template.bind({})

Default.args = {
  avatarUrl: 'https://avatars.githubusercontent.com/u/116829461?v=4',
  username: 'Alfred',
  id: '2'
}
