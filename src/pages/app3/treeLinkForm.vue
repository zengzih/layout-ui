<template>
<div class="sc-theme is-standard">
	<sc-layout full-screen :west="west">
		<div slot="west">
			<el-input
			  placeholder="输入关键字进行过滤"
			  icon="search"
			  v-model="filterText">
			</el-input>
			
			<el-tree
				show-checkbox
				default-expand-all
				ref="tree2"
				node-key="id"
				:data="data2"
				:props="defaultProps"
				:filter-node-method="filterNode"
				@node-click="onTreeNodeClick"
				@check-change="onTreeCheckChange"
				@current-change="onTreeCurrentChange"
				style="border:0;">
			</el-tree>
		</div>
		
		<div slot="east">右侧</div>

		<div class="padding">
			<el-button type="primary" @click="dialogFormVisible = true">新增</el-button>

			<el-form :inline="true" :model="formInline" class="border padding ymargin">
				<sc-form-layout>
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="资产组合">
								<el-select v-model="formInline.prdId" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item label="启用日期">
								<el-date-picker v-model="formInline.enableDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
								</el-date-picker>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item label="存款类型">
								<el-select v-model="formInline.depositType" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col align="right" width="normal">
							<el-form-item>
								<el-button type="primary" @click="onQuery">查询</el-button>
								<el-button @click="onReset">重置</el-button>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
				</sc-form-layout>
			</el-form>

			<el-table
			:data="tableData4"
			fit
			border
			stripe
			height="500">
			    
			    <el-table-column type="index"  >
                </el-table-column>  
                
                <el-table-column
                            prop="id"
                            label="编号"
                            sortable
                             >
                </el-table-column>
				<el-table-column
				prop="prdName"
				label="资产组合"
				>
				</el-table-column>
				
				<el-table-column
				prop="enableDate"
				label="启用日期"
				>
				</el-table-column>
				
				<el-table-column
				prop="custQualRate"
				label="托管行存款比例上限(%)"
				>
				</el-table-column>
				
				<el-table-column
				prop="commonRate"
				label="非托管行存款比例上限(%)"
				>
				</el-table-column>
				
				<el-table-column
				prop="depositTypeName"
				label="存款类型"
				>
				</el-table-column>
				
				<el-table-column
				prop="operator"
				label="操作人"
				>
				</el-table-column>
				
				<el-table-column
				fixed="right"
				label="操作"
				>
					<template scope="scope">
						<el-tooltip class="item" effect="light" content="删除" placement="left">                    
							<el-button
									@click.native.prevent="onDeleteRow(scope.$index, tableData)"
									type="text"
									size="small">
									<i class="el-icon-delete" ></i>
							</el-button>
						</el-tooltip>
						
						<el-tooltip class="item" effect="light" content="修改" placement="left">  
							<el-button
									@click.native.prevent="onEditRow(scope.$index, tableData)"
									type="text"
									size="small">
									<i class="el-icon-edit"></i>
							</el-button>
						</el-tooltip>
						
						<el-tooltip class="item" effect="light" content="查看" placement="left">
							<el-button
								@click.native.prevent="onReadRow(scope.$index, tableData)"
								type="text"
								size="small">
								<i class="el-icon-document"></i>
							</el-button>  
						</el-tooltip>                 
					</template>
				</el-table-column>
			</el-table>

			<el-pagination
			@size-change="handleSizeChange"
			@current-change="handleCurrentChange"
			:current-page="currentPage4"
			:page-sizes="[100, 200, 300, 400]"
			:page-size="100"
			layout="total, sizes, prev, pager, next, jumper"
			:total="400">
			</el-pagination>
		</div>
	</sc-layout>

	<el-dialog size="small" :close-on-click-modal="false" title="存款比例设置" v-model="dialogFormVisible">
		<el-form :inline="true" :model="form" ref="numberValidateForm">
			<sc-form-layout label-width="normal">
				<sc-form-layout-row>
					<sc-form-layout-col>
						<el-form-item label="资产组合" prop="prdId"
								  :rules="[{ required: true, message: '资产组合不能为空'}]" >
							<el-input v-model="form.prdId" auto-complete="off"></el-input>
						</el-form-item>
					</sc-form-layout-col>
				
					<sc-form-layout-col>
						<el-form-item label="启用日期">
							<el-date-picker v-model="form.enableDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
							</el-date-picker>
						</el-form-item>
					</sc-form-layout-col>
				
				</sc-form-layout-row>
				<sc-form-layout-row>
				
					<sc-form-layout-col>
						<el-form-item label="托管行存款比例上限(%)">
							<el-input v-model="form.custQualRate" auto-complete="off"></el-input>
						</el-form-item>
					</sc-form-layout-col>
				
					<sc-form-layout-col>
						<el-form-item label="存款类型">
							<el-select v-model="form.depositType" placeholder="请选择活动区域">
								<el-option label="区域一" value="shanghai"></el-option>
								<el-option label="区域二" value="beijing"></el-option>
							</el-select>
						</el-form-item>
					</sc-form-layout-col>
				
				</sc-form-layout-row>
				<sc-form-layout-row>
				
					<sc-form-layout-col>
						<el-form-item label="非托管行存比上限(%)">
							<el-input v-model="form.commonRate" auto-complete="off"></el-input>
						</el-form-item>
					</sc-form-layout-col>
				</sc-form-layout-row>
			</sc-form-layout>
		</el-form>
		
		<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="onSubmit('numberValidateForm')">确 定</el-button>
		</div>
	</el-dialog>
