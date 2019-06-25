<template>
  <ul :class="$style.Wrapper" v-if="comments.length">
    <li v-for="(comment, index) in comments" :key="comment.id">
      <Comment :comment="comment" :index="index"></Comment>
    </li>
  </ul>
  <NoData v-else></NoData>
</template>

<script>
import Comment from '~/components/Comment.vue'
import NoData from '~/components/NoData.vue'

export default {
  components: {
    Comment,
    NoData
  },
  props: {
    comments: {
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
