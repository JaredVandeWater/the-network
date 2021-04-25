<template>
  <div>
    <div class="container m-3 pb-4 pt-2 shadow">
      <div class="row">
        <div class="col-4">
          <img class="rounded-circle my-profile-pic" v-if="profile" :src="profile.picture" alt="Card image cap">
        </div>
        <div class="col">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router'

export default {
  name: 'Profile',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        AppState.currentProfile = null
        await profilesService.getProfileById(route.params.id)
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    return {
      profile: computed(() => AppState.currentProfile)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-profile-pic{
  width: 10rem
}
</style>
