<template>
  <page sc-title="表单布局">
    <block sc-title="混合列布局" class="sc-theme">
		<el-button type="primary" @click="dialogFormVisible = true">混合列布局</el-button>
	
		<el-dialog size="large" top="20px" :close-on-click-modal="false" title="表单多列混合布局" v-model="dialogFormVisible">
			<el-form>
				<sc-form-layout label-width="small">
					<sc-form-layout-row>
						<sc-form-layout-col cols="9">
							<el-form-item label="我的输入1">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="我的输入2">
								<el-select placeholder="请选择活动区域">
								  <el-option label="区域一" value="shanghai"></el-option>
								  <el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="我的输入3">
								<el-col :span="11">
								  <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
								</el-col>
								<el-col style="text-align:center;" :span="1">-</el-col>
								<el-col :span="12">
								  <el-time-picker type="fixed-time" placeholder="选择时间" style="width: 100%;"></el-time-picker>
								</el-col>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入4">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col cols=2>
							<el-form-item label="输入5">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入6">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入7">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col cols=2>
							<el-form-item label="输入8">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col cols=3>
							<el-form-item label="输入9">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入10输入10输入10输入10输入10输入10输入10输入">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入11">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入12">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入10">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入11">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入12">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入10">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入11">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入12">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入10">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入11">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入12">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入10">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入11">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入12">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入10输入10输入10输入10">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入11">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入12">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
					
					<sc-form-layout-row>
						<sc-form-layout-col>
							<el-form-item label="输入10">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入11">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
						<sc-form-layout-col>
							<el-form-item label="输入12">
								<el-input></el-input>
							</el-form-item>
						</sc-form-layout-col>
					</sc-form-layout-row>
				</sc-form-layout>
			</el-form>
		
			<div slot="footer" class="dialog-footer">
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			<el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
			</div>
		</el-dialog>
	</block>
  </page>
</template>

<script>
export default {
  data () {
    return {
		dialogFormVisible: false
    }
  }
}
</script>

<style scoped lang="less">
</style>
