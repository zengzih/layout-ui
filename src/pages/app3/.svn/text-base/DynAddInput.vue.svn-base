<template>
	
	<div class="sc-theme">		
		<el-dialog title="动态表单一行两列" v-model="dialogFormVisible"  :close-on-click-modal="false">            
        	<el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
				<sc-form-layout label-width="small">					
					<sc-form-layout-row
						v-for="(input, index) in dynamicValidateForm.inputs">
						<sc-form-layout-col>
							<el-form-item
							:label="'券种'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-select v-model="input.value" placeholder="请选择券种">
									<el-option
									  v-for="item in options"
									  :key="item.value"
									  :label="item.label"
									  :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item
							:label="'估值科目代码'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  	required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-input v-model="input.value"></el-input>
							</el-form-item>						
						</sc-form-layout-col>
						
						<sc-form-layout-col align="center" width="80px">
							<div class="sc-form-layout--icons">
								<i v-if="input.enDel" @click.prevent="removeInput(input)" class="iconfont sc-icon-minus red"></i>
								<i v-if="input.enAdd" @click="addInput" class="iconfont sc-icon-add primary"></i>
							</div>
						</sc-form-layout-col>
						
					</sc-form-layout-row>
					
				</sc-form-layout>
			</el-form>        
	        
	        <div slot="footer" class="dialog-footer">
	            <el-button type="primary"  @click="onSubmit('formData')" v-cloak>确定</el-button>
	            <el-button @click="dialogFormVisible=true" v-cloak>取消</el-button>
	        </div>
		</el-dialog>


		<el-dialog top="20px" title="动态表单两行四列" v-model="dialogFormVisible2"  :close-on-click-modal="false">            
        	<el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
				<sc-form-layout label-width="small">
				<sc-form-layout-row v-for="(input, index) in dynamicValidateForm.inputs">
					<sc-form-layout-col>
						<sc-form-layout>
							<sc-form-layout-row>
								<sc-form-layout-col>
									<el-form-item
									:label="'券种'"
									:key="input.key"
									:prop="'inputs.' + index + '.value'"
									:rules="{
									  required: true, message: '不能为空', trigger: 'blur'
									}"
									>
										<el-select v-model="input.value" placeholder="请选择券种">
											<el-option
											  v-for="item in options"
											  :key="item.value"
											  :label="item.label"
											  :value="item.value">
											</el-option>
										</el-select>
									</el-form-item>
								
								</sc-form-layout-col>
								
								<sc-form-layout-col>
									<el-form-item
									:label="'估值科目代码'"
									:key="input.key"
									:prop="'inputs.' + index + '.value'"
									:rules="{
										required: true, message: '不能为空', trigger: 'blur'
									}"
									>
										<el-input v-model="input.value"></el-input>
									</el-form-item>						
								</sc-form-layout-col>											
							</sc-form-layout-row>
							<sc-form-layout-row>
								<sc-form-layout-col>
									<el-form-item
									:label="'券种'"
									:key="input.key"
									:prop="'inputs.' + index + '.value'"
									:rules="{
									  required: true, message: '不能为空', trigger: 'blur'
									}"
									>
										<el-select v-model="input.value" placeholder="请选择券种">
											<el-option
											  v-for="item in options"
											  :key="item.value"
											  :label="item.label"
											  :value="item.value">
											</el-option>
										</el-select>
									</el-form-item>
								
								</sc-form-layout-col>
								
								<sc-form-layout-col>
									<el-form-item
									:label="'估值科目代码'"
									:key="input.key"
									:prop="'inputs.' + index + '.value'"
									:rules="{
										required: true, message: '不能为空', trigger: 'blur'
									}"
									>
										<el-input v-model="input.value"></el-input>
									</el-form-item>						
								</sc-form-layout-col>
												
							</sc-form-layout-row>
						</sc-form-layout>
					</sc-form-layout-col>
						<sc-form-layout-col width="normal" offset-left>
							<div class="sc-form-layout--icons">
								<i v-if="input.enDel" @click.prevent="removeInput(input)" class="iconfont sc-icon-minus red"></i>
								<i v-if="input.enAdd" @click="addInput" class="iconfont sc-icon-add primary"></i>
							</div>						
						</sc-form-layout-col>
					</sc-form-layout-row>
				</sc-form-layout>
			</el-form>        
	        
	        <div slot="footer" class="dialog-footer">
	            <el-button type="primary"  @click="onSubmit('formData')" v-cloak>确定</el-button>
	            <el-button @click="dialogFormVisible2=true" v-cloak>取消</el-button>
	        </div>
		</el-dialog>

		<el-dialog title="动态表单一行四列" size="large" v-model="dialogFormVisible3"  :close-on-click-modal="false">            
        	<el-form :model="dynamicValidateForm" ref="dynamicValidateForm">
				<sc-form-layout label-width="small">					
					<sc-form-layout-row
						v-for="(input, index) in dynamicValidateForm.inputs">
						<sc-form-layout-col>
							<el-form-item
							:label="'券种'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-select v-model="input.value" placeholder="请选择券种">
									<el-option
									  v-for="item in options"
									  :key="item.value"
									  :label="item.label"
									  :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item
							:label="'估值科目代码'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  	required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-input v-model="input.value"></el-input>
							</el-form-item>						
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item
							:label="'券种'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-select v-model="input.value" placeholder="请选择券种">
									<el-option
									  v-for="item in options"
									  :key="item.value"
									  :label="item.label"
									  :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item
							:label="'估值科目代码'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  	required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-input v-model="input.value"></el-input>
							</el-form-item>						
						</sc-form-layout-col>						
						<sc-form-layout-col align="left" width="80px">
							<div class="sc-form-layout--icons">
								<i v-if="input.enDel" @click.prevent="removeInput(input)" class="iconfont sc-icon-minus red"></i>
								<i v-if="input.enAdd" @click="addInput" class="iconfont sc-icon-add primary"></i>
							</div>
						</sc-form-layout-col>
						
					</sc-form-layout-row>
					
				</sc-form-layout>
			</el-form>        
	        
	        <div slot="footer" class="dialog-footer">
	            <el-button type="primary"  @click="onSubmit('formData')" v-cloak>确定</el-button>
	            <el-button @click="dialogFormVisible3=true" v-cloak>取消</el-button>
	        </div>
		</el-dialog>

	<sc-layout full-screen bgcolor="#fff" :west="west">
		<div slot="west" style="font-size:50px;">
			<i class="iconfont sc-icon-add green"></i>
			<i class="iconfont sc-icon-minus red"></i>
			<i class="iconfont sc-icon-confirm-expedited blue"></i>
			<i class="iconfont sc-icon-confirm yellow"></i>
			<i class="iconfont sc-icon-view primary"></i>
		</div>
		
		<div class="padding">
			<el-row>
			  <el-col :span="4">
			  		<el-button type="primary" @click="dialogFormVisible=true" v-cloak>新增一行两列</el-button>
		      </el-col>
		      <el-col :span="4">
			  		<el-button type="primary" @click="dialogFormVisible2=true" v-cloak>新增两行四列</el-button>
		      </el-col>
		      <el-col :span="4">
			  		<el-button type="primary" @click="dialogFormVisible3=true" v-cloak>新增一行四列</el-button>
		      </el-col>
			</el-row>			
			
			<!-- <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" class="demo-dynamic">
				<sc-form-layout label-width="middle">					
					<sc-form-layout-row
						v-for="(input, index) in dynamicValidateForm.inputs">
				

						<sc-form-layout-col>
							<el-form-item
							:label="'券种'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-select v-model="input.value" placeholder="请选择券种">
									<el-option
									  v-for="item in options"
									  :key="item.value"
									  :label="item.label"
									  :value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						
						</sc-form-layout-col>
						
						<sc-form-layout-col>
							<el-form-item
							:label="'估值科目代码'"
							:key="input.key"
							:prop="'inputs.' + index + '.value'"
							:rules="{
							  required: true, message: '不能为空', trigger: 'blur'
							}"
							>
								<el-input v-model="input.value"></el-input>
							</el-form-item>
						
						</sc-form-layout-col>

						
						<sc-form-layout-col align="left" width="240px">
							<div class="sc-form-layout--icons">
								<i v-if="input.enDel" @click.prevent="removeInput(input)" class="iconfont sc-icon-minus red"></i>
								<i v-if="input.enAdd" @click="addInput" class="iconfont sc-icon-add primary"></i>
							</div>
						</sc-form-layout-col>
						
					</sc-form-layout-row>
					
					<sc-form-layout-row>
					
						<sc-form-layout-col offset-left>
						
							<el-form-item>
								<el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
								<el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
							</el-form-item>
						
						</sc-form-layout-col>
						
					</sc-form-layout-row>
				</sc-form-layout>
			</el-form> -->
		</div>
	</sc-layout>
