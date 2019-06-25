<template>
  <div :class="$style.Wrapper">
    <Header></Header>
    <main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" module>
.Wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 580px;

  > main {
    flex: 1;
  }
}
</style>
