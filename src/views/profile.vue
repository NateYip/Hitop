<template>
<el-main>
    <el-menu
    router
    :default-active="activeIndex"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    >
        <el-menu-item 
            index="/profile/usrinfo"
        >我的信息</el-menu-item>
        <el-menu-item 
            index="/profile/indentinfo"
        >历史订单</el-menu-item>
    </el-menu>
    <router-view></router-view>
</el-main>
  
</template>
<script>

export default {
    components:{
    },
    data() {
        return {
        activeIndex: '1',
        
        };
    },
    methods: {
    
    }
};
</script>
<style scoped>
.el-row {
    margin-bottom: 0px;
}
</style>