<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in items" :key="item" :value="item" >
       <el-image
        style="width: 100%; height: 300px"
        :src="item"
        fit="fit"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>
<script>

export default ({
    data() {
        return {
            items:{
                fir: "https://i.loli.net/2021/03/22/WounN2aqpySszHF.jpg" ,
                sec: "https://i.loli.net/2021/03/22/Cy85VPYlNKu1AOi.jpg" ,
                thi: "https://i.loli.net/2021/03/22/rgM2QeIZ1dAkS9x.jpg" ,
                for: "https://i.loli.net/2021/03/22/F6YizyehvZpGflB.jpg" ,
            },
            
        }
    },
})
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>