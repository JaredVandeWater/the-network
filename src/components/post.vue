<template>
  <div>
    <div class="container m-3 pb-4 pt-2 shadow">
      <div class="row">
        <div class="col-2">
          <img class="rounded-circle my-profile-pic" :src="post.creator.picture" alt="Card image cap">
        </div>
        <div class="col">
          <div class="row flex-column">
            <div class="col">
              <div class="row">
                <div class="col">
                  <h5>
                    {{ post.creator.name }}
                  </h5>
                </div>
                <div class="col-2 d-flex justify-content-end" v-if="user.isAuthenticated && account.id === post.creator.id">
                  <button class="btn btn-danger">
                    X
                  </button>
                </div>
              </div>
            </div>
            <div class="col">
              <h5 class="font-weight-light">
                {{ cleanTime(post.createdAt) }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center pt-3">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      user: computed(() => AppState.user),
      cleanTime(post) {
        const newTime = post.substr(11, 5)
        return newTime
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-profile-pic{
  width: 3rem
}
</style>
