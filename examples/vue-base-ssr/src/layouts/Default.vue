<template>
  <div class="default-layout">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
}
</script>

<style lang="scss">

</style>

