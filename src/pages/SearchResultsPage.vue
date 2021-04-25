<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7 col">
        <Post v-for="post in state.searchedPosts" :key="post.id" :post="post" />
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
import { searchResultsService } from '../services/SearchResultsService'
import { commercialsService } from '../services/CommercialsService'
import { useRoute } from 'vue-router'
export default {
  name: 'SearchResultsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      searchedPosts: computed(() => AppState.searchedPosts),
      commercial: computed(() => AppState.currentAds)
    })

    // REVIEW why does the search not work on the search page? its on the navbar
    onMounted(async() => {
      AppState.currentAds = []
      AppState.searchedPosts = []
      try {
        await searchResultsService.getAllByQuery(route.params.query)
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
