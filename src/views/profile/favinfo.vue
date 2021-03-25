<template>
<el-main>
    <mycarts
    v-for="i in iteminpage" :key="i"></mycarts>
    <pagefooter></pagefooter>
</el-main>
    
</template>
<script>
import mycarts from "../../plugins/mycarts"
import Pagefooter from '../../plugins/pagefooter.vue'
export default {
    components:{
        mycarts,
        Pagefooter,
    },
    data() {
        return{
            iteminpage:3
        }
    }
}
</script>

<style scoped>
.el-main{
    text-align: center;
  }
</style>