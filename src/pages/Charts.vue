<template>
  <el-container>
    <el-aside>
      <el-form ref="form" :model="form" label-width="160px">
        <el-form-item label="图表名称">
          <el-input v-model="option.title.text"></el-input>
        </el-form-item>

        <el-form-item label="图表类型">
          <el-select v-model="option.series[0].type" placeholder="请选择">
            <el-option
              v-for="item in type"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="x轴数据">
          <el-input label="xAxis" placeholder="x轴数据" v-model="xData"></el-input>
        </el-form-item>

        <el-form-item label="是否显示x轴刻度 ">
          <el-select v-model="hasXSplit">   
            <el-option value="1">是</el-option>
            <el-option value="2">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="x轴label颜色">
          <el-color-picker v-model="xLabelColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="x轴label颜色">
          <el-color-picker v-model="xSplitColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="y轴数据">
          <el-input label="yAxis" placeholder="y轴数据" v-model="yData"></el-input>
        </el-form-item>

        <el-form-item label="是否显示y轴刻度 ">
          <el-select v-model="hasYSplit">   
            <el-option value="1">是</el-option>
            <el-option value="2">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="y轴label颜色">
          <el-color-picker v-model="yLabelColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="y轴label颜色">
          <el-color-picker v-model="ySplitColor"></el-color-picker>
        </el-form-item>

        <el-form-item label="线条是否渐变">
          <el-select v-model="isGrent">
            <el-option value="1">是</el-option>
            <el-option value="2">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="渐变始色-渐变结色">
          <el-color-picker v-model="grentStartColor"></el-color-picker>
          <el-color-picker v-model="grentEndColor"></el-color-picker>
        </el-form-item>

      </el-form>
      
      
      
    </el-aside>
    <el-aside>
      <codemirror v-model="code" :options="cmOptions" @change="change"></codemirror>
    </el-aside>
    <el-main>
      <chart :options="option"></chart>
      <div v-text="option"></div>
    </el-main>
  </el-container>
</template>

<script>
import "echarts/lib/chart/bar";
// built-in theme
import "echarts/theme/dark";
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import { stringify } from 'qs'
// custom theme
// import theme from './theme.json'
export default {
  name: "charts",
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = i / 180 * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      msg: "Welcome to Your Vue.js App",
      form: {},
      cmOptions: {
        mode: this.mode,
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true,
        extraKeys: {'Ctrl-Space': 'autocomplete'},
      },
      option: {
        title: {
          text: ''
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      },
      code: "option = {a: 1,b:'c',c:['a','b','c']}",
      xData: '',
      yData: '',
      hasXSplit: 1,
      xLabelColor: '#000',
      xSplitColor: '#000',
      hasYSplit: 1,
      yLabelColor: '#000',
      ySplitColor: '#000',
      isGrent: 1,
      grentStartColor: '#000',
      grentEndColor: '#fff',
      type: [
        {
          value: "line",
          label: "折线图"
        },
        {
          value: "bar",
          label: "柱状图"
        },
        {
          value: "pie",
          label: "饼图"
        },
      ],
      value: ""
    };
  },
  methods: {
    change: function(code) {
      console.log(code)
    }
  },
  components: {
    codemirror
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
