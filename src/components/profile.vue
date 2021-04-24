<template>
  <div>
    <div class="container m-3 pb-4 pt-2 shadow">
      <div class="row">
        <div class="col-2">
          <img class="rounded-circle my-profile-pic" :src="account.picture" alt="Card image cap">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'Profile',
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-profile-pic{
  width: 10rem
}
</style>
