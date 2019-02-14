<template>
 <div class="container">
   <div class="item-container">
      <el-col span='8'>
        <el-card>
         菜单
        </el-card>
      </el-col>
      <el-col span="16">
        <el-card class="item-container">
         对应子类
        </el-card>
      </el-col>

      
   </div>
   <div class="item-container">
   </div>
 </div>
</template>

<script>
import VueEchart from "../components/ECharts";
import echarts from "echarts";
export default {
  name: "addNew",
  data() {
    return {
      option: 1
    };
  },
  components: {}
};
</script>

<style scoped>
.container {
  display: flex;
  color: "red";
}
.item-container {
  flex: 1;
}
.item-container-200 {
  flex: 200px 0 1;
}
</style>
