<template>
  <div :class="$style.Wrapper">
    <div :class="$style.Banner">
      <img :src="post.image" :title="post.title" alt="post image">
    </div>
    <div :class="$style.Container">
      <main :class="$style.Main">
        <PostDetail v-if="post" :post="post"></PostDetail>
        <Panel title="Comments">
          <CommentList :comments="comments"></CommentList>
        </Panel>
      </main>
      <aside :class="$style.Aside">
        <Panel title="Hi">
          <div :class="$style.Message">
            Welcome to
            <b>V</b>! It is an awesome site.
          </div>
        </Panel>
        <Panel title="Hot">
          <HotPostList :posts="hotPosts"></HotPostList>
        </Panel>
      </aside>
    </div>
  </div>
</template>

<script>
import PostDetail from '@/components/PostDetail.vue'
import CommentList from '@/components/CommentList.vue'
import HotPostList from '@/components/HotPostList.vue'
import Panel from '@/components/Panel.vue'

export default {
  components: {
    PostDetail,
    CommentList,
    HotPostList,
    Panel
  },

  head() {
    const { title, summary } = this.post

    return {
      title,
      meta: [
        { hid: 'keywords', name: 'keywords', content: title },
        { hid: 'description', name: 'description', content: summary }
      ]
    }
  },

  async fetch({ store, route }) {
    const { id } = route.params

    await store.dispatch('getPostsById', {
      id,
      _expand: 'author'
    })

    await store.dispatch('getComments', {
      _page: 1,
      _limit: 10,
      _expand: 'user',
      postId: id
    })

    await store.dispatch('getHotPosts', {
      _page: 8,
      _limit: 10,
      _expand: 'author'
    })
  },

  computed: {
    post() {
      return this.$store.state.post
    },

    comments() {
      return this.$store.state.comments
    },

    hotPosts() {
      return this.$store.state.hotPosts
    }
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  width: 100%;
  height: 100%;
}

.Banner {
  height: 300px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.Container {
  display: flex;
  align-items: flex-start;
  padding-top: 15px;
  padding-bottom: 15px;
  @extend .Container;
}

.Main {
  width: 70%;
  background-color: #fff;
}

.Aside {
  width: 28%;
  margin-left: 2%;
  background-color: #fff;
}

.Message {
  padding: 15px;
}
</style>
