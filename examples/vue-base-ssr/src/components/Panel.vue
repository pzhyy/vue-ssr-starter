<template>
  <section class="$style.Wrapper">
    <h3 :class="$style.Title">{{ title }}</h3>
    <div><slot></slot></div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    }
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  background-color: #fff;
}

.Title {
  padding: 10px 15px;
  margin: 0;
  border-bottom: 1px solid #eee;
  font-size: 20px;
  font-weight: 400;
}
</style>
