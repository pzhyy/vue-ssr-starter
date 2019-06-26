<template>
  <ul :class="$style.Wrapper">
    <HotPost v-for="post in posts" :post="post" :key="post.id"></HotPost>
  </ul>
</template>

<script>
import HotPost from "@/components/HotPost.vue";

export default {
  name: "PostList",
  components: {
    HotPost
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" module>
.Wrapper {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>

