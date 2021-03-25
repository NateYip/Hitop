<template>
<el-card>
    <el-row>
        <el-col :span="24">
            <el-image :src="url"></el-image>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-row>
                <el-col :span="24">
                    <h1>这是一个锤子</h1>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <p :defaultprice="defaultprice">价格：￥{{defaultprice}} </p>
                </el-col>
            </el-row>
                
        </el-col>
    </el-row>
</el-card>
</template>

<script>
export default {
    data() {
        return{
            defaultprice:33.00,
             url:"https://i.loli.net/2021/03/23/S5mOgTRNCBIt9G6.png",
        }
    }
}
</script>

<style>

</style>