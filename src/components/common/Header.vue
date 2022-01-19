<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-submenu style="float: right" index="2">
        <template slot="title">我的</template>
        <el-menu-item @click="logout" index="2-1">退出登录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>

</template>

<script>
export default {
name: "Header",
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      // 是否展开侧边栏
      foldAside: true,
      hd_url: ''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    logout() {
      localStorage.clear()
      this.$router.push({name: "Login"})
    }
  }
}
</script>

<style scoped>

</style>
