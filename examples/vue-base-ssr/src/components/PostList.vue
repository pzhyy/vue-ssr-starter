<template>
  <ul :class="$style.Wrapper">
    <Post v-for="post in posts" :post="post" :key="post.id"></Post>
  </ul>
</template>

<script>
import Post from '@/components/Post.vue'

export default {
  name: 'PostList',
  components: {
    Post
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>

