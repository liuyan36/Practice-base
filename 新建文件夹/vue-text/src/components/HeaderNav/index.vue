<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">
      <router-link to="/">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/ucenter">个人中心</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name:"HeaderNav",
   data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>

</style>
