<template>
<div>
    <el-row>
        <el-col :span="24"> 
            <div class="content usrname" :usrname="usrname">{{usrname}}</div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24"> 
            <div class="content" :usrmail="usrmail">{{usrmail}}</div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24"> 
             <div class="content" :usrphone="usrphone">{{usrphone}}</div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24"> 
            <div class="content" :usrcredic="usrcredic">星级：{{usrcredic}}</div>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="24"> 
            <div class="content" >支付方式</div>
        </el-col>
    </el-row>
</div>
</template>
<script>
export default {
    data() {
        return {
            usrname:"张澜潇",
            usrphone:"13992336644",
            usrmail:"wochaoyongde@qq.com",
            usrcredic:"98"
        }
    }
}
</script>
<style  scoped>
.el-row {
    margin:10px 0;
}
.el-col{
    text-align:left;
}
.content{
    margin-left:30% ;
}
.usrname{
    font-size:30px;
    font-weight:400;
}
</style>