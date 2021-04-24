<template>
  <div>
    <button @click="getNewer" class="btn btn-info">
      Newer
    </button>
    <button @click="getOlder" class="btn btn-info">
      Older
    </button>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import { AppState } from '../AppState'

export default {
  name: 'OlderNewer',
  setup() {
    return {
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

<style lang="scss" scoped>
.my-profile-pic{
  width: 10rem
}
</style>
