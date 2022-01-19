<template>
  <div class="mainDiv">
    <el-container style="height: 100%">
      <el-header>
        <Header/>
      </el-header>
      <el-container >
        <el-aside width="auto" style="height: 100%">
          <Aside/>
        </el-aside>
<!--        <HeaderTab/>-->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import Header from "@/components/common/Header";
import Aside from "@/components/common/Aside";

export default {
  name: "Index",
  components: {Header, Aside},
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.mainDiv {
  position: fixed;
  height: 100%;
  width: 100%;
}
.el-header {
  /*background-color: #333;*/
  padding: 0;
}
.el-main {
  padding: 10px;
  height: 80%;
  overflow: auto;
}
.el-container {
  height: 100%;
}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
</style>
