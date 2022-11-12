<template>
    <div class="topline">
        <topline>
            <template #headline>
                <button class="logo">
                  <icon name="logo" />
                </button>
                <control :avatarUrl="''"/>
            </template>
            <template #content>
                <ul class="stories">
                    <li class="stories-item story" v-for="{id, owner} in getUnstarredOnly" :key="id" >
                        <user
                            :avatarWrapper="'story__avatar-wrapper'"
                            :avatarUrl="owner.avatar_url"
                            :avatarImg="'story__avatar-img'"
                            :username="owner.login"
                            :isShown="true"
                            @onPress="$router.push({name: 'stories', params: { initialSlide: id } })"
                        />
                    </li>
                </ul>
            </template>
        </topline>
    </div>
    <ul class="feeds">
      <li class="feed" v-for="item in starred" :key="item.id">
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
import { mapState, mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapState({
      trendings: (state) => state.trendings.trendings,
      starred: (state) => state.starred.data
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred'
    })
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  mounted () {
    this.fetchTrendings()
    this.fetchStarred()
  }
}
</script>

<style lang="scss" src="./feeds.scss"></style>
