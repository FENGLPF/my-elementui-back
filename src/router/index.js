import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/login/Login";
import Index from "@/components/Index";
import Home from "@/components/common/Home";
import Aside from "@/components/common/Aside";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Content from "@/components/common/Content";
import Page1 from "@/components/page/Page1";


Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/Home',
          name: 'Home',
          component: Home
        },
        {
          path: '/Header',
          name: 'Header',
          component: Header
        },
        {
          path: '/Aside',
          name: 'Aside',
          component: Aside
        },
        {
          path: '/Content',
          name: 'Content',
          component: Content
        },
        {
          path: '/Footer',
          name: 'Footer',
          component: Footer
        },
        {
          path: '/Page1',
          name: 'Page1',
          component: Page1
        }
      ]
    }
  ]
})
