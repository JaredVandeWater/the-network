<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 col">
        <TextEntry />
        <Post v-for="post in state.posts" :key="post.id" :post="post" />
        <OlderNewer />
      </div>
      <div class="col">
        <img :src="(state.commercial[0] ? state.commercial[0].tall : '')" alt="">
        <img :src="(state.commercial[1] ? state.commercial[1].tall : '')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { postsService } from '../services/PostsService'
import { commercialsService } from '../services/CommercialsService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts),
      commercial: computed(() => AppState.currentAds)
    })
    onMounted(async() => {
      AppState.currentAds = []
      try {
        await postsService.getAll()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
      try {
        await commercialsService.getCommercials()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      state

    }
  }
}
</script>

<style scoped lang="scss">

</style>
