<template>
  <page sc-title='TimePicker 时间选择器'>
    <block sc-title='固定时间点'>
	  <el-time-select
  v-model="value1"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>
    </block>
	
	<block sc-title='任意时间点'>
	  <el-time-picker
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </el-time-picker>
    </block>
	
	<block sc-title='固定时间范围'>
	  <el-time-select
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </el-time-select>
  <el-time-select
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </el-time-select>
    </block>
	
	<block sc-title='任意时间范围'>
	  <el-time-picker
    is-range
    v-model="value3"
    placeholder="选择时间范围">
  </el-time-picker>
    </block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      value1: '',
      value2: new Date(2016, 9, 10, 18, 40),
      startTime: '',
      endTime: '',
      value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
</style>
