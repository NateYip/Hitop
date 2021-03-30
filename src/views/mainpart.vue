<template>
    <el-main>
            <mycarousel></mycarousel>
            <el-row 
            justify="space-around"
            :gutter=20
            style="margin:10px 20px 10px 20px"
            >
                <el-col 
                :span="6" 
                v-for="j in url" :key="j" >
                    <el-card>
                        <el-image :src="j"></el-image>
                        <span style="display: block">友人之声
                        </span>
                    </el-card>
                </el-col>
            </el-row>
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
        endless: 8,
        url:[
          "https://i.loli.net/2021/03/29/BFbpLmQlCda8ROI.png",
          "https://i.loli.net/2021/03/29/G4uZrbHcEhTVPJk.png",
          "https://i.loli.net/2021/03/29/f4gRQmP2puENTvG.png",
          require('@/assets/ground/4.png')
        ]
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
.el-main{
    text-align: center;
    padding-top: 0px;
}
</style>