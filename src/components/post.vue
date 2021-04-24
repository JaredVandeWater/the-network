<template>
  <div>
    <div class="container m-3 p-2 shadow">
      <div class="row">
        <div class="col-2">
          <img class="rounded-circle my-profile-pic" :src="post.creator.picture" alt="Card image cap">
        </div>
        <div class="col">
          <div class="row flex-column">
            <div class="col">
              <h5>
                {{ post.creator.name }}
              </h5>
            </div>
            <div class="col">
              <h5 class="font-weight-light">
                {{ cleanTime(post.createdAt) }}
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
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
