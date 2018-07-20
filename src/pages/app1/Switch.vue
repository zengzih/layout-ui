<template>
  <page sc-title='Switch 开关'>
    <block sc-title='基本用法'>
	  <el-switch
  v-model="value1"
  on-text=""
  off-text="">
</el-switch>
<el-switch
  v-model="value2"
  on-color="#13ce66"
  off-color="#ff4949">
</el-switch>
    </block>
	
	<block sc-title='禁用状态'>
	  <el-switch
  v-model="value3"
  on-text=""
  off-text=""
  disabled>
</el-switch>
<el-switch
  v-model="value3"
  disabled>
</el-switch>
    </block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value1: true,
      value2: true,
      value3: true
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
