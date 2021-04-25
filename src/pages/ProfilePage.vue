<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <img :src="(state.commercial[0] ? state.commercial[0].tall : '')" alt="">
        <img :src="(state.commercial[1] ? state.commercial[1].tall : '')" alt="">
      </div>
      <div class="col-md-6 col">
        <Profile />
        <Post v-for="post in profilePosts" :key="post.id" :post="post" />
        <OlderNewerProf />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { profilesService } from '../services/ProfilesService'
import { commercialsService } from '../services/CommercialsService'
import { useRoute } from 'vue-router'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      posts: computed(() => AppState.posts),
      commercial: computed(() => AppState.currentAds)
    })
    onMounted(async() => {
      AppState.currentAds = []
      try {
        AppState.currentProfilePosts = []
        await profilesService.getAllByOneProfile(route.params.id)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
      try {
        AppState.currentAds = []
        await commercialsService.getCommercials()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state,
      profilePosts: computed(() => AppState.currentProfilePosts)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
