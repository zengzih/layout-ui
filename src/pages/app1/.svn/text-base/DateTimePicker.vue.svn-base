<template>
  <page sc-title='DateTimePicker 日期时间选择器'>
    <block sc-title='日期和时间点'>
		<div class="demo-block">
			<span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
		</div>
		
		<div class="demo-block">
			<span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions1">
    </el-date-picker>
		</div>
    </block>
	
	<block sc-title='日期和时间范围'>
	  <div class="demo-block">
        <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value3"
      type="datetimerange"
      placeholder="选择时间范围">
    </el-date-picker>
	  </div>
	  
	  <div class="demo-block">
        <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value4"
      type="datetimerange"
      :picker-options="pickerOptions2"
      placeholder="选择时间范围"
      align="right">
    </el-date-picker>
	  </div>
    </block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: '',
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value4: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.page {
	width:800px;
	min-height:800px;
}
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
