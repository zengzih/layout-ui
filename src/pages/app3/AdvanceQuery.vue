<template>
    <div class="sc-theme is-standard">
        <!-- 查询区域 --> <!-- 高级查询，在外框加一个'sc-adQuery'类-->
        <sc-form-layout class="bmargin">
            <sc-form-layout-row>
                <sc-form-layout-col style="width:200px;">
                    <el-button type="primary" v-if="actions.add.visible" @click="onAdd" v-cloak>{{actions.add.text}}</el-button>
                </sc-form-layout-col>
                <sc-form-layout-col>
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
						<sc-form-layout>
							<sc-form-layout-row>
								<sc-form-layout-col>
									<el-form-item label="银行">
										<el-select v-model="queryConditions.bankCode" clearable filterable placeholder="请选择">
											<el-option v-for="item in bankOptions" :label="item.name" :value="item.bankCode"></el-option>
										</el-select>
									</el-form-item>
								</sc-form-layout-col>
								<sc-form-layout-col>
									<el-form-item label="银行">
										<el-select v-model="queryConditions.bankCode" clearable filterable placeholder="请选择">
											<el-option v-for="item in bankOptions" :label="item.name" :value="item.bankCode"></el-option>
										</el-select>
									</el-form-item>
								</sc-form-layout-col>
								<sc-form-layout-col>
									<el-form-item>
										<el-input
												placeholder='请输入银行编号 /银行信息/存款类型'
												icon='search'
												width='600'
												v-model='queryConditions.qSearch'
												:on-icon-click='handleIconClick'>
										</el-input>
									</el-form-item>
								</sc-form-layout-col>
								<sc-form-layout-col class="right" style="width:80px;">
									<el-form-item>
										<el-button type="primary" size="large" @click="toggleQuery">高级查询<i :class="queryShow ? 'el-icon-arrow-down el-icon--right' : 'el-icon-arrow-up el-icon--right'"></i></el-button>
									</el-form-item>
								</sc-form-layout-col>
							</sc-form-layout-row>
						</sc-form-layout>
                    </el-form>
                </sc-form-layout-col>
            </sc-form-layout-row>
		</sc-form-layout>
		
        <el-form  :inline="true" :model="queryConditions" v-show="queryShow" class="border bgcolor padding ymargin">
			<sc-form-layout  label-width="small">
				<sc-form-layout-row>
					<sc-form-layout-col>
                        <el-form-item label="银行">
                            <el-select v-model="queryConditions.bankCode" clearable filterable placeholder="请选择">
                                <el-option v-for="item in bankOptions" :label="item.name" :value="item.bankCode"></el-option>
                            </el-select>
                        </el-form-item>
					</sc-form-layout-col>
					
					<sc-form-layout-col>
                        <el-form-item label="创建日期">
                            <el-date-picker v-model="queryConditions.createDateTime" @change="onDateChange($event,queryConditions,'createDateTime')" type="date" placeholder="选择日期" :picker-options="pickerOptions">
                            </el-date-picker>
                        </el-form-item>
					</sc-form-layout-col>
					
					<sc-form-layout-col>
                        <el-form-item label="银行卡号">
                            <el-input  v-model="queryConditions.cardNo" auto-complete="off"></el-input>
                        </el-form-item>
					</sc-form-layout-col>
				</sc-form-layout-row>
				
				<sc-form-layout-row>
					<sc-form-layout-col>
                        <el-form-item label="账户名称">
                            <el-input  v-model="queryConditions.accountName" auto-complete="off"></el-input>
                        </el-form-item>
                    </sc-form-layout-col>
					
					<sc-form-layout-col  cols="2" class="right">
						<el-button type="primary" @click="onQuery" v-cloak>{{actions.query.text}}</el-button>
						<el-button @click="onReset"  v-cloak>{{actions.reset.text}}</el-button>
					</sc-form-layout-col>
				</sc-form-layout-row>
			</sc-form-layout>
		</el-form>
        <!-- 表格显示数据 -->
        <el-table
                :data="tableData"
                @sort-change="onSort"
                fit
                border
                stripe
                style="width:100%"
                :height="tableHeight">

            <el-table-column type="index"  width="80"></el-table-column>

            <el-table-column
                    prop="id"
                    label="编号"
                    sortable
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="bankCode"
                    label="银行代码"
                    sortable
            >
            </el-table-column>
            <el-table-column
                    prop="cardNo"
                    label="银行卡号"
                    sortable
                    width="200"
                    align="center"
            >
            </el-table-column>
            <el-table-column
                    prop="bankName"
                    label="银行名称"
                    sortable
                    width="200"
                    align="right"
            >
            </el-table-column>
            <el-table-column
                    prop="accountName"
                    label="账户名称"
                    width="220"
                    align="right"
            >
            </el-table-column>
            <el-table-column
                    prop="orgName"
                    label="机构名称"
                    width="220"
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
                    fixed="right"
                    label="操作"
            >
                <template scope="scope">
                    <el-tooltip class="item" effect="light" v-if="actions.del.visible" :content="actions.del.text" placement="left">
                        <el-button
                                @click.native.prevent="onDeleteRow(scope.$index, tableData)"
                                type="text"
                                size="small">
                            <i :class="actions.del.icon" ></i>
                        </el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="light" v-if="actions.edit.visible" :content="actions.edit.text" placement="left">
                        <el-button
                                @click.native.prevent="onEditRow(scope.$index, tableData)"
                                type="text"
                                size="small">
                            <i :class="actions.edit.icon"></i>
                        </el-button>
                    </el-tooltip>
                    <el-tooltip class="item" effect="light" v-if="actions.read.visible" :content="actions.read.text" placement="left">
                        <el-button
                                @click.native.prevent="onReadRow(scope.$index, tableData)"
                                type="text"
                                size="small">
                            <i :class="actions.read.icon"></i>
                        </el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
        <!-- 表格分页 -->
        <el-pagination
                @size-change="onHandleSizeChange"
                @current-change="onHandleCurrentChange"
                :current-page="currentPage"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalPage">
        </el-pagination>

        <!-- 弹出的表单 -->
        <el-dialog size="small" title="新增银行信息" v-model="dialogFormVisible">
            <el-form :model="formData" ref="formData" >
				<sc-form-layout>
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="银行名称" prop="bankCode"
										  :rules="[{ required: true, message: '银行名称不能为空'}]" >

								<el-select v-model="formData.bankCode" clearable filterable placeholder="请选择银行">
									<el-option v-for="item in bankOptions" :label="item.name" :value="item.bankCode"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item label="创建日期" prop="createDateTime"
										  :rules="[{ required: true, message: '创建日期不能为空'}]" >
								<el-date-picker :disabled="state.createDateTime" @change="onDateChange($event,formData,'createDateTime')" v-model="formData.createDateTime" type="date" placeholder="选择日期" :picker-options="pickerOptions">
								</el-date-picker>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="是否默认" prop="isDefault"
										  :rules="[{ required: true, message: '是否默认不能为空'}]" >
								<el-select :disabled="state.isDefault" v-model="formData.isDefault" placeholder="请选择是否默认">
									<el-option label="是" value="0"></el-option>
									<el-option label="否" value="1"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item label="账户名称" prop="accountName"
										  :rules="[{ required: true, message: '账户名称不能为空'}]" >
								<el-input :disabled="state.accountName" v-model="formData.accountName" auto-complete="off"></el-input>
							</el-form-item>
						</sc-form-layout-col>
					
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="银行卡号" prop="cardNo"
										  :rules="[{ required: true, message: '银行卡号不能为空'}]" >
								<el-input :disabled="state.cardNo" v-model="formData.cardNo" auto-complete="off"></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
				</sc-form-layout>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" v-if="actions.save.visible" @click="onSubmit('formData')" v-cloak>{{actions.save.text}}</el-button>
                <el-button @click="onCancel" v-cloak>{{actions.cancel.text}}</el-button>
            </div>
        </el-dialog>
    </div>

