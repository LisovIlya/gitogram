<template>
    <div class="topline">
        <topline>
            <template #headline>
                <div class="logo">
                  <icon name="logo" />
                </div>
                <control />
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item story" v-for="story in stories" :key="story.id" >
                        <user
                            :avatarWrapper="'story__avatar-wrapper'"
                            :avatarUrl="story.avatar"
                            :avatarImg="'story__avatar-img'"
                            :username="story.username"
                            @onPress="handlePress(story.id)"
                            :isShown="true"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <div class="c-feed">
        <post v-for="n in 5" :key="n">
          <template #repository>
            <div class="repository-description">
              <h1 class="repository-name">{{repName}}</h1>
              <p class="repository-description">{{repDesc}}</p>
            </div>
            <actions starCount="142" forkCount="3" />
          </template>
        </post>
    </div>
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
  created () {
    api.trandings.getTrendings()
  },
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
      repDesc: 'JavaScript framework for building interactive web applications ⚡'
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss"></style>
