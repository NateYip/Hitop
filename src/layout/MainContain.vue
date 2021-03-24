<template>
    <el-container>
  <el-header>
    <myheader >
    </myheader>
  </el-header>
  <el-container>
    <el-aside width="150px">
      <myaside>
      </myaside>
    </el-aside>
    <router-view></router-view>
  </el-container>
  
</el-container>
</template>

<script>
import myaside from "./myaside"
import myheader from "./myheader"

export default ({
    components:{
      myaside,
      myheader
    },
    data(){ 
        return{
          url:"https://i.loli.net/2021/03/22/Q3gbo7cyv2AKz6O.jpg"
        };
    },
    methods:{

    }

})
</script>
<style lang="scss">
.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  margin-top:5px;
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}
  
  
</style>