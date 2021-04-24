<template>
  <div>
    <div class="card">
      <img class="rounded-circle w-100" :src="post.creator.picture" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">
          Card title
        </h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
