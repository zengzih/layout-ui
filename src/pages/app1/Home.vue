<template>
  <page sc-title="饿了么UI组件 ElementUI">
	<block sc-title="基础">
    <router-link to="/layout">布局 Layout</router-link>
    <router-link to="/color">颜色 Color</router-link>
    <router-link to="/font">字体 Font</router-link>
    <router-link to="/icon">Icon 图标</router-link>
    <router-link to="/button">Button 按钮</router-link>
	</block>
	
	<block sc-title="表单">
		<router-link to="/radio">Radio 单选框</router-link>
		<router-link to="/checkbox">Checkbox 多选框</router-link>
		<router-link to="/input">Input 输入框</router-link>
		<router-link to="/inputnumber">InputNumber 计数器</router-link>
		<router-link to="/select">Select 选择器</router-link>
		<router-link to="/cascader">Cascader 级联选择器</router-link>
		<router-link to="/switch">Switch 开关</router-link>
		<router-link to="/slider">Slider 滑块</router-link>
		<router-link to="/timepicker">TimePicker 时间选择器</router-link>
		<router-link to="/datepicker">DatePicker 日期选择器</router-link>
		<router-link to="/datetimepicker">DateTimePicker 日期时间选择器</router-link>
		<router-link to="/upload">Upload 上传</router-link>
		<router-link to="/rate">Rate 评分</router-link>
		<router-link to="/colorpicker">ColorPicker 颜色选择器</router-link>
		<router-link to="/form">Form 表单</router-link>
	</block>
	
	<block sc-title="数据">
		<router-link to="/table">Table 表格</router-link>
		<router-link to="/tag">Tag 标签</router-link>
		<router-link to="/progress">Progress 进度条</router-link>
		<router-link to="/tree">Tree 树形控件</router-link>
		<router-link to="/pagination">Pagination 分页</router-link>
		<router-link to="/badge">Badge 标记</router-link>
	</block>
	
	<block sc-title="导航">
		<router-link to="/navmenu">NavMenu 导航菜单</router-link>
		<router-link to="/tabs">Tabs 标签页</router-link>
		<router-link to="/breadcrumb">Breadcrumb 面包屑</router-link>
		<router-link to="/dropdown">Dropdown 下拉菜单</router-link>
		<router-link to="/steps">Steps 步骤条</router-link>
	</block>
	
	<block sc-title="SCUI 自建组件">
		<router-link to="/admin">后台框架 ScAdmin</router-link>
		<router-link to="/sccurdtable">增删改查</router-link>
		<router-link to="/schome">SCUI Home</router-link>
		<router-link to="/scdialog">对话框 ScDialog</router-link>
	</block>
  </page>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
a { display:inline-block; &+a {margin-left:10px;}}
</style>
