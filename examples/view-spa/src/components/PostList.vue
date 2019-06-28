<template>
  <ul :class="$style.Wrapper">
    <li v-for="post in posts" :key="post.id">
      <Post :post="post"></Post>
    </li>
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
