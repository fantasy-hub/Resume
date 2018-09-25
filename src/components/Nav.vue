<template>
  <div id="nav-bar" :class="toggleNav">
    <div class="container clearfix">
      <div class="logo">
        <a href="#contact"><img :src="logoImg" alt="logo" class="logoImg"></a>     
      </div>
      <!-- 最小化时的路由导航条 -->
      <div class="nav-main-ms">
        <i class="iconfont icon-listzhuanhuan"></i>
        <ul class="nav-child">
          <li>
            <router-link to="/home">HOME</router-link>
          </li>
          <li>
            <router-link to="/portfolio">PORTFOLIO</router-link>
          </li>
          <li>
            <router-link to="/resume">RESUME</router-link>
          </li>          
          <!-- 循环navList数组 -->
          <li v-for="item in navList"><a :href="item.url" target="_blank">{{item.title}}</a></li>
          <li><a href="#contact">CONTACT</a></li> 
        </ul>
      </div>

      <div>
        <ul class="nav-main clearfix">
          <li>
            <router-link to="/home">HOME</router-link>
          </li>
          <li>
            <router-link to="/portfolio">PORTFOLIO</router-link>
          </li>
          <!-- <li>
            <router-link to="/resume">RESUME</router-link>
          </li> -->
          <li v-for="item in navList"><a :href="item.url" target="_blank">{{item.title}}</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        show: true,
        logoImg: './src/assets/timg.png',
        navList: [
          {
            title: 'RESUME',
            url: 'src/assets/李达前端简历.pdf'
          },
          {
            title: 'BLOG',
            url: 'https://www.jianshu.com/u/5dde0d3d951f'
          }
        ]
      }
    },
    computed: {
      toggleNav: function() {
        return {
          'nav-bar-collapse': this.show
        }
      }
    },
    mounted() {
      var _this = this;
      window.addEventListener('scroll', function() {
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        if(top != 0) {
          _this.show = false;
        } else {
          _this.show = true;
        }
      })
    }
  }
</script>
<style>
  .logoImg {
    border-radius: 50%;
  }
</style>
