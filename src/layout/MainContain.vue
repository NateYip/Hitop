<template>
  <el-container >
  <el-header>
    <myheader >
    </myheader>
  </el-header>
  <el-container class="outtercontain">
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
          
        };
    },
    methods:{

    }

})
</script>
<style  scoped>
.el-header {
  background-color: #ffffff;
  color: #333;
  border-bottom: 1px solid rgba(244,244,245);
  text-align: center;
  line-height: 60px;
  padding:0;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
  border-right: 1px solid rgba(244,244,245);
}
.outtercontain{
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    height: calc(100vh - 60px);
    padding:0;
}
.el-main {
    display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
    padding:0;
}
</style>