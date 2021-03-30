<template>
 <el-card>
    <el-row>
        <el-col :span="24">
            <el-image :src='url[i-1]'></el-image>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <el-row>
                <el-col :span="24">
                    <h1>{{defaultname[i-1]}}</h1>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <p >价格：￥{{defaultprice[i-1]}} </p>
                </el-col>
            </el-row>
                
        </el-col>
    </el-row>
 </el-card>
</template>

<script>
export default {
    props:{ 
        url:{type:Array, requires: true},
        i:{type:Number, requires: true},
        defaultname:{type:Array , requires:true},
        defaultprice:{type:Array,requires: true }
    },
    data() {
        return{
            
        }
    }
}
</script>

<style>

</style>