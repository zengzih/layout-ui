<template>
  <page sc-title='InputNumber 计数器'>
  
  <block sc-title='基础用法'>
	<el-input-number v-model="num1" @change="handleChange" min="1" max="10"></el-input-number>
  </block>
  
  <block sc-title='禁用状态'>
	<el-input-number v-model="num2" :disabled="true"></el-input-number>
  </block>
  
  <block sc-title='步数'>
	<el-input-number v-model="num3" :step="2"></el-input-number>
  </block>
  
  <block sc-title='尺寸'>
	<el-input-number size="large" v-model="num4"></el-input-number>
    <el-input-number v-model="num5"></el-input-number>
    <el-input-number size="small" v-model="num6"></el-input-number>
  </block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      num5: 1,
      num6: 1
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="less">
</style>
