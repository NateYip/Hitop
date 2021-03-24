<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col> 
                    <span
                    style="display=inline-block"
                    :usrname="usrname">用户名：{{usrname}}</span>
                   
                    <span
                    style="display=inline-block"
                    :usrphone="usrphone">手机号：{{usrphone}}</span>
             
                    <span
                    style="display=inline-block"
                    :usrmail="usrmail">邮箱：{{usrmail}}</span>

                    <span
                    style="display=inline-block"
                    :usrname="usrcredic">支付设置</span>
                </el-col>
            </el-row>
           
            
        </el-main>
    </el-container>
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