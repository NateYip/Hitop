<template>
    <el-main>
            <mycarousel></mycarousel>
            <div class="mydivider">
                <mydivider :choices="choices" class="mydivider"></mydivider>
                <router-view></router-view>
            </div>        
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
            "商品热销","猜你喜欢","数码3C","生活用品","品牌服饰","精选美食",
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
<style scoped>

.mydivider{
  position:sticky;
  top: 0px;
  background-color: #ffffff;
  z-index: 99;
}
</style>