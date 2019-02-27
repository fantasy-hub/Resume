<template>
  <div id="home">
    <div id="header">
      <div class="intro">
        <div class="photo">
          <div class="circular">
            <svg viewBox="0 0 100 100">
              <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
              <text>
                <textPath xlink:href="#circle">view Li's resume by yourself.</textPath>
              </text>
            </svg>
          </div>
          <img :src="logoImg" alt="photo" class="logoImg">
        </div>
        <h4>你好，我是李达</h4>
        <p>——希望找到一份前端工作</p>
        <a href="src/assets/李达前端简历.pdf" target="_blank" class="btn"><span>View My CV</span></a>
      </div>
    </div>

    <div id="portfolio">
      <div class="container">
        <h2 class="wow topic bounceInDown">Portfolio</h2>
        <router-link to="/portfolio" class="btn btn-more wow bounceInDown"><span>View More</span></router-link>
        <hr>
        <ul class="gallery clearfix">
          <li v-for="item in portList" class="wow fadeIn">
            <a :href="item.url">
              <img :src="item.shortcut" :alt="item.title">
              <h4>{{item.title}}</h4>
              <div class="cover">
                <p>{{item.intro}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div id="blogs">
      <div class="container">
        <h2 class="wow topic bounceInDown">Blogs</h2>
        <a target="_blank" href="https://www.jianshu.com/u/5dde0d3d951f" class="btn btn-more wow bounceInDown"><span>View More</span></a>
        <hr>
        <ul class="blog clearfix">
          <li v-for="(item,i) in blogList" class="wow bounceInUp" :data-wow-delay="i*0.2+'s'">
            <a :href="item.url">
              <div class="blog-img"></div>
              <h4>{{item.title}}</h4>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div id="skills">
      <div class="container">
        <h2 class="wow topic bounceInDown">Skills</h2>
        <i class="el-icon-arrow-down wow bounceInDown"></i>
        <hr>
        <div class="tag-panel">
          <div class="tag expert">CSS</div>
          <div class="tag familiar">CSS 3</div>
          <div class="tag familiar">Less</div>
        </div>
        <div class="tag-panel">
          <div class="tag expert">JavaScript</div>
          <div class="tag expert">jQuery</div>
          <div class="tag expert">Vue.js</div>
          <div class="tag">Bootstrap</div>
        </div>
        <div class="tag-panel">
          <div class="tag expert">HTML</div>
          <div class="tag familiar">HTML 5</div>
        </div>
        <div class="tag-panel">
          <div class="tag expert">npm</div>
          <div class="tag expert">Webpack</div>
          <div class="tag familiar">Bower</div>
          <div class="tag familiar">Gulp</div>
          <div class="tag familiar">RequireJS</div>
        </div>
        <div class="tag-panel">
          <div class="tag familiar">PhotoShop</div>
          <div class="tag expert">Git</div>
        </div>
      </div>
    </div>
    
    <div id="contact">
      <div class="container clearfix">
        <h2 class="wow topic bounceInDown">Get In Touch</h2>
        <i class="el-icon-arrow-down wow bounceInDown"></i>
        <hr>
        
        <!-- 点击事件定义在form，提交内部全部数据 -->
        <form class="clearfix" @submit.prevent="sendMsg">
          <div class="form-left">
            <label for="name">NAME</label>
            <input id="name" type="text" placeholder="Enter name" v-model="formData.cName">
            <label for="email">EMAIL ADDRESS</label>
            <div class="input-group clearfix">
              <span><i class="el-icon-message"></i></span>
              <input type="email" placeholder="Enter email" v-model="formData.cEmail">
            </div>
          </div>
          <div class="form-right clearfix">
            <label for="message">MESSAGE</label>
            <textarea id="message" rows="9" cols="25" placeholder="Message" v-model="formData.cMsg"></textarea>
            <input type="submit" class="btn btn-send" value="SEND MESSAGE">
          </div>
        </form>
        
        <div class="personal">
          <h5>CONTACT ME:</h5>
          <address>
            <span>Email</span>
            <a class="email-ads" href="mailto:531730746@qq.com">531730746@qq.com</a>
          </address>
          <address>
            <span>QQ:</span>
            <p> 531730746</p>
            <span>Phone:</span>
            <p>17601026236</p>
            <span>WX:</span>
            <p>17601026236</p>
          </address>
          <address>
            <span>I'm on social networks</span>
            <ul class="social clearfix">
              <li class="social-github"><a target="_blank" href="https://github.com/fantasy-hub"><i class="iconfont icon-github"></i></a></li>
              <li class="social-weixin"><a @click.prevent="showDialog=true"><i class="iconfont icon-icon17"></i></a></li>                            
              <li class="social-weibo"><a target="_blank" href="https://weibo.com/3171885621/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1"><i class="iconfont icon-0003"></i></a></li>
            </ul>
          </address>
          <transition-group enter-active-class="zoomIn" leave-active-class="zoomOut">
            <div class="dialog animated" v-show="showDialog" :key="1" @click="showDialog=false">
              <p>Contact Me</p>
              <img :src="weixinImg" class="weixin-img" alt="weixin">
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import AV from 'leancloud-storage'
  import {
    Message
  } from 'element-ui'
  import {
    mapGetters
  } from 'vuex'

  export default {
    data() {
      return {
        showDialog: false,
        logoImg: './src/assets/timg.png',
        weixinImg: './src/assets/weixin.jpg',
        input2: '',
        formData: {
          cName: '',
          cEmail: '',
          cMsg: ''
        }
      }
    },
    computed: mapGetters([
      'portList',
      'blogList'
    ]),
    methods: {
      sendMsg() {
        for (var key in this.formData) {
          if (this.formData[key] == '') {
            Message.warning({
              message: '抱歉，请填写好完整信息~'
            });
            return;
          }
        }
        var _this = this;
        var TodoFolder = AV.Object.extend('TodoFolder');
        var todoFolder = new TodoFolder();
        todoFolder.set(_this.formData);
        todoFolder.save().then(function (todo) {
          console.log('objectId is ' + todo.id);
          Message.success({
            message: '发送成功，谢谢您！~'
          });
        }, function (error) {
          console.error(error);
          Message.error({
            message: '抱歉出错了，请联系我，谢谢您！'
          });
        });
      },
      // sendPortList() {
      //   this.$emit('portList', this.portList);
      // }
    },
    mounted() {
      new WOW().init();
      // this.sendPortList();
    }
  }
</script>
<style scoped>
  .circular {
    position: absolute;
    width: 9.5em;
    height: 9.5em;
    left: 50px;
  }
  
  .circular svg {
    display: block;
    overflow: visible;
    transition: 10s linear transform;
  }
  
  .circular svg:hover {
    transform: rotate(-2turn);
  }
  
  .circular text {
    fill: currentColor;
  }
  
  .circular path {
    fill: none;
  }
  .logoImg {
    border-radius: 50%;
  }
</style>