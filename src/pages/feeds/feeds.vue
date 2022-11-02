<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                  <icon name="logo" />
                </div>
                <control :avatarUrl="items[1].owner.avatar_url"/>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item story" v-for="item in items" :key="item.id" >
                        <user
                            :avatarWrapper="'story__avatar-wrapper'"
                            :avatarUrl="item.owner.avatar_url"
                            :avatarImg="'story__avatar-img'"
                            :username="item.owner.login"
                            @onPress="handlePress(item.id)"
                            :isShown="true"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <ul class="feeds">
      <li class="feed" v-for="item in items" :key="item.id">
        <post
        :avatarUrl="item.owner.avatar_url"
        :username="item.owner.login"
        :id="item.id"
        >
          <template #repository>
            <div class="repository-description">
              <h1 class="repository-name">{{item.name}}</h1>
              <p class="repository-description">{{item.description}}</p>
            </div>
            <actions :starCount="item.stargazers_count" :forkCount="item.forks_count" />
          </template>
        </post>
      </li>
    </ul>
</template>

<script>
import { topline } from '../../components/topline'
import stories from './data.json'
import { control } from '../../components/control'
import { user } from '../../components/user'
import { icon } from '../../icons'
import { post } from '../../components/post'
import { actions } from '../../components/actions'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    control,
    user,
    icon,
    post,
    actions
  },
  data () {
    return {
      stories,
      repName: 'Vue.js',
      repDesc: 'JavaScript framework for building interactive web applications ⚡',
      items: []
    }
  },
  methods: {},
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss"></style>
