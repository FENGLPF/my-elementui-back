<template>
  <div>
    <el-row :gutter="20" class="my-row">
      <el-col :span="6" v-for="(item, index) in languageList" :key="index" style="margin-top: 10px">
        <el-radio @input="changeLanguage" v-model="tempLanguage" :label="item.lang" border>{{item.label}}</el-radio>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Language",
  data() {
    return {
      languageList: this.$i18n.messages.languageList,
      tempLanguage: localStorage.getItem('lang')||"Chinese"
    }
  },
  methods: {
    changeLanguage(lang) {
      if(lang!==localStorage.getItem('lang')) {
        localStorage.setItem('lang', lang)
        this.$i18n.locale = lang
        // this.$router.go(0)
        this.$emit('closeLanguage')
      }
    },
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
</style>
