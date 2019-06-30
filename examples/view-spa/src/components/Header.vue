<template>
  <header :class="$style.Wrapper">
    <nav :class="$style.Container">
      <router-link to="/" exact>
        <img :class="$style.Logo" src="/logo-48.png" alt="logo">
      </router-link>
      <ul :class="$style.Navs">
        <li>
          <router-link :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" module>
.Wrapper {
  height: 48px;
  background-color: #fff;
}

.Container {
  display: flex;
  align-items: center;
  height: 100%;
  @extend .Container;
}

.Logo {
  width: 32px;
  height: 32px;
}

.Navs {
  display: flex;
  padding: 0;
  margin: 0 0 0 15px;
  list-style: none;

  > li {
    margin-left: 10px;
    margin-right: 10px;

    a {
      padding-left: 5px;
      padding-right: 5px;
      color: $default-text-color;
      font-size: 16px;

      &:hover {
        color: $primary-color;
      }

      &:global(.router-link-active) {
        background-image: linear-gradient(
          #fff 50%,
          $primary-color 75%,
          #fff 90%
        );
      }
    }
  }
}
</style>