</template>


<script>
    import scAdvanceQuery from '../../components/base/advanceQuery'
    export default {
        components:{
            scAdvanceQuery
        },
        data: function(){
            return {
                queryShow: false,
                queryConditions: {
                    createDateTime: '2017-5-8',
                    qSearch:"",
                    bankCode: '',
                },
                formInline: {
                    createDateTime: '',
                    bankCode: '',
                },
                formData: {
                    createDateTime: '2017-5-8',
                    bankCode: '',
                },
                state:{
                    bankCode: false,
                    createDateTime: false,
                    commonRate: false,
                    editKeys:"createDateTime,depositType,prdId"
                },

                urls:{
                    add:+"http://localhost:8080/bankCardController/add",
                    edit:"http://localhost:8080/bankCardController/edit",
                    del:"/bankCardController/delete",
                    table: "/bankCardController/dataGrid",
                    form: "/bankCardController/editJson",
                },
                pickerOptions: {},
                bankOptions:[],
                oprUrl:"",
                currentState:"",
                dialogFormVisible:false,
                //dialogVisible:false,
                formLabelWidth: '110px',
                actions:{},
                queryInit:{},
                formDataInit:{},
                currentPage: 1,
                totalPage:0,
                pageSize:0,
                pageSizes:[],
                tableData: [],
                tableHeight:500,
            }
        },
        created: function () {
            var _this=this;
            this.gobal  ={
                actions:{
                    add:{
                        text:"新 增",
                        visible:true,
                        icon:""
                    },
                    edit:{
                        text:"修 改",
                        icon:"el-icon-edit",
                        visible:true
                    },
                    del:{
                        text:"删 除",
                        icon:"el-icon-delete",
                        visible:true
                    },
                    read:{
                        text:"查看",
                        icon:"el-icon-document",
                        visible:true
                    },
                    query:{
                        text:"查 询",
                        icon:"",
                        visible:true
                    },
                    reset:{
                        text:"重 置",
                        icon:"",
                        visible:true
                    },
                    save:{
                        text:"确 定",
                        icon:"",
                        visible:true
                    },
                    cancel:{
                        text:"取 消",
                        icon:"",
                        visible:true
                    }
                },
                pagination:{
                    pageSize:20,
                    pageSizes:[10,20, 50, 100, 200],
                    page:"page",
                    rows:"rows",
                    order:"order",
                    sort:"sort",
                    asc:"asc",
                    desc:"desc",
                },




            };

            this.actions = this.gobal.actions;
            this.bankOptions = [{
                "bankCode": "622",
                "id": "A07337B64CA048A581DE34B670A8E770622",
                "name": "大华银行",
                "operationTime": "2017-02-24 00:00:00"
            },
                {
                    "bankCode": "716",
                    "id": "06B0094BED7B417A8BDD66AE01571228716",
                    "name": "德国北德意志州银行",
                    "operationTime": "2017-02-24 00:00:00"
                },
                {
                    "bankCode": "712",
                    "id": "2A99D986281F452A8123DAE320AC6E3A712",
                    "name": "德意志银行",
                    "operationTime": "2017-02-24 00:00:00"
                },
                {
                    "bankCode": "525",
                    "id": "D027E35E09904047AE683068150831E6525",
                    "name": "第一商业银行",
                    "operationTime": "2017-02-24 00:00:00"
                },
                {
                    "bankCode": "767",
                    "id": "98BBF99DE740404C9C43DE1626343DBD767",
                    "name": "俄罗斯外贸银行",
                    "operationTime": "2017-02-24 00:00:00"
                },
                {
                    "bankCode": "600",
                    "id": "E685898E08224782B87709F5CB183289600",
                    "name": "中国信托商业银行",
                    "operationTime": "2017-02-24 00:00:00"
                }
            ];




            fieldName : "bankCode", //单个下拉框的域名

                    this.pageSize=this.gobal.pagination.pageSize;
            this.pageSizes=this.gobal.pagination.pageSizes;

            //表格数据加载
            this.queryConditions[this.gobal.pagination.page]=1;
            this.queryConditions[this.gobal.pagination.rows]=this.pageSize;

            this.getTableData();


        },
        mounted:function(){

        },
        methods:{
            handleIconClick: function(ev) {
                console.log("handleIconClick");
                this.getTableData();
            },
            toggleQuery:function(){
                console.log("toggleQuery");
                this.queryShow = !this.queryShow;
            },

            onDateChange:function(val,obj,key){
                obj[key]=val;
            },
            onHandleSizeChange:function(val) {
                var _this=this;
                this.pageSize=val;
                this.queryConditions[this.gobal.pagination.rows]=this.pageSize;
                this.getTableData();
            },
            onHandleCurrentChange:function(val) {
                var _this=this;
                this.currentPage = val;
                this.queryConditions[this.gobal.pagination.page]=val;
                this.getTableData();
            },
            onSort:function(val){
                this.queryConditions[this.gobal.pagination.order]=(val.order=="ascending"?this.gobal.pagination.asc:this.gobal.pagination.desc);
                this.queryConditions[this.gobal.pagination.sort]=val.prop;
                this.getTableData();
            },
            onAdd:function(){//增
                this.dialogFormVisible = true
                this.setFormState(dictFormState.add);
                this.formData = Object.assign({}, this.formData, this.formDataInit);
                this.actions.save.visible=true;
            },

            onReadRow:function(index, rows){//读
                this.formPopUp(dictFormState.read,index,rows);
            },
            onEditRow:function(index, rows){//改
                this.formPopUp(dictFormState.edit,index,rows);
            },
            onQuery:function(){//查
                //表格数据加载
                this.getTableData();
            },
            onReset:function(){
                this.queryConditions = Object.assign({}, this.queryConditions, this.queryInit);
            },
            onCancel:function(){
                this.dialogFormVisible = false;
                this.$refs['formData'].resetFields();
            },
            onSubmit:function(formName){
                var _this=this;
                this.$refs[formName].validate(function(valid){
                    if (valid) {
                        _this.formSubmit();
                    } else {
                        return false;
                    }
                });
            },
            formPopUp:function(state,index,rows){
                this.setFormState(state);
                var para={id:rows[index].id};
                this.getFormData(para);
                this.dialogFormVisible = true;
                this.actions.save.visible=(state==dictFormState.edit);
            },
            formSubmit:function(){
                var _this=this;
                var strUrl="";
                strUrl=this.urls[this.currentState];
                request.post(this,strUrl,_this.formData,function(data){
                    if(data.success)_this.dialogFormVisible = false;
                    _this.gobal.messageShow(_this,data);
                    _this.getTableData();
                });
            },
            getFormData:function(objKey){
                var _this=this;
                request.post(this,this.urls.form,objKey,function(data){
                    _this.formData=data;
                });
            },
            getTableData:function(){
                var _this=this;
                var data = {
                    "page": 1,
                    "pageSize": 10,
                    "recnums": 0,
                    "rows": [{
                        "accountName": "xq",
                        "accountStatusName": "待提交",
                        "bankCode": "001",
                        "bankName": "村镇银行（四川仪陇惠民、桃江建信）",
                        "cardNo": "222222222",
                        "createDateTime": "2016-04-12 16:18:47",
                        "dataSource": "1",
                        "id": "B1460449127982",
                        "isDefault": "0",
                        "isDefaultName": "是",
                        "openBank": " ",
                        "orgName": "尚诚信息",
                        "organizationId": "O1436949461199",
                        "useType": "1",
                        "useTypeName": "用户使用"
                    },
                        {
                            "accountName": "3213",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国农业银行",
                            "cardNo": "56145151321212122",
                            "createDateTime": "2016-04-12 17:52:29",
                            "dataSource": "0",
                            "id": "B1460454749634",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "啧啧",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "奥地利奥合国际银行",
                            "cardNo": "http://120.26.55.211/s.txt",
                            "createDateTime": "2016-04-14 10:11:09",
                            "dataSource": "1",
                            "id": "B1460599869112",
                            "isDefault": "1",
                            "isDefaultName": "否",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "lven",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "622415645451401545",
                            "createDateTime": "2016-04-14 10:17:15",
                            "dataSource": "0",
                            "id": "B1460600235865",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "啧啧",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "a_long_name_file_not_exist",
                            "createDateTime": "2016-04-14 10:18:51",
                            "dataSource": "1",
                            "id": "B1460600331369",
                            "isDefault": "1",
                            "isDefaultName": "否",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "啧啧",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "/etc/passwd",
                            "createDateTime": "2016-04-14 10:32:56",
                            "dataSource": "1",
                            "id": "B1460601176206",
                            "isDefault": "1",
                            "isDefaultName": "否",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "啧啧",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "c://windows/win.ini",
                            "createDateTime": "2016-04-14 10:33:57",
                            "dataSource": "1",
                            "id": "B1460601237928",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "lven",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "14565121402121212",
                            "createDateTime": "2016-04-14 11:30:51",
                            "dataSource": "0",
                            "id": "B1460604651470",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "测试003",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "784651451",
                            "createDateTime": "2016-04-15 14:44:32",
                            "dataSource": "1",
                            "id": "B1460702672218",
                            "isDefault": "1",
                            "isDefaultName": "否",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "测试004",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "22111122",
                            "createDateTime": "2016-04-15 14:56:50",
                            "dataSource": "1",
                            "id": "B1460703410928",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "wqw",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "1432132132132333",
                            "createDateTime": "2016-04-15 15:32:20",
                            "dataSource": "0",
                            "id": "B1460705540090",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "wrewr",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "5465645645646545",
                            "createDateTime": "2016-04-15 15:36:18",
                            "dataSource": "0",
                            "id": "B1460705778048",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "32323",
                            "accountStatusName": "待提交",
                            "bankCode": "105",
                            "bankName": "中国建设银行",
                            "cardNo": "32131313131313323",
                            "createDateTime": "2016-04-15 15:43:04",
                            "dataSource": "0",
                            "id": "B1460706184132",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "11",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "32132132132323323",
                            "createDateTime": "2016-04-15 15:55:45",
                            "dataSource": "0",
                            "id": "B1460706945597",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        },
                        {
                            "accountName": "2313",
                            "accountStatusName": "待提交",
                            "bankCode": "001",
                            "bankName": "中国人民银行",
                            "cardNo": "3213323132313323",
                            "createDateTime": "2016-04-15 16:21:42",
                            "dataSource": "0",
                            "id": "B1460708502133",
                            "isDefault": "0",
                            "isDefaultName": "是",
                            "openBank": " ",
                            "orgName": "尚诚信息",
                            "organizationId": "O1436949461199",
                            "useType": "1",
                            "useTypeName": "用户使用"
                        }],
                    "total": 151
                };

                _this.tableData=data.rows;
                _this.totalPage=data.total;


            },
            setFormState:function(mode){
                var vState=false;
                var vKeyStr="";
                this.currentState=mode;
                if(mode==dictFormState.read)vState=true;
                if(mode==dictFormState.edit)vKeyStr=this.state.editKeys;
                for(var key in this.state)
                {
                    if(key!="editKeys")
                    {
                        this.state[key]=vState;
                        if(vKeyStr!=""){
                            if(vKeyStr.indexOf(key)>=0)this.state[key]=true;
                        }
                    }
                }
            }
        }
    }
</script>
