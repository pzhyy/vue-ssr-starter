<template>
  <div :class="$style.Wrapper" v-if="comment">
    <div :class="$style.Avatar">
      <img
        :src="comment.user.avatar"
        :title="`${comment.user.name} avatar`"
        alt="avatar"
      />
    </div>
    <div :class="$style.Info">
      <div :class="$style.Meta">
        <b>{{ comment.user.name }}</b>
        <div># {{ index + 1 }}</div>
      </div>
      <div :class="$style.Content">{{ comment.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => null
    },
    index: Number
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  display: flex;
  padding: 15px;
}

.Avatar {
  width: 48px;
  height: 48px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.Info {
  flex: 1;
  padding-left: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.Meta {
  display: flex;
  justify-content: space-between;
}
</style>
