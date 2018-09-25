<template>
  <div id="ports">
    <div class="container clearfix layout">
      <div class="port-sidebar">
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item v-for="(val,index) in portMsg" :title="val.title" :name="index+1">
            <ul>
              <li v-for="item in val.content">
                <a :href="item.url">{{ item.contentTitle }}</a>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="port-main">
        <ul class="port-card clearfix">
          <li v-for="item in portList2">
            <a :href="item.url">
              <img :src="item.shortcut" :alt="item.title">
              <h3>{{item.title}}</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="port-more">
      <h3>嘿，想了解更多吗？</h3>
      <a href="https://github.com/fantasy-hub/Mycode" class="btn btn-more_1" target="_blank"><span>作品源码</span></a>
      <a href="src/assets/李达前端简历.pdf" class="btn btn-more_2" target="_blank"><span>我的简历</span></a>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        activeName: '1',
        portList2: []
      }
    },
    computed: mapGetters([
      'portList',
      'portMsg'
    ]),
    mounted() {
      var arr = this.portList.slice(0, -1);
      this.portList2 = arr;
    }
  }
</script>
<style>
  .layout {
    margin: 116px auto;
  }
  
  .port-sidebar {
    width: 25%;
    height: 100%;
    float: left;
  }
  
  .el-collapse-item__content {
    padding: 0 15px;
    background: rgba(0, 0, 0, .5);
  }
  
  .port-sidebar ul li {
    padding: 6px 0;
    border-bottom: 1px solid #dfe6ec;
  }
  
  .port-sidebar ul li:last-of-type {
    border: none;
  }
  
  .port-sidebar ul li a {
    color: #fff;
  }
  
  .port-sidebar ul li a:hover {
    opacity: .7;
  }
  
  .port-main {
    height: 100%;
    margin-left: 27%;
    padding-bottom: 20px;
    background: #f9f9f9;
  }
  
  .port-card li {
    float: left;
    width: 30%;
    margin: 20px 0 0 20px;
    padding-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    overflow: hidden;
  }
  
  .port-card li a {
    display: block;
  }
  
  .port-card li img {
    display: block;
    width: 100%;
    transition: all .5s;
  }
  
  .port-card li img:hover {
    transform: scale(1.1, 1.1);
  }
  
  .port-card li h3 {
    padding: 20px 0;
    color: #333;
    text-align: center;
    font-size: 90%;
    transition: all .3s;
  }
  
  .port-card li h3:hover {
    color: #fda3a3;
  }
  .port-more {
    text-align: center;
    background: #f9f9f9;
    padding: 30px 0;
  }
  .port-more h3 {
    padding: 15px 0 20px 0;
    color: rgba(0,0,0,.7);
  }
  .btn-more_1 {
    display: inline-block;
    color: #fff;
    background-color: rgba(0,0,0,.5);
  }
  .btn-more_2 {
    display: inline-block;
  }
</style>