<template>
  <page sc-title='Slider 滑块'>
    <block sc-title='基础用法'>
	<div class="demo-block-wrap">
	  <div class="demo-block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1"></el-slider>
  </div>
  <div class="demo-block">
    <span class="demonstration">自定义初始值</span>
    <el-slider v-model="value2"></el-slider>
  </div>
  <div class="demo-block">
    <span class="demonstration">隐藏 Tooltip</span>
    <el-slider v-model="value3" :show-tooltip="false"></el-slider>
  </div>
  <div class="demo-block">
    <span class="demonstration">格式化 Tooltip</span>
    <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
  </div>
  <div class="demo-block">
    <span class="demonstration">禁用</span>
    <el-slider v-model="value5" disabled></el-slider>
  </div>
  </div>
    </block>
	
	<block sc-title='离散值'>
	  <div class="demo-block-wrap">
	    <div class="demo-block">
    <span class="demonstration">不显示间断点</span>
    <el-slider
      v-model="value6"
      :step="10">
    </el-slider>
  </div>
  <div class="demo-block">
    <span class="demonstration">显示间断点</span>
    <el-slider
      v-model="value7"
      :step="10"
      show-stops>
    </el-slider>
  </div>
	  </div>
    </block>
	
	<block sc-title='带有输入框'>
	  <div class="demo-block-wrap">
	    <div class="demo-block">
			<el-slider
			  v-model="value8"
			  show-input>
			</el-slider>
        </div>
	  </div>
    </block>
	
	<block sc-title='范围选择'>
	  <div class="demo-block-wrap">
	    <div class="demo-block">
			 <el-slider
      v-model="value9"
      range
      show-stops
      :max="10">
    </el-slider>
        </div>
	  </div>
    </block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 30,
      value7: 20,
      value8: 50,
      value9: [4, 8]
    }
  },
  methods: {
    formatTooltip (val) {
      return val / 100
    }
  }
}
</script>

<style lang="less" scoped>
.demo-block-wrap {
    border: 1px solid #eaeefb;
    border-radius: 4px;
    transition: .2s;
	margin-bottom: 24px;
	.source {
		padding: 0;
	}
	.demo-block {
		padding: 30px 24px;
		overflow: hidden;
		border-bottom: 1px solid #eff2f6;
	}
}
</style>
