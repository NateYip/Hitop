<template>
    <el-row type="flex"  justify="space-around" class="cardrow">
        <el-col :span="3" v-for="i in 5" :key="i" class="cardcol" >
               <div class="outter">
                <el-card>
                    <el-image :src="url"></el-image>
                </el-card>
               </div>
        </el-col>
    </el-row>  
</template>


<script>
export default {
    data() {
        return{
            url:"https://i.loli.net/2021/03/23/S5mOgTRNCBIt9G6.png",
            discriber:"商品描述"
        }
    }
}
</script>

<style>
.outter{
    background: #000;
}
.cardrow {
    margin-bottom: 20px;
}
.cardcol {
border-radius: 4px;
}
</style>