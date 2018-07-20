<template>
  <page sc-title="Checkbox 多选框">
  <block sc-title="基础用法">
    <el-checkbox v-model="checked">备选项</el-checkbox>
  </block>
  
  <block sc-title="禁用状态">
    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
  </block>
  
  <block sc-title="多选框组">
    <el-checkbox-group v-model="checkList">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </block>
  
   <block sc-title="indeterminate 状态">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city">{{city}}</el-checkbox>
      </el-checkbox-group>
  </block>
  
  <block sc-title="可选项目数量的限制">
    <el-checkbox-group 
    v-model="checkedCities1"
    :min="1"
    :max="2">
    <el-checkbox v-for="city in cities" :label="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </block>
  </page>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳']

export default {
  data () {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ['选中且禁用', '复选框 A'],
      checkAll: true,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      checkedCities1: ['上海', '北京']
    }
  },
  methods: {
    handleCheckAllChange (event) {
      this.checkedCities = event.target.checked ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>

<style scoped>
</style>
