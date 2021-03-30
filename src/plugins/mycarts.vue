<template>
    <el-row type="flex"  justify="space-around" class="cardrow">
        <el-col :span="3" v-for="i in items" :key="i" class="cardcol" >
            <el-button>
               <div class="outter">
                   <singlecart :defaultprice="defaultprice" :defaultname="defaultname" :url="url" :i="i"></singlecart>
               </div>
            </el-button>
        </el-col>
    </el-row>  
</template>


<script>
import singlecart from "./singlecart"
export default {
    components:{
        singlecart,
    },
    props: { items:{type: Number, requires: true}},
    data() {
        return{
            url:[
                require('@/assets/card/1.jpg'),
                require('@/assets/card/2.jpg'),
                require('@/assets/card/3.jpg'), 
                require('@/assets/card/4.jpg'),
                require('@/assets/card/5.jpg'), 
                require('@/assets/card/6.jpg'), 
            ],
            defaultprice: [
                99.00,33.00,69.00,145.00,135.00,79.00
                ],
            defaultname: [
                "爽肤水","公共政策学","送礼必选天气瓶","双肩背包黑色","越南椰糖","固体理论",
            ],
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