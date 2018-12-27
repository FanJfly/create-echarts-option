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
          <el-select v-model="hasXSplit" @change="(value) => setAxisConfig(value, 'x', 'tick')">   
            <el-option value="是">是</el-option>
            <el-option value="否">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="x轴label颜色">
          <el-color-picker v-model="xLabelColor" @change="(value) => setAxisConfig(value, 'x', 'labelColor')"></el-color-picker>
        </el-form-item>

        <el-form-item label="x轴颜色">
          <el-color-picker v-model="xSplitColor" @change="(value) => setAxisConfig(value, 'x', 'axisColor')"></el-color-picker>
        </el-form-item>

        <el-form-item label="y轴数据">
          <el-input label="yAxis" placeholder="y轴数据" v-model="yData"></el-input>
        </el-form-item>

        <el-form-item label="是否显示y轴刻度 ">
          <el-select v-model="hasYSplit" @change="(value) => setAxisConfig(value, 'y', 'tick')">   
            <el-option value="是">是</el-option>
            <el-option value="否">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="y轴label颜色">
          <el-color-picker v-model="yLabelColor"  @change="(value) => setAxisConfig(value, 'y', 'labelColor')"></el-color-picker>
        </el-form-item>

        <el-form-item label="y轴颜色">
          <el-color-picker v-model="ySplitColor"  @change="(value) => setAxisConfig(value, 'y', 'axisColor')"></el-color-picker>
        </el-form-item>

        <el-form-item label="线条是否渐变">
          <el-select v-model="isGrent">
            <el-option value="是">是</el-option>
            <el-option value="否">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="线条渐变始色-渐变结色">
          <el-color-picker v-model="grentStartColor"></el-color-picker>
          <el-color-picker v-model="grentEndColor"  @change="(value) => setSeriesConfig('lineGrent')"></el-color-picker>
        </el-form-item>

        <el-form-item label="是否平滑">
          <el-select v-model="isSmooth" @change="(value) => setSeriesConfig('toSmooth',value)">
            <el-option value="是">是</el-option>
            <el-option value="否">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否显示为面积图">
          <el-select v-model="isArea" @change="() => setSeriesConfig('toArea', value)">
            <el-option value="是">是</el-option>
            <el-option value="否">否</el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="面积图渐变始色-渐变结色">
          <el-color-picker v-model="areaGrentStartColor"></el-color-picker>
          <el-color-picker v-model="areaGrentEndColor"  @change="(value) => setSeriesConfig('areaGrent')"></el-color-picker>
        </el-form-item>

      </el-form>
      
      
      
    </el-aside>
  <!--   <el-aside>
      <codemirror :value="option" :options="cmOptions" @change="change"></codemirror>
    </el-aside> -->
    <el-main>
      <ECharts :options="option"></ECharts>
      <json-viewer
        :value="option"
        :expand-depth=5
        copyable
        boxed
      />
    </el-main>
  </el-container>
</template>

<script>
import "echarts/lib/chart/bar";
// built-in theme
import "echarts/theme/dark";
import ECharts from "../components/ECharts";
import echarts from "echarts";
import JsonViewer from "vue-json-viewer";

export default {
  name: "charts",
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    return {
      msg: "Welcome to Your Vue.js App",
      form: {},
      formatOption: "",
      cmOptions: {
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true,
        extraKeys: { "Ctrl-Space": "autocomplete" },
        styleActiveLine: true,
        line: true,
        mode: "text/javascript",
        theme: "default"
      },
      option: {
        title: {
          text: ""
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      },
      xData: "",
      yData: "",
      hasXSplit: "是",
      xLabelColor: "#000",
      xSplitColor: "#000",
      hasYSplit: "是",
      yLabelColor: "#000",
      ySplitColor: "#000",
      isGrent: "否",
      grentStartColor: "#000",
      grentEndColor: "#fff",
      areaGrentStartColor: "#000",
      areaGrentEndColor: "#fff",
      isSmooth: "否",
      isArea: "否",
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
        }
      ],
      value: ""
    };
  },
  methods: {
    getConfig(attr, value) {
      let setting = {};
      switch (attr) {
        //是否显示坐标轴刻度
        case "tick":
          setting = {
            axisTick: {
              show: value === "是" ? true : false
            }
          };
          return setting;
          break;
        //设置坐标轴颜色刻度
        case "labelColor":
          setting = {
            axisLabel: {
              textStyle: {
                color: value
              }
            }
          };
          return setting;
          break;
        //设置坐标轴颜色
        case "axisColor":
          setting = {
            axisLine: {
              lineStyle: {
                color: value
              }
            }
          };
          return setting;
          break;
        //设置折线图线条是否平滑
        case "toSmooth":
          setting = {
            smooth: value === "是" ? true : false
          };
          return setting;
          break;
        //设置是否为面积图
        case "toArea":
          value === "是"
            ? (setting = {
                areaStyle: {}
              })
            : {};
          return setting;
          break;
        //设置线条渐变
        case "lineGrent":
          setting = {
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: this.grentStartColor
                },
                {
                  offset: 0,
                  color: this.grentEndColor
                }
              ])
            }
          };
          return setting;
          break;
        //设置面积图渐变
        case "areaGrent":
          setting = {
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: this.areaGrentStartColor
                },
                {
                  offset: 1,
                  color: this.areaGrentEndColor
                }
              ])
            }
          };
          return setting;
          break;
        default:
          return setting;
          break;
      }
    },

    setAxisConfig(value, axis, attr) {
      let setting = this.getConfig(attr, value);
      this.option[`${axis}Axis`] = {
        ...this.option[`${axis}Axis`],
        ...setting
      };
    },

    setSeriesConfig(attr, value) {
      let setting = this.getConfig(attr, value);
      this.option["series"] = this.option["series"].map(item => {
        item = {
          ...item,
          ...setting
        };
        return item;
      });
    },
  },
  watch: {
    option: {
      handler(curVal, oldVal) {
        console.log(curVal.toString(), oldVal.toString());
        this.formatOption = curVal;
      },
      deep: true
    }
  },
  components: {
    ECharts,
    JsonViewer
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
