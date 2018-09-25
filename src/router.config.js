import Home from './components/Home.vue'
import Portfolio from './components/Portfolio.vue'
// import Resume from './components/Resume.vue'

export default [{
      path: '/home',
      component: Home
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    // {
    //   path: '/resume',
    //   component: Resume
    // },
    {
      path: '*',
      redirect: '/home'
    }
  ]