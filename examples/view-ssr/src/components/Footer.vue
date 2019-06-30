<template>
  <footer :class="$style.Wrapper">
    <div :class="$style.Container">Copyright &copy; 2019</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" module>
.Wrapper {
  height: 24px;
  background-color: #fff;
  font-size: 12px;
  color: #999;
}

.Container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @extend .Container;
}
</style>

