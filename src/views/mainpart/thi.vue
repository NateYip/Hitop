<template>
<el-main>
  <mycarts v-for="i in iteminpage" :key="i"></mycarts>
</el-main>
  
</template>

<script>
import mycarts from "../../plugins/mycarts"
export default {
    components:{
        mycarts,
    },
    data()  {
      return {
        iteminpage: 4,
      }
    }
}
</script>

<style>

</style>