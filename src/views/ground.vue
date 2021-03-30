<template>
<el-main>
    <el-row 
    justify="space-around"
    :gutter=20
    style="margin:10px 20px 10px 20px"
    >
        <el-col 
        :span="6" 
        v-for="j in urlf" :key="j" >
            <el-card>
                <el-image :src="j"></el-image>
                <span style="display: block">正在直播... ...
                </span>
            </el-card>
        </el-col>
    </el-row>
    <el-row 
    justify="space-around"
    :gutter=20
    style="margin:10px 20px 10px 20px"
    >
        <el-col 
        :span="6" 
        v-for="j in urls" :key="j" >
            <el-card>
                <el-image :src="j"></el-image>
                <span style="display: block">正在直播... ...
                </span>
            </el-card>
        </el-col>
    </el-row>
    <pagefooter></pagefooter>
</el-main>

</template>

<script>
import pagefooter from '../plugins/pagefooter'
export default {
components:{
    pagefooter,
},
data() {
    return{
        urlf:[
            "https://i.loli.net/2021/03/29/BFbpLmQlCda8ROI.png",
            "https://i.loli.net/2021/03/29/G4uZrbHcEhTVPJk.png",
            
        ],
        urls:[
            "https://i.loli.net/2021/03/29/f4gRQmP2puENTvG.png",

        ]
    }
}
}
</script>

<style>
.el-main{
    text-align: center;
    padding-top: 10px;
}
</style>