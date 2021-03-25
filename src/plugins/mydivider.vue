<template> 
<el-menu 
    :default-active="activeIndex" 
    mode="horizontal" 
    router
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    >
    <el-row  type="flex"  justify="space-around">
        <el-col :span="4">
            <el-menu-item 
            index="/mainpart/fir"
            >{{choices[0]}}</el-menu-item>
        </el-col>
        <el-col :span="4">
            <el-menu-item 
            index="/mainpart/sec"
            >{{choices[1]}}</el-menu-item>
        </el-col>
        <el-col :span="4">
            <el-menu-item 
            index="/mainpart/thi"
            >{{choices[2]}}</el-menu-item>
        </el-col>
        <el-col :span="4">
            <el-menu-item 
            index="/mainpart/for"
            >{{choices[3]}}</el-menu-item>
        </el-col>
        <el-col :span="4">
            <el-menu-item 
            index="/mainpart/fif"
            >{{choices[4]}}</el-menu-item>
        </el-col>
        <el-col :span="4">
            <el-menu-item 
            index="/mainpart/six"
            >{{choices[5]}}</el-menu-item>    
        </el-col>    
    </el-row>
</el-menu>
</template>
<script>
export default {
    props: { choices: { type: Array, requires: true } },
    data(){
        return{
            activeIndex: '1',
        }
    }
}
</script>

<style scoped>
.el-row {
    margin-bottom: 0px;
}
.el-col {
    text-align: center;
}
</style>