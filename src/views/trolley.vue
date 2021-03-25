<template>
<el-main>
    <mainlist v-for="i in 5" :key="i"></mainlist>
    <pagefooter></pagefooter>
</el-main>
  
</template>

<script>
import mainlist from "./trolley/mainlist"
import pagefooter from '../plugins/pagefooter.vue'
export default {
  components: { 
      pagefooter,
      mainlist,
  },
  data () {
      return{
          
      }
  }
    
}
</script>

<style scoped>
.el-main{
    text-align: center;
    padding-top: 10px;
}
</style>