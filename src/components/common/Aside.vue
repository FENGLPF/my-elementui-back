<template>
  <div style="text-align: left;height: 100%;background-color:#545c64">
    <el-scrollbar>
      <el-menu class="el-menu-vertical-demo"
               router
               :default-active="this.$route.name"
               :collapse="!foldAside" background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item :index="item.name" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{item.label}}</span>
<!--          <div v-show="item.icon=='el-icon-s-home'" style="float: right" class="header-title" @click="foldOrOpen">-->
<!--            <a class="el-icon-s-fold" v-if="foldAside" title="折叠侧边栏" />-->
<!--            <a class="el-icon-s-unfold" v-else title="展开侧边栏" />-->
<!--          </div>-->
        </el-menu-item>
        <el-submenu :index="item.label" v-for="(item, index) in hasChildren" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.label}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item :index="subItem.name" v-for="(subItem, subIndex) in item.children" :key="subIndex" @click="clickMenu(subItem)">
              <i :class="subItem.icon"></i>
              <span slot="title">{{subItem.label}}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-scrollbar>

  </div>

</template>

<script>

export default {
  name: "Aside",
  data() {
    return {
      menu: [
        {
          children:[],
          icon: 'el-icon-s-home',
          label: '首页',
          name: 'Home',
          path: '/',
        },
        {
          children: [],
          icon: 'el-icon-s-home',
          label: '页面一',
          name: 'Page1',
          path: '/Page1'
        }
      ],
      foldAside: true
    };
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => item.children.length==0)
    },
    hasChildren() {
      return this.menu.filter(item => item.children.length>0)
    },
  },
  created() {
    // this.menu=JSON.parse(localStorage.getItem('menu'))
    console.log(this.menu)
  },
  mounted() {
  },
  methods: {
    clickMenu(item) {
      this.$router.push({name: item.name})
    },
    // 展开、折叠侧边栏
    foldOrOpen() {
      this.foldAside = !this.foldAside
    },
  }
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 80%;
  padding: 0;
  min-height: 400px;
  /*height: 100%;*/
}
.el-scrollbar__wrap{
  overflow-x:hidden;
}
</style>
