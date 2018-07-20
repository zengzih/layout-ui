<template>
  <div class="sc-theme is-standard">
   <sc-form-layout class="bmargin">
		<sc-form-layout-row>
			<sc-form-layout-col style="width:200px;">
				<el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
			</sc-form-layout-col>

			<sc-form-layout-col>
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<sc-form-layout>
						<sc-form-layout-row>
							<sc-form-layout-col>
								<el-form-item label="银行卡号">
									<el-select v-model="formInline.prdId" placeholder="请选择">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
							</sc-form-layout-col>
							<sc-form-layout-col>
								<el-form-item label="账户名称">
									<el-input v-model="form.commonRate" auto-complete="off"></el-input>
								</el-form-item>
							</sc-form-layout-col>
						
							<sc-form-layout-col>
								<el-form-item label="银行名称">
									<el-select v-model="formInline.depositType" placeholder="请选择">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
							</sc-form-layout-col>
							
							<sc-form-layout-col class="right" style="width:160px;">
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
	
    <el-table
            :data="tableData4"
            fit
            border
			stripe
            height="500">
        <el-table-column
                prop="bankCode"
                label="银行代码"
                >
        </el-table-column>
        <el-table-column
                prop="bankName"
                label="银行名称"
                >
        </el-table-column>
        <el-table-column
                prop="cardNo"
                label="银行卡号"
                >
        </el-table-column>
        <el-table-column
                prop="accountName"
                label="账户名称"
                >
        </el-table-column>
        <el-table-column
                prop="createDateTime"
                label="创建日期"
                >
        </el-table-column>
        <el-table-column
                prop="isDefaultName"
                label="是否默认"
                >
        </el-table-column>
        <el-table-column
          prop="useTypeName"
          label="用户类型"
        >
        </el-table-column>
        <el-table-column
          prop="organizationId"
          label="机构id"
        >
        </el-table-column>
        <el-table-column
          prop="orgName"
          label="机构名称"
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


    <el-dialog size="small" title="表单分组信息" v-model="dialogFormVisible" class="sc-dialog-form">
        <el-form :inline="true" :model="form" ref="form">

            <sc-form-group title="其他信息1">
               <sc-form-layout label-width="small" class="ypadding">
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="银行名称" prop="bankCode"
										  :rules="[{ required: true, message: '不能为空'}]" >
								<el-select v-model="form.bankCode" placeholder="请选择银行">
									<el-option label="中国工商银行" value="102"></el-option>
									<el-option label="中国农业银行" value="103"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item label="账户名称">
								<el-input v-model="form.accountName" auto-complete="off"></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="银行卡号">
								<el-input v-model="form.cardNo" auto-complete="off"></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
				</sc-form-layout>
				
                <sc-form-group title="其他信息2">
					<sc-form-layout label-width="small" class="ypadding">
						<sc-form-layout-row>
							<sc-form-layout-col>
								<el-form-item label="银行名称" prop="bankCode"
											  :rules="[{ required: true, message: '不能为空'}]" >
									<el-select v-model="form.bankCode" placeholder="请选择银行">
										<el-option label="中国工商银行" value="102"></el-option>
										<el-option label="中国农业银行" value="103"></el-option>
									</el-select>
								</el-form-item>
							</sc-form-layout-col>
							
							<sc-form-layout-col>
								<el-form-item label="账户名称">
									<el-input v-model="form.accountName" auto-complete="off"></el-input>
								</el-form-item>
							</sc-form-layout-col>
						</sc-form-layout-row>
						
						<sc-form-layout-row>
							<sc-form-layout-col>
								<el-form-item label="银行卡号">
									<el-input v-model="form.cardNo" auto-complete="off"></el-input>
								</el-form-item>
							</sc-form-layout-col>
						</sc-form-layout-row>
                    </sc-form-layout>
                </sc-form-group>
            </sc-form-group>
            <sc-form-group title="其他信息1">
               <sc-form-layout label-width="small" class="ypadding">
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="银行名称" prop="bankCode"
										  :rules="[{ required: true, message: '不能为空'}]" >
								<el-select v-model="form.bankCode" placeholder="请选择银行">
									<el-option label="中国工商银行" value="102"></el-option>
									<el-option label="中国农业银行" value="103"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item label="账户名称">
								<el-input v-model="form.accountName" auto-complete="off"></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="银行名称" prop="bankCode"
										  :rules="[{ required: true, message: '不能为空'}]" >
								<el-select v-model="form.bankCode" placeholder="请选择银行">
									<el-option label="中国工商银行" value="102"></el-option>
									<el-option label="中国农业银行" value="103"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item label="账户名称">
								<el-input v-model="form.accountName" auto-complete="off"></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="银行卡号">
								<el-input v-model="form.cardNo" auto-complete="off"></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
				</sc-form-layout>
				
			
				
                <sc-form-group title="其他信息2">
					<sc-form-layout label-width="small" class="ypadding">
						<sc-form-layout-row>
							<sc-form-layout-col>
								<el-form-item label="银行名称" prop="bankCode"
											  :rules="[{ required: true, message: '不能为空'}]" >
									<el-select v-model="form.bankCode" placeholder="请选择银行">
										<el-option label="中国工商银行" value="102"></el-option>
										<el-option label="中国农业银行" value="103"></el-option>
									</el-select>
								</el-form-item>
							</sc-form-layout-col>
							
							<sc-form-layout-col>
								<el-form-item label="账户名称">
									<el-input v-model="form.accountName" auto-complete="off"></el-input>
								</el-form-item>
							</sc-form-layout-col>
						</sc-form-layout-row>
						
						<sc-form-layout-row>
							<sc-form-layout-col>
								<el-form-item label="银行卡号">
									<el-input v-model="form.cardNo" auto-complete="off"></el-input>
								</el-form-item>
							</sc-form-layout-col>
						</sc-form-layout-row>
					</sc-form-layout>
                </sc-form-group>
            </sc-form-group>

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
      form: {
        bankCode: '',
        isDefault: '',
        useType: '',
        createDateTime: '',
        accountName: ''
      },
      formLabelWidth: '100px',
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
      tableData4: [{
        accountName:"黄会",
        cardNo:"6666666666666",
        bankCode:"102",
        bankName:"中国工商银行",
        createDateTime:"2017-02-20 00:00:00",
        isDefault:"0",
        isDefaultName:"是",
        useType:"0",
        useTypeName:"产品使用",
        openBank:"中国工商银行上海市中山支行",
        orgName:"尚诚信息",
        organizationId:"O1436949461199",
      }, {
        accountName:"黄会",
        cardNo:"6666666666666",
        bankCode:"102",
        bankName:"中国工商银行",
        createDateTime:"2017-02-20 00:00:00",
        isDefault:"0",
        isDefaultName:"是",
        useType:"0",
        useTypeName:"产品使用",
        openBank:"中国工商银行上海市中山支行",
        orgName:"尚诚信息",
        organizationId:"O1436949461199",
      }, {
        accountName:"黄会",
        cardNo:"6666666666666",
        bankCode:"102",
        bankName:"中国工商银行",
        createDateTime:"2017-02-20 00:00:00",
        isDefault:"0",
        isDefaultName:"是",
        useType:"0",
        useTypeName:"产品使用",
        openBank:"中国工商银行上海市中山支行",
        orgName:"尚诚信息",
        organizationId:"O1436949461199",
      }, {
        accountName:"黄会",
        cardNo:"6666666666666",
        bankCode:"102",
        bankName:"中国工商银行",
        createDateTime:"2017-02-20 00:00:00",
        isDefault:"0",
        isDefaultName:"是",
        useType:"0",
        useTypeName:"产品使用",
        openBank:"中国工商银行上海市中山支行",
        orgName:"尚诚信息",
        organizationId:"O1436949461199",
      }, {
        accountName:"黄会",
        cardNo:"6666666666666",
        bankCode:"102",
        bankName:"中国工商银行",
        createDateTime:"2017-02-20 00:00:00",
        isDefault:"0",
        isDefaultName:"是",
        useType:"0",
        useTypeName:"产品使用",
        openBank:"中国工商银行上海市中山支行",
        orgName:"尚诚信息",
        organizationId:"O1436949461199",
      }, {
        accountName:"黄会",
        cardNo:"6666666666666",
        bankCode:"102",
        bankName:"中国工商银行",
        createDateTime:"2017-02-20 00:00:00",
        isDefault:"0",
        isDefaultName:"是",
        useType:"0",
        useTypeName:"产品使用",
        openBank:"中国工商银行上海市中山支行",
        orgName:"尚诚信息",
        organizationId:"O1436949461199",
      }, {
        accountName:"黄会",
        cardNo:"6666666666666",
        bankCode:"102",
        bankName:"中国工商银行",
        createDateTime:"2017-02-20 00:00:00",
        isDefault:"0",
        isDefaultName:"是",
        useType:"0",
        useTypeName:"产品使用",
        openBank:"中国工商银行上海市中山支行",
        orgName:"尚诚信息",
        organizationId:"O1436949461199",
      }]
    }
    },
    methods: {
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
    
</style>
