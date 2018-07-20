<template>
  <div class="sc-theme is-standard">
    <sc-form-layout class="bmargin">
		<sc-form-layout-row>
			<sc-form-layout-col width="middle">
				<el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
			</sc-form-layout-col>
			<sc-form-layout-col>
				<el-form :inline="true" :model="queryConditions" class="demo-form-inline">
					 <sc-form-layout>
						<sc-form-layout-row>
							<sc-form-layout-col>
								<el-form-item label="存款类型">
									<el-select v-model="queryConditions.depositType" placeholder="请选择">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
							</sc-form-layout-col>
							
							<sc-form-layout-col>
								<el-form-item label="存款期限值">
								  <el-input v-model="queryConditions.matuValue" auto-complete="off"></el-input>
								</el-form-item>
							</sc-form-layout-col>
							
							<sc-form-layout-col>
								<el-form-item label="存款期限单位">
									<el-select v-model="queryConditions.matuUnit" placeholder="请选择">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
							</sc-form-layout-col>
							
							<sc-form-layout-col width="normal" align="right">
								<el-form-item>
									<el-button type="primary" @click="onQuery">查询</el-button>
									<el-button @click="onReset">重置</el-button>
								</el-form-item>
							</sc-form-layout-col>
						</sc-form-layout-row>
					</sc-form-layout>
				</el-form>
			</sc-form-layout-col>
        </sc-form-layout-row>
	</sc-form-layout>
    <!--存款类型 存款期限 单位 操作人 操作时间-->
    <el-table
            :data="tableData4"
            fit
            border
			     stripe
            height="500">
        <el-table-column
                prop="depositTypeName"
                label="存款类型"
                >
        </el-table-column>
        <el-table-column
                prop="matuValue"
                label="存款期限"
                >
        </el-table-column>
        <el-table-column
                prop="matuUnitName"
                label="单位"
                >
        </el-table-column>
        <el-table-column
                prop="operator"
                label="操作人"
                >
        </el-table-column>
        <el-table-column
                prop="operationTime"
                label="操作时间"
                width="160"
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

    <el-dialog size="small" title="带下拉列表的输入框" v-model="dialogFormVisible" class="sc-dialog-form" :close-on-press-escape="false" 
    :close-on-click-modal="false">
        <el-form  :model="formData" ref="formData">
			<sc-form-layout label-width="small">
				<sc-form-layout-row>
					<sc-form-layout-col>
						<el-form-item label="存款类型">
						  <el-input v-model="formData.depositType" auto-complete="off"></el-input>
						</el-form-item>
					</sc-form-layout-col>
					<sc-form-layout-col>
						<el-form-item label="存款期限">
						  <el-input v-model="formData.matuValue">
							<el-select v-model="formData.matuUnit" slot="append" placeholder="请选择">
							  <el-option label="餐厅名" value="1"></el-option>
							  <el-option label="订单号" value="2"></el-option>
							  <el-option label="用户电话" value="3"></el-option>
							</el-select>
						  </el-input>
						 <!--  <el-input v-model="formData.matuValue" auto-complete="off"></el-input> -->
						</el-form-item>
					</sc-form-layout-col>
				</sc-form-layout-row>
			</sc-form-layout>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
        </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      formData: {
        matuUnit:"",
        matuValue:"",
        depositType:"",
      },
      formLabelWidth: '100px',
      currentPage4: 4,
      pickerOptions0: {
      },
      queryConditions: {
        enableDate: '',
        prdId: '',
        depositType:""
      },
      tableData4: [{
        depositType:"00001001",
        depositTypeName:"协议存款",
        id:"4028c8c15a6ad7dc015a6b0af4fc0011",
        matuUnit:"00003003",
        matuUnitName:"天",
        matuValue:1,
        operationTime:"2017-03-31 10:58:12",
        operator:"admin",
      }, {
        depositType:"00001001",
        depositTypeName:"协议存款",
        id:"4028c8c15a6ad7dc015a6b0af4fc0011",
        matuUnit:"00003003",
        matuUnitName:"天",
        matuValue:10,
        operationTime:"2017-03-31 10:58:12",
        operator:"admin2",
      }]
    }
  },
  methods: {
    onRowClick:function (row){
        this.form.cardNo=row.card;
        this.visible2=false;
    },
    onPopFormOk:function (){
        this.form.cardNo=this.formpopup.cardNo;
        this.form.accountName=this.formpopup.accountName;
        this.visible3=false;   
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
          console.log('---------')
          console.log(_this.form)

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

<style lang="less" scoped>
  .el-select .el-input {
    width: 110px;
  }
</style>
