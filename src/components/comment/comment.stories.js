import xComment from './comment.vue'

export default {
  title: 'comment',
  components: { xComment },
  argTypes: {
    text: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: {
    xComment
  },
  data () {
    return { args }
  },
  template: `
    <xComment v-bind="args" username="John Doe" />
    `
})

export const Default = template.bind({})

Default.args = {
  text: 'Follow me'
}

Default.story = {
  name: 'defComment'
}
