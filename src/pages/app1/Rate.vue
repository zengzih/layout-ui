<template>
  <page sc-title='Rate 评分'>
    <block sc-title='基础用法'>
	  <div class="demo-block">
  <span class="demonstration">默认不区分颜色</span>
  <el-rate v-model="value1"></el-rate>
</div>
<div class="demo-block">
  <span class="demonstration">区分颜色</span>
  <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
</div>
    </block>
	
	<block sc-title='辅助文字'>
		<el-rate
		  v-model="value3"
		  show-text>
		</el-rate>
	</block>
	
	<block sc-title='其它 icon'>
		<el-rate
		  v-model="value4"
		  :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
		  void-icon-class="icon-rate-face-off"
		  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
		</el-rate>
	</block>
	
	<block sc-title='只读'>
		<el-rate
		  v-model="value5"
		  disabled
		  show-text
		  text-color="#ff9900"
		  text-template="{value}">
		</el-rate>
	</block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value1: null,
      value2: null,
      value3: null,
      value4: null,
      value5: 3.7
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