</div>
</template>

<script>
	export default {
		data () {
			return {
				dialogFormVisible:false,
				dialogFormVisible2:false,
				dialogFormVisible3:false,
				west: {
					width: 350,
					padding: true,
					collapsible: true
				},
				dynamicValidateForm: {
					inputs: [{
						value: '',
						enDel: false,
						enAdd: true
					}],
					email: '',
					type: ''
				},
				options:[{value:'A0001',label:'股票'},{value:'A0002',label:'债券'}]
			}
		},
		methods: {
		  submitForm(formName) {
			this.$refs[formName].validate((valid) => {
			  if (valid) {
				alert('submit!');
			  } else {
				console.log('error submit!!');
				return false;
			  }
			});
		  },
		  resetForm(formName) {
			this.$refs[formName].resetFields();
		  },
		  removeInput(item) {
			var index = this.dynamicValidateForm.inputs.indexOf(item)
			if (index !== -1) {
			  this.dynamicValidateForm.inputs.splice(index, 1)
			}
			var inputs = this.dynamicValidateForm.inputs,
				len = inputs.length;
			if (len==1) {
				inputs[0].enDel = false
				inputs[0].enAdd = true
			} else {
				inputs[len-1].enDel = true
				inputs[len-1].enAdd = true
			}
		  },
		  addInput() {
			var inputs = this.dynamicValidateForm.inputs,
				len = inputs.length;
			if (len) {
				inputs[len-1].enDel = true
				inputs[len-1].enAdd = false
			}
			this.dynamicValidateForm.inputs.push({
			  value: '',
			  enDel: true,
			  enAdd: true,
			  key: Date.now()
			});
		  }
		}
	}
</script>
