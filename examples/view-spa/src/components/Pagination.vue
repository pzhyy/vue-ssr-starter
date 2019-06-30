<template>
  <ul :class="$style.Wrapper">
    <li>
      <router-link :to="prev">Prev</router-link>
    </li>
    <li>
      <router-link :to="next">Next</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    prev: {
      type: String,
      default: ''
    },
    next: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  margin: 30px 0 20px;
  list-style: none;

  li {
    a {
      display: block;
      padding: 5px 15px;
      border: 1px solid $primary-color;

      &:hover {
        background-color: $primary-color;
        color: #fff;
      }
    }
  }
}
</style>
