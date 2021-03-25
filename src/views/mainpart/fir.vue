<template>
<el-main>
  <mycarts v-for="i in iteminpage" :key="i" :items="items"></mycarts>
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
        items: 6,
        iteminpage: 4,
      }
    }
}
</script>

<style>

</style>