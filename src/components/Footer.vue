<template>
  <div id="footer">
    <div class="container">
      <div class="go-top wow shake" @click="goTop"><i class="iconfont icon-angle-double-up"></i></div>
      <p>©Copyright 2018 - Li All rights reserved.</p>
      <transition enter-active-class="bounceInRight" leave-active-class="bounceOutRight">
      <div class="go-top-fixed go-top animated" @click="goTop" v-show="showGoTop"><i class="iconfont icon-angle-double-up"></i></div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showGoTop: false
      }
    },
    methods: {
      goTop() {
        var timer = setInterval(function () {
          var osTop = document.documentElement.scrollTop || document.body.scrollTop;
          var speed = Math.floor(-osTop / 60);
          document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
          console.log(document.documentElement.scrollTop);
          // var isTop = true;
          if (osTop == 0) {
            clearInterval(timer);
          }
        });
      }
    },
    mounted() {
      window.addEventListener('scroll', function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if (top > 400) {
          this.showGoTop = true;
        } else {
          this.showGoTop = false;
        }
      }.bind(this));
    }
  }
</script>