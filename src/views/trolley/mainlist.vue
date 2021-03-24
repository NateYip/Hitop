<template>
<el-row  type="flex" class="row-bg" justify="space-around">
    <el-col :span="12"><singlepart></singlepart></el-col>
</el-row>
</template>

<script>
import singlepart from "./singlepart"
export default {
    components:{ 
        singlepart,
    },
    data() {
        return{
           
        }
    }

}
</script>

<style>

</style>