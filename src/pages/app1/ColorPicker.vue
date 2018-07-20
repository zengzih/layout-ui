<template>
  <page sc-title='ColorPicker 颜色选择器'>
    <block sc-title='基础用法'>
	  <div class="demo-block">
  <span class="demonstration">有默认值</span>
  <el-color-picker v-model="color1"></el-color-picker>
</div>
<div class="demo-block">
  <span class="demonstration">无默认值</span>
  <el-color-picker v-model="color2"></el-color-picker>
</div>
    </block>
	
	<block sc-title='选择透明度'>
	  <el-color-picker v-model="color3" show-alpha></el-color-picker>
    </block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      color1: '#20a0ff',
      color2: null,
      color3: 'rgba(19, 206, 102, 0.8)'
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.demo-block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    float: left;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
        border-right: none;
    }
    .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
    }
}
</style>
