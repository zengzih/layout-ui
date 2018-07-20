<template>
  <div class="sc-theme" style="height:100%">
    <el-row>
        <el-col :span="6">
            <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
        </el-col>
        <el-col :span="18">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="资产组合">
                    <el-select v-model="formInline.prdId" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="启用日期">
                    <el-date-picker v-model="formInline.enableDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="存款类型">
                    <el-select v-model="formInline.depositType" placeholder="请选择">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onQuery">查询</el-button>
                    <el-button @click="onReset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
    <el-table
            :data="tableData4"
            fit
            border
			stripe
            height="500">
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


    <el-dialog size="small" title="存款比例设置" v-model="dialogFormVisible">
        <el-form class="is-single-col" :inline="true" :model="form" ref="numberValidateForm">
            <el-form-item label="资产组合" prop="prdId" :label-width="formLabelWidth"
                          :rules="[{ required: true, message: '资产组合不能为空'}]" >
                <el-input v-model="form.prdId" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="启用日期" :label-width="formLabelWidth">
                <el-date-picker v-model="form.enableDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="托管行存款比例上限(%)" :label-width="formLabelWidth">
                <el-input v-model="form.custQualRate" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item label="存款类型" :label-width="formLabelWidth">
                <el-select v-model="form.depositType" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="非托管行存比上限(%)" :label-width="formLabelWidth">
                <el-input v-model="form.commonRate" auto-complete="off"></el-input>
            </el-form-item>
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
    return {
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
      // formLabelWidth: '100px',
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
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator: 'admin'
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator: 'admin'
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
            operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator: 'admin'
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator: 'admin'
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
        operator:"admin"
      }, {
        prdName: '尚诚私募股权1号',
        enableDate: '2016-05-03',
        custQualRate: '1.3',
        depositTypeName: '定期存款',
        commonRate: '2.0',
            operator:"admin"
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

<style lang="less">
</style>
