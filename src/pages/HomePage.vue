<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col">
        <TextEntry />
        <Post v-for="post in state.posts" :key="post.id" :post="post" />
        <div>
          <button @click="getNewer" class="btn btn-info">
            Newer
          </button>
          <button @click="getOlder" class="btn btn-info">
            Older
          </button>
        </div>
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
  name: 'Home',
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
      state,
      async getNewer() {
        try {
          if (AppState.newer !== null) {
            await postsService.getNewerPosts()
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async getOlder() {
        try {
          if (AppState.older !== null) {
            await postsService.getOlderPosts()
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
