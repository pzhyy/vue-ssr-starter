<template>
  <article :class="$style.Wrapper">
    <router-link :to="{ name: 'Post', params: { id: post.id } }">
      <div :class="$style.Image">
        <img :src="post.image" :title="post.title" alt="post image" />
      </div>
      <div :class="$style.Info">
        <h3 :class="$style.Title">{{ post.title }}</h3>
        <ul :class="$style.Meta">
          <li>{{ post.author.name }}</li>
          <li>{{ post.createdAt | formatDate('YYYY-MM-DD') }}</li>
        </ul>
        <div :class="$style.Summary">{{ post.summary }}</div>
      </div>
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
    display: flex;
    color: $default-text-color;

    &:hover {
      .Title {
        color: $primary-color;
      }
    }
  }
}

.Image {
  width: 240px;
  height: 120px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.Info {
  flex: 1;
  padding-left: 20px;
}

.Title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 18px;
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

.Summary {
  margin-top: 10px;
  color: #666;
}
</style>
