<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col">
        <Profile />
        <Post v-for="post in state.posts" :key="post.id" :post="post" />
        <OlderNewer />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router'
export default {
  name: 'ProfilePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      posts: computed(() => AppState.posts)
    })
    onMounted(async() => {
      try {
        await profilesService.getAllByOneProfile(route.params.id)
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
