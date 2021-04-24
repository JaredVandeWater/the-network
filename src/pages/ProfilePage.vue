<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col">
        <Profile />
        <!-- <Post v-for="post in state.posts" :key="post.id" :post="post" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
import { postsService } from '../services/PostsService'
export default {
  name: 'ProfilePage',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts)
    })
    onMounted(async() => {
      try {
        await postsService.getAll()
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
