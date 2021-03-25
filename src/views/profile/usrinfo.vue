<template>
    <el-row 
    :gutter="10" 
    justify="space-around">
        <el-col 
        :span="8">
            <div class="grid-content bg-purple">
                <usravator></usravator>
            </div>
        </el-col>
        <el-col :span="16">
            <h3 style="text-align:center" >我的收藏</h3>
            <div class="grid-content bg-purple">
                <mycarts v-for="i in 2" :key="i" :items="items"></mycarts>
                <pagefooter></pagefooter>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import usravator from "../../plugins/profile/usravator"
import mycarts from "../../plugins/mycarts"
import pagefooter from '../../plugins/pagefooter'
export default {
    components:{ 
        usravator,
        mycarts,
        pagefooter,
    },
    data() {
        return{
            items: 5
        }
    }
    
}
</script>
<style scoped>
.el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
   .bg-purple {
    background: #ffffff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;

  }

</style>