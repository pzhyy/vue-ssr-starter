<template>
  <article :class="$style.Wrapper">
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      <h3 :class="$style.Title">{{ post.title }}</h3>
      <ul :class="$style.Meta">
        <li>{{ post.author.name }}</li>
        <li>{{ post.createdAt | formartDate('YYYY-MM-DD') }}</li>
      </ul>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  padding: 15px;

  > a {
    color: $default-text-color;

    &:hover {
      .Title {
        color: $primary-color;
      }
    }
  }
}

.Title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 200;
}

.Meta {
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 10px 0 0 0;
  list-style: none;
  font-size: 12px;
  color: #999;
}
</style>

