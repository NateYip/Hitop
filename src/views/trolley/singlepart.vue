<template>
  <el-row  type="flex" class="row-bg" justify="space-around">
      <el-button 
      >
        <el-col 
        :span="14" >
            <el-image 
            style="width: 100px; height: 100px"
            :src="Url"></el-image>
            <el-divider direction="vertical"></el-divider>
            <el-link
            type="primary"
            :underline="false"
            href="#">{{discriber}}</el-link>
            <el-divider direction="vertical"></el-divider>
            <span >单价：￥</span>
            <span>{{defaultprice}}</span>
            <el-divider direction="vertical"></el-divider>
            <span >数量：</span>
            <el-input-number v-model="Num" @change="handleChange" :min="0" :max="10" label="totalnumber"></el-input-number>
            <el-divider direction="vertical"></el-divider>
            <span>总价：￥</span>
            <span :totalprice="totalprice" style="display=inline width=100px " >{{totalprice}}</span>
            <el-divider direction="vertical"></el-divider>
           <el-button type="primary" plain>购买 ！</el-button>
        </el-col>
      </el-button>
      
  </el-row>
</template>

<script>

export default {
    components:{

    },
    data() {
        return{
            false:false,
            Url:"https://i.loli.net/2021/03/23/S5mOgTRNCBIt9G6.png", 
            discriber: "默认商品",
            Num: 1,
            defaultprice: 99.00 ,
            totalprice: 0 ,
        }
    },
    methods: {
      handleChange(value) {
        this.totalprice = this.defaultprice * value;
      }
    },

}
</script>

<style>

</style>