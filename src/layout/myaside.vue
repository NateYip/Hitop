<template>
<div> 
    <el-avatar :size="100" :src="url"></el-avatar>
      <el-menu
        router
        default-active="1"
        class="el-menu-vertical-demo">
        <el-menu-item index="/mainpart" route="/mainpart" >
          <i class="el-icon-shopping-bag-1"></i>
          <span slot="title">主&ensp;&ensp;页</span>
        </el-menu-item>
        <el-menu-item index="/profile" route="/profile" >
          <i class="el-icon-user"></i>
          <span slot="title">个&ensp;&ensp;人</span>
        </el-menu-item>
        <el-menu-item index="/trolley" route="/trolley"  >
          <i class="el-icon-shopping-cart-2"></i>
          <span slot="title">购物车</span>
        </el-menu-item> 
      </el-menu>
</div>
   
</template>

<script>


export default ({
    components:{
    
    },
    data(){ 
        return{
          url:"https://i.loli.net/2021/03/22/Q3gbo7cyv2AKz6O.jpg"
        };
    },
    methods:{

    }

})
</script>
