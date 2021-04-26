<template>
  <div>
    <button @click="getNewer" class="btn btn-info" v-if="appstate.newer !== null">
      Newer
    </button>
    <button @click="getOlder" class="btn btn-info" v-if="appstate.older !== null">
      Older
    </button>
  </div>
</template>

<script>
import { profilesService } from '../services/ProfilesService'
import { AppState } from '../AppState'
import { computed } from 'vue'

export default {
  name: 'OlderNewerProf',
  setup() {
    return {
      appstate: computed(() => AppState),
      async getNewer() {
        try {
          if (AppState.newer !== null) {
            await profilesService.getNewerPosts()
          }
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async getOlder() {
        try {
          if (AppState.older !== null) {
            await profilesService.getOlderPosts()
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
