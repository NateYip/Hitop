<template>
<div>
    <el-avatar 
    :size="200" :src="Url"></el-avatar>
    <el-divider></el-divider>
    <usrdetail></usrdetail>
</div>
    
</template>

<script>
import usrdetail from "./usrdetail"
export default {
    components:{
        usrdetail,
    },
    data() {
        return{
            Url:"https://i.loli.net/2021/03/22/Q3gbo7cyv2AKz6O.jpg",
           
        }
    }
    
}
</script>
<style scoped>
.el-avatar{
    margin: 30px 0 0 0;
}
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 90%;
    margin: 5% 5%;
    background-color: #9a9a9a;
}
</style>

