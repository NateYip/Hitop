<template>
  <el-main>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col
      :span="10">
      <singleindent v-for="i in 4" :key="i"></singleindent>
      </el-col>
      <el-col
      :span="10">
      <singleindent v-for="j in 4" :key="j"></singleindent>
      </el-col>
    </el-row>
    <pagefooter></pagefooter>
  </el-main>
</template>

<script>
import Singleindent from './singleindent.vue';
import pagefooter from '../../plugins/pagefooter';
export default {
    components:{
        Singleindent,
        pagefooter,
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

<style scoped>
.el-row {
    margin-bottom: 0px;
}
.el-main{
  text-align: center;
}
</style>