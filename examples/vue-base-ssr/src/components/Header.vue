<template>
  <header class="header">
    <nav class="inner">
      <router-link to="/" exact>
        <img class="logo" src="~public/logo-48.png" alt="logo">
      </router-link>
      <router-link to="/topics/all">全部</router-link>
      <router-link to="/topics/share">分享</router-link>
      <router-link to="/topics/good">精华</router-link>
      <router-link to="/topics/ask">问答</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" module>
.header {
  background-color: #fff;
}
.inner {
  @extend .container;
}
</style>

