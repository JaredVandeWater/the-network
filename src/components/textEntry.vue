<template>
  <div class="col">
    <form @submit.prevent="create" v-if="user.isAuthenticated">
      <div class="d-flex flex-column">
        <label for="exampleInputEmail1">What's on your mind?</label>
        <textarea v-model="state.newPost.body"
                  class="form-control"
                  id="textentry"
                  placeholder="Text..."
                  rows="4"
                  maxlength="100"
        ></textarea>
        <button type="submit" class="btn btn-primary">
          Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import Notification from '../utils/Notification'
import { postsService } from '../services/PostsService'
export default {
  name: 'TextEntry',
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      user: computed(() => AppState.user),
      create() {
        try {
          postsService.create(state.newPost)
          state.newPost = {}
          Notification.toast('Added Post', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  }
}

</script>

<style scoped>
textarea {
  resize: none;
}
</style>
