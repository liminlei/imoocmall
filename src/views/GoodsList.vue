<template>
  <div>
    这是一个商品列表页面
    <span>{{$route.params.goodId}}</span>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/image">显示商品图片</router-link>
    <router-link to="/cart">跳转到购物车页面</router-link>
    <div>
      <router-view></router-view>
    </div>

    <div>
      <button @click="jump">跳转到购物车页面</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsList",
        methods: {
            jump() {
                this.$router.push({path: '/cart?goodsId=123'});
            }
        }
    }
</script>

<style scoped>

</style>
