<template>
  <article :class="$style.Wrapper" v-if="post">
    <h1 :class="$style.Title">{{ post.title }}</h1>
    <ul :class="$style.Meta">
      <li>
        Author: <output>{{ post.author.name }}</output>
      </li>
      <li>
        Like: <output>{{ post.likeCount }}</output>
      </li>
      <li>
        View: <output>{{ post.viewCount }}</output>
      </li>
      <li>
        Created at:
        <output>{{ post.createdAt | formartDate('YYYY-MM-DD') }}</output>
      </li>
    </ul>
    <div :class="$style.Summary">{{ post.summary }}</div>
    <div :class="$style.Content">{{ post.content }}</div>
  </article>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  padding: 15px;
}

.Title {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 28px;
  font-weight: 400;
}

.Meta {
  display: flex;
  padding: 0;
  margin: 10px 0 0 0;
  list-style: none;
  font-size: 12px;
  color: #999;

  li + li {
    margin-left: 15px;
  }

  output {
    color: $default-text-color;
  }
}

.Summary {
  padding: 15px;
  margin-top: 10px;
  background-color: #f8f8f8;
  border-left: 4px solid #eee;
  color: #666;
}

.Content {
  margin-top: 20px;
  white-space: pre-wrap;
}
</style>
