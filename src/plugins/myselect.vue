<template>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            {{current}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="i in options" :command="i.label" :key="i.index">{{i.label}}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '中文 '
        }, {
          value: '选项2',
          label: 'English'
        }, {
          value: '选项3',
          label: 'عربي'
        }, {
          value: '选项4',
          label: 'አማርኛ'
        }, {
          value: '选项5',
          label: 'اردو'
        }],
        current: "中文"
      }
    },
    methods: {
      handleCommand(command) {
        this.current = command
      }
    }
  }
</script>
