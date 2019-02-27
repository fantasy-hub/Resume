import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
  portList: [
    {title: '老成都', intro: '使用jQuery操作DOM事件，数据定义在了一个JS文件中，导航条有丰富的内容展示，分为五个类别。类别下有详情页展示', url: 'https://fantasy-hub.github.io/laochengdu/index.html', shortcut: './src/assets/website.png'},
    {title: '信用卡理财卡', intro: '主页定义较多的CSS动画操作，人脸识别页面调用摄像头已注释掉，识别后进入卡种推荐页，根据人脸识别的用户数据从7个页面中挑选1个。', url: 'https://fantasy-hub.github.io/xinyongka/index.html', shortcut: './src/assets/3Dgallery.png'},
    {title: 'h5轮盘', intro: '判断多少个节点计算转角总和，如果转角总和不是360的倍数，则需考虑重新排列dom顺序；滑动时根据滑动距离判断方向，同时判断转的整角值，如果角度不是整数需要考虑补角或舍角。', url: 'https://fantasy-hub.github.io/test/demo?tdsourcetag=s_pcqq_aiomsg', shortcut: './src/assets/nav.png'},    
    {title: '建行产品', intro: '基于Vue 2.0，使用了Vuex、Vue-Router、iView、Swiper。主页有四个路由，分别展示对应部分，金融产品与建荣家园有较多的详情内容',url: 'https://fantasy-hub.github.io/jhproduct/index.html', shortcut: './src/assets/carousel.jpg'},    
    {title: '电信红包', intro: '点击红包弹出输入手机，验证后从3种样式中挑选1种进行渲染。在渲染页面中进行了序列帧动画。', url: 'https://fantasy-hub.github.io/dxhongbao/index.html', shortcut: './src/assets/work.jpg'},
    {title: '百度下拉列表', intro: '基于 Vue 1.0 的百度下拉列表，有下拉提示列表功能，和上下键选择功能，回车键可以进行搜索',url: 'https://github.com/fantasy-hub/Mycode/tree/master/vue-%E7%99%BE%E5%BA%A6%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8', shortcut: './src/assets/serch.jpg'},
    {title: 'todolist', intro: '基于 Vue 2.0 的 todolist，leancloud 实现注册登录和存储用户数据的功能，todolist 有删除和已完成的选项', url: 'https://github.com/fantasy-hub/Mycode/tree/master/vue-todolist', shortcut: './src/assets/todolist.jpg'},
    {title: '移动端新闻站', intro: '基于 Vue2.0，结构分为 Nav、Footer、Home 等主板块，axios 进行数据交互并配置了 loading 效果', url: 'https://github.com/fantasy-hub/Mycode/tree/master/vue-mobilenews', shortcut: './src/assets/news-station.png'},
    {title: '瀑布流图片站', intro: '用 jQuery 的 ajax 方法和新浪相册 api 得到数据，拼装 DOM 并展示，通过懒加载监听 scroll 事件，实现无限懒加载的效果', url: 'https://github.com/fantasy-hub/Mycode/tree/master/task32-jQuery%E5%AE%9E%E6%88%98-%E6%97%A0%E9%99%90%E5%8A%A0%E8%BD%BD%E3%80%81jsonp%E3%80%81%E7%80%91%E5%B8%83%E6%B5%81', shortcut: './src/assets/pinterest.png'},
    {title: '懒加载图片', intro: '当访问一个页面的时候，先把img元素或是其他元素的背景图片路径替换成一张大小为图片的路径，只有当图片出现在浏览器的可视区域内时，才设置图片正真的路径。', url: 'https://github.com/fantasy-hub/Mycode/tree/master/task29-jQuery%E5%AE%9E%E6%88%98-%E6%87%92%E5%8A%A0%E8%BD%BD', shortcut: './src/assets/card-resume.png'}
    // {title: '轮播组件', intro: '用 jQuery 和 JS 原型构造函数模式封装了一套轮播组件，包括滚动轮播、全屏滚动轮播、渐变轮播等', url: 'https://github.com/fantasy-hub/Mycode/tree/master/task27-jQuery%E5%AE%9E%E6%88%98-%E8%BD%AE%E6%92%AD', shortcut: './src/assets/carousel.jpg'},    
    // {title: 'HTML 5 音乐播放器', intro: '使用 HTML 5 的 audio 标签实现的 FM 音乐播放器，有开始、暂停、音量调节、歌曲进度功能，用数组保存上一首歌曲，但最多只保存一首', url: 'https://github.com/fantasy-hub/Mycode/tree/master/HTML5-audio', shortcut: './src/assets/music.png'},
    // {title: '企业页面', intro: '企业网站静态页面，对样式进行布局调整。使用绝对定位对展示项目添加了蒙层', url: 'https://github.com/fantasy-hub/Mycode/tree/master/task15-%E5%AE%9E%E6%88%98', shortcut: './src/assets/website.png'},
    // {title: 'datepicker', intro: '使用 JS 原型和构造函数模式，通过 DOM 拼装和点击事件处理，封装成一个 datepicker，能够选择和查看日期', url: 'https://github.com/fantasy-hub/JS-components/tree/master/Components/datepicker', shortcut: './src/assets/datepicker.png'},
    // {title: '3D 照片墙', intro: '通过 CSS 3 的 transition 和 transform 等属性，实现一个 3D 照片圆环，监听 mousemove 事件从而能够自由旋转圆环', url: 'http://52muzi.applinzi.com/3D-gallery/', shortcut: './src/assets/3Dgallery.png'},
    // {title: 'stikup效果', intro: '让本来在页面上的元素在，当页面滚动时，将其属性position变为fixed从而浮动在页面上的一种效果。 ', url: 'https://github.com/fantasy-hub/Mycode/tree/master/task28-jQuery%E5%AE%9E%E6%88%98-stickup', shortcut: './src/assets/nav.png'},
    // {title: '简洁页面', intro: '简单的网站页面，用一些iconfont字体达到简洁的效果', url: 'https://github.com/fantasy-hub/Mycode/tree/master/task14-%E5%AE%9E%E6%88%98', shortcut: './src/assets/work.jpg'},
   
  ],
  portMsg: [
    {title: 'CSS3', content: [{url: 'https://github.com/fantasy-hub/Mycode/blob/master/task44-CSS3/task44-1.html', contentTitle: '渐变'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task44-CSS3/task44-2-1.html', contentTitle: '条形loading'},{url: 'https://github.com/fantasy-hub/Mycode/blob/master/task44-CSS3/task44-2-2.html', contentTitle: '圆环loading'}]},
    {title: '多栏布局', content: [{url: 'https://github.com/fantasy-hub/Mycode/tree/master/task11-BFC%E3%80%81%E8%BE%B9%E8%B7%9D%E5%90%88%E5%B9%B6/task11-2', contentTitle: 'BFC 布局'}, {url: 'https://github.com/fantasy-hub/Mycode/tree/master/task10-%E4%B8%A4%E6%A0%8F%E5%B8%83%E5%B1%80/task10-1', contentTitle: '两栏布局'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task12-%E8%B4%9F%E8%BE%B9%E8%B7%9D%E3%80%81%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/task12-1.html', contentTitle: '圣杯布局'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task12-%E8%B4%9F%E8%BE%B9%E8%B7%9D%E3%80%81%E4%B8%89%E6%A0%8F%E5%B8%83%E5%B1%80/task12-2.html', contentTitle: '双飞翼布局'}]},
    {title: 'HTML 5', content: [{url: 'https://github.com/fantasy-hub/Mycode/blob/master/task43-HTML5/task43.html', contentTitle: '拖拽标签'}]},
    {title: 'JavaScript 组件', content: [{url: 'https://github.com/fantasy-hub/JS-components/blob/master/Components/datepicker/index.html', contentTitle: 'datepicker'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task28-jQuery%E5%AE%9E%E6%88%98-stickup/task28-2.html', contentTitle: 'stickup'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task29-jQuery%E5%AE%9E%E6%88%98-%E6%87%92%E5%8A%A0%E8%BD%BD/task29-1.html', contentTitle: '回到顶部'}]},
    {title: 'tab 组件', content: [{url: 'http://ocx7m1fc8.bkt.clouddn.com/tab/tab_product/index.html#', contentTitle: 'tab 切换 panel'}, {url: 'http://ocx7m1fc8.bkt.clouddn.com/tab/tab-demo/index.html', contentTitle: 'tab 组件'}]},
    {title: 'nav 导航组件', content: [{url: 'https://github.com/fantasy-hub/JS-components/tree/master/Components/%E5%AF%BC%E8%88%AA/%E4%BE%A7%E8%BE%B9%E6%A0%8F%E5%AF%BC%E8%88%AA', contentTitle: 'sidebar 侧边栏导航'}, {url: 'https://github.com/fantasy-hub/JS-components/tree/master/Components/%E5%AF%BC%E8%88%AA/%E4%B8%8B%E6%8B%89%E5%AF%BC%E8%88%AA', contentTitle: 'navbar 下拉导航'}]},
    {title: 'lazyload 懒加载组件', content: [{url: 'https://github.com/fantasy-hub/Mycode/blob/master/task29-jQuery%E5%AE%9E%E6%88%98-%E6%87%92%E5%8A%A0%E8%BD%BD/task29-2-1.html', contentTitle: '图片懒加载'}]},
    {title: 'carousel 轮播组件', content: [{url: 'https://github.com/fantasy-hub/Mycode/blob/master/task27-jQuery%E5%AE%9E%E6%88%98-%E8%BD%AE%E6%92%AD/task27-2.html', contentTitle: '滚动轮播'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task27-jQuery%E5%AE%9E%E6%88%98-%E8%BD%AE%E6%92%AD/task27-3.html', contentTitle: '全屏滚动轮播'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task27-jQuery%E5%AE%9E%E6%88%98-%E8%BD%AE%E6%92%AD/task27-1.html', contentTitle: '渐变轮播'}]},
    {title: 'modal 模态框组件', content: [{url: 'https://github.com/fantasy-hub/JS-components/tree/master/Components/%E6%A8%A1%E6%80%81%E6%A1%86/%E5%AF%B9%E8%AF%9D%E6%A1%86/index.html', contentTitle: '对话框'}, {url: 'https://github.com/fantasy-hub/JS-components/tree/master/Components/%E6%A8%A1%E6%80%81%E6%A1%86/%E6%8F%90%E7%A4%BA%E6%A1%86/index.html', contentTitle: '提示框'}, {url: 'https://github.com/fantasy-hub/JS-components/tree/master/Components/%E6%A8%A1%E6%80%81%E6%A1%86/%E5%9B%BE%E7%89%87%E6%94%BE%E5%A4%A7%E6%A1%86/index.html', contentTitle: '图片放大框'}]},
    {title: '瀑布流组件', content: [{url: 'https://github.com/fantasy-hub/Mycode/tree/master/task30-jQuery%E5%AE%9E%E6%88%98-%E7%80%91%E5%B8%83%E6%B5%81/%E5%9F%BA%E7%A1%80%E5%86%99%E6%B3%95', contentTitle: '瀑布流'}, {url: 'https://github.com/fantasy-hub/Mycode/blob/master/task32-jQuery%E5%AE%9E%E6%88%98-%E6%97%A0%E9%99%90%E5%8A%A0%E8%BD%BD%E3%80%81jsonp%E3%80%81%E7%80%91%E5%B8%83%E6%B5%81/task32-1-2.html', contentTitle: '无限加载瀑布流'}]},
    {title: 'Vue.js', content: [{url: 'https://github.com/fantasy-hub/Mycode/tree/master/vuex-mydemo', contentTitle: 'vuex-demo'}, {url: 'https://github.com/fantasy-hub/Mycode/tree/master/vue-%E7%99%BE%E5%BA%A6%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8', contentTitle: '百度下拉列表'}]},
    // {title: 'Vue 移动端新闻站', content: [{url: 'https://github.com/fantasy-hub/Mycode/tree/master/vue-mobilenews', contentTitle: 'Vue 移动新闻站'}]},
    // {title: '企业页面', content: [{url: 'https://github.com/fantasy-hub/Mycode/tree/master/task15-%E5%AE%9E%E6%88%98', contentTitle: '无响应式静态页面'}]}
  ],
  blogList: [{
    title: 'DOM、事件',
    url: 'https://www.jianshu.com/p/831c6585d2d9'
    },
    {
      title: 'this',
      url: 'https://www.jianshu.com/p/38913fd312a6'
    },
    {
      title: '对象、原型、原型链、继承',
      url: 'https://www.jianshu.com/p/eb2202af576f'
    },
    {
      title: 'jQuery DOM&事件',
      url: 'https://www.jianshu.com/p/d0c5f74803f6'
    }
  ]
};
const getters = {
  portList(state) {
    return state.portList;
  },
  portMsg(state) {
    return state.portMsg;
  },
  blogList(state) {
    return state.blogList;
  }
};

export default new Vuex.Store({
  state,
  getters
});