<template>
  <div :class="$style.Wrapper">
    <div :class="$style.Container">
      <main :class="$style.Main">
        <PostList :posts="posts"></PostList>
        <Pagination :prev="prev" :next="next"></Pagination>
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
import PostList from '@/components/PostList.vue'
import HotPostList from '@/components/HotPostList.vue'
import Pagination from '@/components/Pagination.vue'
import Panel from '@/components/Panel.vue'

export default {
  components: {
    PostList,
    HotPostList,
    Pagination,
    Panel
  },

  head() {
    return {
      title: 'Home',
      meta: [
        { hid: 'keywords', name: 'keywords', content: 'view nuxt' },
        {
          hid: 'description',
          name: 'description',
          content: 'This is a view nuxt'
        }
      ]
    }
  },

  watchQuery: true,

  async fetch({ store, route }) {
    const { page = '1' } = route.query

    await store.dispatch('getPosts', {
      _page: page,
      _limit: 10,
      _expand: 'author'
    })

    await store.dispatch('getHotPosts', {
      _page: 8,
      _limit: 10,
      _expand: 'author'
    })
  },

  computed: {
    posts() {
      return this.$store.state.posts
    },

    hotPosts() {
      return this.$store.state.hotPosts
    },

    prev() {
      const { fullPath, query } = this.$route
      const { page = '0' } = query
      const currentPage = Number(page)

      if (currentPage > 1) {
        const prevPage = currentPage - 1
        const route = this.$router.resolve({
          name: 'Home',
          query: {
            ...query,
            page: prevPage
          }
        })

        return route.href
      }

      return fullPath
    },

    next() {
      const { fullPath, query } = this.$route
      const { page = '1' } = query
      const currentPage = Number(page)

      if (currentPage < 10) {
        const nextPage = currentPage + 1
        const route = this.$router.resolve({
          name: 'Home',
          query: {
            ...query,
            page: nextPage
          }
        })

        return route.href
      }

      return fullPath
    }
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  width: 100%;
  height: 100%;
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
