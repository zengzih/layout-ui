<template>
  <page sc-title="五方图布局" class="sc-theme">
    <block sc-title="单容器">
		<sc-layout bgcolor="#99A9BF" color="#fff" height="300px">
      <div style="width:100%;height:500px">
        <sc-data-grid
          :data="tableData"
          :column="column"
          :width="tableWidth"
          :auto-merge-cells="autoMergeCells"
          :fit-columns="fitColumns"
          :row-numbers="rownumbers"
          :fix-columns="fixColumns"
          :handle-btn="handleBtn"
          @on-sort-click="onSortColEvent"
          @handle-click="ctrClickEvent"
          @edit-click="editColEvent"
        ></sc-data-grid>
    </div></sc-layout>
	</block>

	<block sc-title="左中右">
		<sc-layout width="100%" color="#333" height="300px" :east="east" :west="west">
			<div slot="north">
				顶部内容
			</div>
			<div slot="south">
				底部内容
			</div>
			<div slot="east">
				右边内容
			</div>
			<div slot="west">
				左边内容
			</div>

			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
			<p>hello world!</p>
		</sc-layout>
	</block>

	<block sc-title="上下左中右">
		<sc-layout width="100%" bgcolor="#99A9BF" color="#fff" height="500px" :north="north" :south="south" :east="east" :west="west">
			<div slot="north">
				顶部内容
			</div>
			<div slot="south">
				底部内容
			</div>
			<div slot="east">
				右边内容
			</div>
			<div slot="west">
				左边内容
			</div>
			<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
		</sc-layout>
	</block>

	<block sc-title="左中右嵌套上下左中右">
		<sc-layout width="100%" color="#fff" height="500px" :east="east" :west="west">
			<div slot="east">
				右边内容
			</div>
			<div slot="west">
				左边内容
			</div>
			<sc-layout color="#333" :north="north" :south="south" :east="east" :west="west">
				<div slot="north">
					顶部内容
				</div>
				<div slot="south">
					底部内容
				</div>
				<div slot="east">
					右边内容
				</div>
				<div slot="west">
					左边内容
				</div>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
				<p>hello world!</p>
			</sc-layout>
		</sc-layout>
	</block>
  </page>
</template>

<script>
  import scDataGrid from '../../components/base/dataGrid'
export default {
  data () {
    return {
		north: {
			title: '顶部',
			height: 60,
			align: 'center',
			padding: true,
			color: '#fff',
			bgcolor: '#20A0FF'
		},
		south: {
			title: '底部',
			height: 60,
			align: 'center',
			padding: true,
			color: '#fff',
			bgcolor: '#13CE66'
		},
		east: {
			title: '右边',
			width: 100,
			align: 'right',
			padding: true,
			color: '#fff',
			bgcolor: '#F7BA2A',
			collapsible: true
		},
		west: {
			title: '左边',
			width: 100,
			align: 'right',
			padding: true,
			color: '#fff',
			bgcolor: '#FF4949',
			collapsible: true
		},
      tableWidth:"",
      rownumbers:false, //是否显示序号
      fitColumns:true, //表格宽度是否自适应 默认是为true(自适应)
      tableData:[],
      handleBtn:[
        {type:"",name:"修改",iconClass:"el-icon-edit",color:"#5B7BFA"},
        {type:"",name:"删除",iconClass:"el-icon-delete",color:"#5B7BFA"},
        {type:"",name:"查看",iconClass:"el-icon-document",color:"#5B7BFA"}
      ],
      column:[
        {title:'资产名称',fieldName:'itemid',sortable:true,width:300,editor:"text"},
        {title:'资源路径',fieldName:'productid',sortable:true,width:300},
        {title:'资源编码',fieldName:'listprice',width:300},
        {title:'资源类型',fieldName:'unitcost',width:300},
        {title:'排序',fieldName:'attr1',width:300},
        {title:'上级资源',fieldName:'status',width:300},
      ],
      autoMergeCells:[],
      fixColumns:[],
      /* fixColumns:[[ //设置固定列(注意此处是一个二维数组) 使用固定列需关闭表格自适应fitColumns并手动设置每一列的宽度
       {field:'itemid',title:'Item ID',width:80,align:"center",sortable:true},
       {field:'productid',title:'Product ID',width:80,align:"center"},
       ]]*/
      currentPage4: 4,
    }
    },
  components : {
    scDataGrid
  },
}
</script>

<style scoped lang="less">
p {margin:0;}
</style>