</div>
</template>

 
<script>
export default {
	data () {
		var treeData = [{
				"moduleName": "公募",
				"seq": 2,
				"id": "1",
				"treeModels": [{
						"firstGroupName": "公募",
						"groupID": "00079001",
						"id": "11",
						"moduleCode": "166400",
						"moduleName": "[11]浦银安盛增利分级债券型证券投资基金",
						"mtaCode": "166400",
						"productNameAbb": "浦银安盛增利分级债券型证券投资基金",
						"state": "1",
						"treeModels": []
					},
					{
						"firstGroupName": "公募",
						"groupID": "00079001",
						"id": "12",
						"moduleCode": "519117",
						"moduleName": "[22]浦银安盛中证锐联基本面400指数证券投资基金",
						"mtaCode": "519117",
						"productNameAbb": "浦银安盛中证锐联基本面400指数证券投资基金",
						"state": "1",
						"treeModels": []
					},
					{
						"firstGroupName": "公募",
						"groupID": "00079001",
						"id": "13",
						"moduleCode": "519128",
						"moduleName": "[33]浦银安盛月月盈安心养老定期支付债券型证券投资基金",
						"mtaCode": "519128",
						"productNameAbb": "浦银安盛月月盈安心养老定期支付债券型证券投资基金",
						"state": "1",
						"treeModels": []
					}
				]
			},
			{
				"moduleName": "DQII",
				"seq": 25,
				"id": "2",
				"treeModels": [{
					"firstGroupName": "DQII",
					"groupID": "00079003",
					"id": "21",
					"moduleCode": "000614",
					"moduleName": "[44]华安德国30（DAX）ETF联接",
					"mtaCode": "000614",
					"productNameAbb": "华安德国30（DAX）ETF联接",
					"state": "1",
					"treeModels": []
				},
				{
					"firstGroupName": "DQII",
					"groupID": "00079003",
					"id": "22",
					"moduleCode": "Z40028",
					"moduleName": "[55]华安汇聚中国(QDII)2号",
					"mtaCode": "Z40028",
					"productNameAbb": "华安汇聚中国(QDII)2号",
					"state": "1",
					"treeModels": []
				},
			 ]
			},
			{
				"moduleName": "118",
				"seq": 122,
				"id": "3",
				"treeModels": [{
					"moduleName": "公募",
					"treeModels": [{
						"firstGroupName": "118",
						"groupID": "4028c8f75bad1275015bad1906b0000c",
						"id": "31",
						"moduleCode": "166401",
						"moduleName": "[66]浦银安盛稳健增利债券型证券投资基金（LOF）",
						"mtaCode": "166401",
						"productNameAbb": "浦银安盛稳健增利债券型证券投资基金（LOF）",
						"secondGroupName": "公募",
						"state": "1",
						"treeModels": []
					},
				 
					{
						"firstGroupName": "118",
						"groupID": "4028c8f75bad1275015bad1906b0000c",
						"id": "32",
						"moduleCode": "Z40012",
						"moduleName": "[77]锐进12期港股多空对冲策略",
						"mtaCode": "Z40012",
						"productNameAbb": "锐进12期港股多空对冲策略",
						"secondGroupName": "DQII",
						"state": "1",
						"treeModels": []
					}]
				}]
		}];

		var  tableData = [{
			id: "11",
			prdName: '尚诚私募股权1号',
			enableDate: '2016-05-03',
			custQualRate: '1.3',
			depositTypeName: '定期存款',
			commonRate: '2.0',
			operator:"admin"
			}, {
			  id: "22",
			prdName: '尚诚私募股权1号',
			enableDate: '2016-05-03',
			custQualRate: '1.3',
			depositTypeName: '定期存款',
			commonRate: '2.0',
			operator: 'admin'
			}, {
			  id: "33",
			prdName: '尚诚私募股权1号',
			enableDate: '2016-05-03',
			custQualRate: '1.3',
			depositTypeName: '定期存款',
			commonRate: '2.0',
			operator:"admin"
			}, {
			  id: "44",
			prdName: '尚诚私募股权1号',
			enableDate: '2016-05-03',
			custQualRate: '1.3',
			depositTypeName: '定期存款',
			commonRate: '2.0',
			operator: 'admin'
			}, {
			  id: "55",
			prdName: '尚诚私募股权1号',
			enableDate: '2016-05-03',
			custQualRate: '1.3',
			depositTypeName: '定期存款',
			commonRate: '2.0',
			operator:"admin"
			}, {
			  id: "66",
			prdName: '尚诚私募股权1号',
			enableDate: '2016-05-03',
			custQualRate: '1.3',
			depositTypeName: '定期存款',
			commonRate: '2.0',
			operator:"admin"
			}, {
			   id: "77",
			prdName: '尚诚私募股权1号',
			enableDate: '2016-05-03',
			custQualRate: '1.3',
			depositTypeName: '定期存款',
			commonRate: '2.0',
			operator:"admin"
		}];
	
		return {
			filterText: '',
			east: {
				title: '右边',
				width: 300,
				align: 'left',
				padding: true,
				// color: '#fff',
				bgcolor: '#fff',
				collapsible: true
			},
			west: {
				title: '左边',
				width: 350,
				align: 'left',
				padding: true,
				// color: '#fff',
				bgcolor: '#fff',
				collapsible: true
			},
			data2: treeData, 
			defaultProps: {
			  children: 'treeModels',
			  label: 'moduleName'
			},
			numberValidateForm: {
				enableDate: '',
				commonRate: '',
				custQualRate: '',
				depositType: '',
				prdId: ''
			},
			dialogFormVisible: false,
			form: {
				enableDate: '',
				commonRate: '',
				custQualRate: '',
				depositType: '',
				prdId: ''
			},
			currentPage4: 4,
			pickerOptions0: {
				disabledDate: function (time) {
					return time.getTime() < Date.now() - 8.64e7
				}
			},
			formInline: {
				enableDate: '',
				prdId: '',
				depositType:""
			},
			tableData: tableData,//仅供 测试使用
			tableData4: tableData,
		}
	},
	
	watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
	
	methods: {
		filterNode(value, data) {
			if (!value) return true;

			return data.moduleName.indexOf(value) !== -1;
		},
	
		onTreeNodeClick:function (data, node, tree) {
			/* console.log("onTreeNodeClick=");
			console.log(data);
			console.log(node); */
			var queryConditions = {};
			if(data.id !== undefined){
			   queryConditions.id = data.id;
			}
			
			this.getTableData(null, queryConditions);
		}, 
		onTreeCheckChange: function (data, nodeIsCheck, childrenHasCheck) {
			/* console.log("onTreeCheckChange=");
			console.log(data);
			console.log(nodeIsCheck); */
			var queryConditions = {};
			if(data.id !== undefined){
			   queryConditions.id = nodeIsCheck ? data.id : "";
			}
			
			this.getTableData(null, queryConditions);
		}, 
		onTreeCurrentChange:function (nodeData, node) {
			// console.log(nodeData);
		}, 
		getTableData: function(url, queryConditions) {
			var data = [];
			if(queryConditions.id !== undefined){
				for(var i=0, len = this.tableData.length; i<len; i++){
					if( this.tableData[i].id == queryConditions.id ){
						data.push(this.tableData[i]);
					}
				};
			}else {
				data = this.tableData;
			}
			
			
			this.tableData4 = data;
			this.totalPage = data.length;

		},

		handleSizeChange:function (val) {
		  console.log('每页'+val+'条');
		},
		handleCurrentChange:function (val) {
			this.currentPage = val;
			console.log('当前页:'+val);
		},
		deleteRow:function(index, rows){
			rows.splice(index, 1);
		},
		onQuery:function(){
			console.log(this.formInline)
		},
		open3:function(){
		  this.$notify({
				title: '成功',
				message: '这是一条成功的提示消息',
				type: 'success'
			});
		},
		onSubmit: function (formName) {
		  var _this=this
		  this.$refs[formName].validate(function (valid) {
			if (valid) {
			  _this.dialogFormVisible = false
			  _this.open3();
			} else {
			  return false;
			}
		  })
		},
		onReset:function () {
		  this.formInline.enableDate="";
		  this.formInline.depositType="";
		  this.formInline.prdId="";
		},
		onAdd: function () {
		}
	}
}
</script>
