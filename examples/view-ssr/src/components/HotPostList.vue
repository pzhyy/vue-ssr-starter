<template>
  <ul :class="$style.Wrapper">
    <li v-for="post in posts" :key="post.id">
      <HotPost :post="post"></HotPost>
    </li>
  </ul>
</template>

<script>
import HotPost from '@/components/HotPost.vue'

export default {
  name: 'PostList',
  components: {
    HotPost
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
