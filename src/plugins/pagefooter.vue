<template>
<el-pagination
      :current-page.sync="currentPage"
      :page-size="10"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
</template>

<script>
export default {
  methods: {
     
    },
    data() {
      return {
        currentPage: 1      };
    }
}
</script>

<style scoped>
  .el-main{
    text-align: center;
  }
</style>