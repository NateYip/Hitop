<template>
    <el-main class="mymain">
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto"  >
            <mycarousel></mycarousel>
            <mydivider :choices="choices" ></mydivider>
            <router-view></router-view>
        </ul>
        
    </el-main>
</template>

<script>
import mycarousel from "../plugins/mainpart/mycarousel"
import mydivider from "../plugins/mydivider"
export default {
   components:{
       mycarousel,
       mydivider,
   },
   data () {
      return {
        choices: [
            "商品热销","猜你喜欢","数码3C","生活用品","品牌服饰","生鲜速递",
        ],
        endless: 8
      }
    },
    methods: {
      load () {
        this.endless += 0
      }
    },
    
}
</script>
<style type="text/css">
 .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    height:calc(100vh - 60px)
  }
</style>