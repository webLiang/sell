<template>
  <div class="hello">
   <schart :canvasId="canvasId" :type="type" :width="width"
    :height="height" :data="data" :options="options"></schart>
  </div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    data() {
        return {
            canvasId: 'myCanvas',
            type: 'line',
            width: 300,
            height: 400,
            data: [
                {name: '2014', value: 1342},
                {name: '2015', value: 2123},
                {name: '2016', value: 1654},
                {name: '2017', value: 1795},
            ],
            options: {
                padding: 37,                   // canvas 内边距
                bgColor: '#fff',            // 默认背景颜色
                title: 'vue-schart互动演示案例',// 图表标题
                titleColor: '#000000',         // 图表标题颜色
                titlePosition: 'top' ,     // 图表标题位置: top / bottom
                yEqual: 5,                     // y轴分成5等分
                fillColor: '#1E9FFF',          // 默认填充颜色
                contentColor: '#eeeeee',       // 内容横线颜色
                axisColor: '#666666',          // 坐标轴颜色
                
            }
        }
    },
    components:{
        Schart
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
