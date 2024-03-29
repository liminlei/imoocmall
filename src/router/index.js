import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from "../views/GoodsList"
import Title from "@/views/Title"
import Image from "@/views/Image"
import Cart from "@/views/Cart"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      component: GoodsList,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
