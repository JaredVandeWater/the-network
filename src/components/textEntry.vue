<template>
  <div class="col">
    <form>
      <div class="d-flex flex-column" v-if="user.isAuthenticated">
        <label for="exampleInputEmail1">What's on your mind?</label>
        <textarea class="form-control" id="posttext" placeholder="Text..." rows="4" maxlength="100"></textarea>
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
export default {
  name: 'TextEntry',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      onMounted(async() => {
      try {
        await postsService.getAll()
      } catch (error) {
        Notification.toast('Error: ' + error, 'error')
      }
    })
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
