<template>
  <div>
    <div class="container m-3 pb-4 pt-2 shadow">
      <div class="row">
        <div class="col-2">
          <router-link :to="{ name: 'Profile', params: {id: post.creatorId} }">
            <img
              class="rounded-circle my-profile-pic"
              :src="post.creator.picture"
              alt="Card image cap"
            >
          </router-link>
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
                  <button @click="remove(post)" class="btn btn-danger">
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
        <div class="col">
          {{ post.body }}
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-end">
          <button @click="likePost(post)" class="btn btn-secondary">
            <p class="m-0">
              Like <span>{{ post.likes.length }}</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'
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
      account: computed(() => AppState.account),
      cleanTime(post) {
        const newTime = post.substr(11, 5)
        return newTime
      },
      async remove(post) {
        try {
          await postsService.remove(post.id)
          Notification.toast('Removed Post', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      },
      async likePost(post) {
        try {
          await postsService.likePost(post.id)
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
  width: 3rem
}
</style>
