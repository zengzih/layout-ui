<template>
  <page sc-title="规范" class="sc-theme is-standard">
	<block sc-title="对话框">
		<el-button type="text" @click.native="dialogFormVisible.tiny=true">tiny</el-button>
		<el-button type="text" @click.native="dialogFormVisible.small=true">small</el-button>
		<el-button type="text" @click.native="dialogFormVisible.normal=true">normal</el-button>
		<el-button type="text" @click.native="dialogFormVisible.middle=true">middle</el-button>
		<el-button type="text" @click.native="dialogFormVisible.large=true">large</el-button>
		<el-button type="text" @click.native="dialogFormVisible.full=true">full</el-button>
	</block>
	<block sc-title="查询布局">
		<router-link :to="'/app4/searchTop/'+one" v-for="one in typeList" v-text='one'>test</router-link>
    <router-link to='/app4/renderLayout'>renderLayout</router-link>
	</block>
	<block sc-title="例子">
		<router-link to="/app4/customTree" >树-自定义节点内容</router-link>
		<router-link to="/app4/execel" >execel 表格</router-link>
		<router-link to="/app4/Admin" >Admin</router-link>
		<router-link to="/app4/inputRadius" >test</router-link>
		<router-link to="/app4/bootstrap_vue">bootstrap_vue</router-link>
	</block>




	<el-dialog title="class='sc-tiny' width:443px" top="20px" class="sc-tiny" :visible.sync="dialogFormVisible.tiny">
	   <el-form :model="form">
		<sc-form-layout label-width="small">
			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>

			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>
		</sc-form-layout>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisible.tiny=false">取 消</el-button>
		<el-button type="primary" @click="dialogFormVisible.tiny=false">确 定</el-button>
	  </div>
	</el-dialog>

	<el-dialog title="class='sc-small' width:680px" top="20px" class="sc-small" :visible.sync="dialogFormVisible.small">
	   <el-form :model="form">
		<sc-form-layout label-width="small">
			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>

			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>
		</sc-form-layout>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisible.small=false">取 消</el-button>
		<el-button type="primary" @click="dialogFormVisible.small=false">确 定</el-button>
	  </div>
	</el-dialog>

	<el-dialog title="class='sc-normal' width: 805px" top="20px" class="sc-normal" :visible.sync="dialogFormVisible.normal">
	   <el-form :model="form">
		<sc-form-layout label-width="small">
			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>

			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>
		</sc-form-layout>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisible.normal=false">取 消</el-button>
		<el-button type="primary" @click="dialogFormVisible.normal=false">确 定</el-button>
	  </div>
	</el-dialog>

	<el-dialog title="class='sc-middle' width: 860px" top="20px" class="sc-middle" :visible.sync="dialogFormVisible.middle">
	  <el-form :model="form">
		<sc-form-layout label-width="small">
			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>

			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>
		</sc-form-layout>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisible.middle=false">取 消</el-button>
		<el-button type="primary" @click="dialogFormVisible.middle=false">确 定</el-button>
	  </div>
	</el-dialog>

	<el-dialog title="class='sc-large' width: 1200px" top="20px" class="sc-large" :visible.sync="dialogFormVisible.large">
	   <el-form :model="form">
		<sc-form-layout label-width="small">
			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>

			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>
		</sc-form-layout>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisible.large=false">取 消</el-button>
		<el-button type="primary" @click="dialogFormVisible.large=false">确 定</el-button>
	  </div>
	</el-dialog>

	<el-dialog title="fullDialog" size="full" :visible.sync="dialogFormVisible.full">
	  <el-form :model="form">
		<sc-form-layout label-width="small">
			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动名称">
					  <el-input v-model="form.name" auto-complete="off"></el-input>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>

			<sc-form-layout-row>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
				<sc-form-layout-col>
					<el-form-item label="活动区域">
					  <el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					  </el-select>
					</el-form-item>
				</sc-form-layout-col>
			</sc-form-layout-row>
		</sc-form-layout>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
		<el-button @click="dialogFormVisible.full=false">取 消</el-button>
		<el-button type="primary" @click="dialogFormVisible.full=false">确 定</el-button>
	  </div>
	</el-dialog>
  </page>
</template>

<script>
export default {
	data () {
		return {
			dialogFormVisible: {
				tiny: false,
				small: false,
				normal: false,
				middle: false,
				large: false,
				full: false
			},
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			formLabelWidth: '120px',
			typeList:['all','three','four','more', 'renderLayout'],
		}
	},
	methods: {
	}
}
</script>

<style scoped lang="less">
a { display:inline-block; &+a {margin-left:10px;}}
</style>
