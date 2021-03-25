<template>
    <el-row type="flex"  justify="space-around" class="cardrow">
        <el-col :span="3" v-for="i in items" :key="i" class="cardcol" >
            <el-button>
               <div class="outter">
                <singlecart></singlecart>
               </div>
            </el-button>
        </el-col>
    </el-row>  
</template>


<script>
import singlecart from "./singlecart"
export default {
    components:{
        singlecart
    },
    props: { items:{type: Number, requires: true}},
    data() {
        return{
            
        }
    }
}
</script>

<style scoped>
.outter{
    border-radius: 4px;
    background: #000;
}
.cardrow {
    margin-bottom: 20px;
}
.cardcol {
    border-radius: 4px;
}
.el-button{
    padding:0
}
</style>