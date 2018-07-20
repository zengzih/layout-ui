<template>
  <page sc-title="尚诚新UI框架一期计划">
	<block sc-title="高优先级">
		<router-link to="/app3/5fangtu">五方图布局</router-link>
    <router-link to="/app3/treegrid">树Grid</router-link>
    <router-link to="/app3/datagrid">Grid(单元格合并)</router-link>
    <router-link to="/app3/elemtreetable">elementTreeGrid(饿了么树表格)</router-link>
		<router-link to="/app3/inputdropdown">带下拉列表输入框控件</router-link>
		<router-link to="/app3/formgroup">表单信息分组显示</router-link>
		<router-link to="/app3/advanceQuery">页面高级查询功能</router-link>
		<router-link to="/app3/normalQuery">页面普通查询功能</router-link>
		<router-link to="/app3/selectLinkSelect">多下拉控件级联功能</router-link>
		<router-link to="/app3/formmixlayout">表单混合布局(弹出层表单)</router-link>
		<router-link to="/app3/sciconsfont">扩展饿么新框架的字体图标</router-link>
		<router-link to="/app3/multiSelect">下拉框多选功能封装实现</router-link>
	</block>
	<block sc-title="中优先级">
		<router-link to="/app3/formpopup">表单中的弹出层</router-link>
		<router-link to="/app3/formheadermergesort">表头合并排序</router-link>
		<router-link to="/app3/calendarUi">calendar UI</router-link>
	</block>
	<block sc-title="低优先级">
		<router-link to="/app3/DynAddInput">动态新增表单</router-link>
		<router-link to="/app3/droptable">下拉表格</router-link>
		<router-link to="/app3/droptree">下拉树</router-link>
		<router-link to="/app3/dropsearchtree">下拉搜索树</router-link>
		<router-link to="/app3/editTable">单元格嵌入表单组件表格</router-link>
		<router-link to="/app3/treeLinkForm">树与表格数据联动</router-link>
		<router-link to="/app3/toptab">顶部tab（饿了么）</router-link>
		<router-link to="/app3/sidetabpage">侧边tab页面</router-link>
    	<router-link to="/app3/tabstep">顶部step</router-link>
    	<router-link to="/app3/twoTree">左右树</router-link>
	</block>

	<block sc-title="其他">
		<router-link to="/app3/sccurdtable">增删改查</router-link>
		<router-link to="/app3/formlayout2">带边框表单布局</router-link>
	</block>

	<block sc-title="新增需求">
		<router-link to="/app3/AccordionDataGrid">银行间清算确认-交收划款与指令核对demo</router-link>
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
