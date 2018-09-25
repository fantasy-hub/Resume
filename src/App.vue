<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <footer-com></footer-com>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    'nav-bar': Nav,
    'footer-com': Footer
  }
}
</script>
