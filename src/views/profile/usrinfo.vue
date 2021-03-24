<template>
    <el-row 
    :gutter="10" 
    justify="space-around">
        <el-col 
        :span="6">
            <div class="grid-content bg-purple">
                <usravator></usravator>
            </div>
        </el-col>
        <el-col :span="18">
            <div class="grid-content bg-purple">
                <usrdetail></usrdetail>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import usravator from "../../plugins/profile/usravator"
import  usrdetail from "../../plugins/profile/usrdetail"
export default {
    components:{ 
        usravator,
        usrdetail,
    },
    data() {
        return{
        }
    }
    
}
</script>
<style>
.el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
   .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>