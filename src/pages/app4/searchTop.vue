<template>
<div class="sc-theme padding">
	<div class="types" v-if="showType('three')">
    <p class="title">type-1 三个以下（包括三个）</p>
      <sc-form-layout class="bmargin">
        <sc-form-layout-row>
          <sc-form-layout-col>
            <el-form :model="queryConditions">
              <sc-form-layout>
                <sc-form-layout-row>
                  <sc-form-layout-col >
                    <el-button type="primary" @click="onExport" v-cloak>导出</el-button>
                  </sc-form-layout-col>
                  <sc-form-layout-col width="standard">
                    <el-form-item label="资产组合:">
                      <el-select clearable filterable placeholder="请选择">
                        <el-option ></el-option>
                      </el-select>
                    </el-form-item>
                  </sc-form-layout-col>
                  <sc-form-layout-col width="standard">
                    <el-form-item label="核对结果:">
                      <el-select v-model="selText" placeholder="请选择">
                        <el-option class="sc-multiselect" value="">
                          <ul>
                            <li @click="toggle($event)">
                              <el-checkbox v-model="allChecked" @change="onChange($event,null,-1)">{{allText}}</el-checkbox>
                            </li>
                            <li v-for="(item,index) in isCheckOptions" @click="toggle($event)">
                              <el-checkbox v-model="item.checked" @change="onChange($event,item,index)">{{ item.name }}</el-checkbox>
                            </li>
                          </ul>
                        </el-option>
                      </el-select>
                    </el-form-item>
                  </sc-form-layout-col>
                  <sc-form-layout-col width="standard">
                    <el-form-item label="存单代码:">
                      <el-input  clearable placeholder="请输入内容"></el-input>
                    </el-form-item>
                  </sc-form-layout-col>
                  <sc-form-layout-col align="right" width="160px">
                    <el-form-item>
                      <el-button type="primary" @click="onQuery" v-cloak>查询</el-button>
                      <el-button @click="onReset" v-cloak>重置</el-button>
                    </el-form-item>
                  </sc-form-layout-col>
                </sc-form-layout-row>
              </sc-form-layout>
            </el-form>
          </sc-form-layout-col>
        </sc-form-layout-row>
      </sc-form-layout>
  </div>
  <div class="types" v-if="showType('three')">
		<p class="title">type-1 三个以下（包括三个）</p>
	  	<sc-form-layout class="bmargin">
            <sc-form-layout-row>
              <sc-form-layout-col>
                <el-form>
                  <sc-form-layout>
                    <sc-form-layout-row>
                      <sc-form-layout-col></sc-form-layout-col>
                      <sc-form-layout-col width="standard">
                        <el-form-item>
                          <el-input placeholder='请输入资产组合 /分行名称'  class="sc-input__radius" style="width:400px;"></el-input>
                        </el-form-item>
                      </sc-form-layout-col>
                      <sc-form-layout-col align="right" width="100px">
                        <el-form-item>
                          <el-button type="primary" v-cloak>查询<i :class="'el-icon-arrow-down el-icon--right'"></i>
                          </el-button>
                        </el-form-item>
                      </sc-form-layout-col>
                    </sc-form-layout-row>
                  </sc-form-layout>
                </el-form>
              </sc-form-layout-col>
            </sc-form-layout-row>
          </sc-form-layout>
	</div>
	<div class="types" v-if="showType('four')">
		<p class="title">type-2 四个</p>
	  	<sc-form-layout class="bmargin">
  			<sc-form-layout-row>
  				<sc-form-layout-col>
  					<el-form :model="queryConditions">
  						<sc-form-layout>
  							<sc-form-layout-row>
	  							<sc-form-layout-col >
	  								<!-- <el-button type="primary" @click="onExport" v-cloak>导出</el-button> -->
	  							</sc-form-layout-col>
  								<sc-form-layout-col width="standard2">
  									<el-form-item label="资产组合:">
  										<el-select clearable filterable placeholder="请选择">
  											<el-option ></el-option>
  										</el-select>
  									</el-form-item>
  								</sc-form-layout-col>
  								<sc-form-layout-col width="standard2">
  									<el-form-item label="资产组合:">
  										<el-select clearable filterable placeholder="请选择">
  											<el-option ></el-option>
  										</el-select>
  									</el-form-item>
  								</sc-form-layout-col>
  								<sc-form-layout-col width="standard2">
  									<el-form-item label="核对结果:">
  										<el-select v-model="selText" placeholder="请选择">
  											<el-option class="sc-multiselect" value="">
  												<ul>
  													<li @click="toggle($event)">
  														<el-checkbox v-model="allChecked" @change="onChange($event,null,-1)">{{allText}}</el-checkbox>
  													</li>
  													<li v-for="(item,index) in isCheckOptions" @click="toggle($event)">
  														<el-checkbox v-model="item.checked" @change="onChange($event,item,index)">{{ item.name }}</el-checkbox>
  													</li>
  												</ul>
  											</el-option>
  										</el-select>
  									</el-form-item>
  								</sc-form-layout-col>
  								<sc-form-layout-col width="standard">
  									<el-form-item label="存单代码:">
  										<el-input  clearable placeholder="请输入内容"></el-input>
  									</el-form-item>
  								</sc-form-layout-col>
  								<!-- <sc-form-layout-col align="right" width="160px">
  									<el-form-item>
  										<el-button type="primary" @click="onQuery" v-cloak>查询</el-button>
  										<el-button @click="onReset" v-cloak>重置</el-button>
  									</el-form-item>
  								</sc-form-layout-col> -->
  							</sc-form-layout-row>
  						</sc-form-layout>
  					</el-form>
  				</sc-form-layout-col>
  			</sc-form-layout-row>
  		</sc-form-layout>
	  	<sc-form-layout class="bmargin">
  			<sc-form-layout-row>
  				<sc-form-layout-col>
  					<el-form :model="queryConditions">
  						<sc-form-layout>
  							<sc-form-layout-row>
  								<sc-form-layout-col align="right" width="160px">
  									<el-form-item>
  										<el-button type="primary" @click="onQuery" v-cloak>查询</el-button>
  										<el-button @click="onReset" v-cloak>重置</el-button>
  									</el-form-item>
  								</sc-form-layout-col>
  							</sc-form-layout-row>
  						</sc-form-layout>
  					</el-form>
  				</sc-form-layout-col>
  			</sc-form-layout-row>
  		</sc-form-layout>
	</div>
	<div class="types" v-if="showType('more')">
		<p class="title">type-3 四个以上</p>
	  	<sc-form-layout class="bmargin">
  			<sc-form-layout-row>
  				<sc-form-layout-col>
  					<el-form :model="queryConditions">
  						<sc-form-layout>
  							<sc-form-layout-row>
	  							<!-- <sc-form-layout-col >
	  								
	  							</sc-form-layout-col> -->
  								<sc-form-layout-col align="left" width="standard2">
  									<el-form-item label="资产组合:">
  										<el-select clearable filterable placeholder="请选择">
  											<el-option ></el-option>
  										</el-select>
  									</el-form-item>
  								</sc-form-layout-col>
  								<sc-form-layout-col align="left" width="standard2">
  									<el-form-item label="资产组合:">
  										<el-select clearable filterable placeholder="请选择">
  											<el-option ></el-option>
  										</el-select>
  									</el-form-item>
  								</sc-form-layout-col>
  								<sc-form-layout-col align="left" width="standard2">
  									<el-form-item label="核对结果:">
  										<el-select v-model="selText" placeholder="请选择">
  											<el-option class="sc-multiselect" value="">
  												<ul>
  													<li @click="toggle($event)">
  														<el-checkbox v-model="allChecked" @change="onChange($event,null,-1)">{{allText}}</el-checkbox>
  													</li>
  													<li v-for="(item,index) in isCheckOptions" @click="toggle($event)">
  														<el-checkbox v-model="item.checked" @change="onChange($event,item,index)">{{ item.name }}</el-checkbox>
  													</li>
  												</ul>
  											</el-option>
  										</el-select>
  									</el-form-item>
  								</sc-form-layout-col>
  								<sc-form-layout-col align="left" width="standard2">
  									<el-form-item label="存单代码:">
  										<el-input  clearable placeholder="请输入内容"></el-input>
  									</el-form-item>
  								</sc-form-layout-col>
  							</sc-form-layout-row>
  						</sc-form-layout>
  					</el-form>
  				</sc-form-layout-col>
  			</sc-form-layout-row>
  		</sc-form-layout>
	  	<sc-form-layout class="bmargin">
  			<sc-form-layout-row>
  				<sc-form-layout-col>
  					<el-form :model="queryConditions">
  						<sc-form-layout>
  							<sc-form-layout-row>
  								<!-- <sc-form-layout-col width="0">
	  								
	  							</sc-form-layout-col> -->
  								<sc-form-layout-col align="left" width="standard2">
  									<el-form-item label="资产组合:">
  										<el-select clearable filterable placeholder="请选择">
  											<el-option ></el-option>
  										</el-select>
  									</el-form-item>
  								</sc-form-layout-col>
  								<sc-form-layout-col align="left" width="standard2">
  									<el-form-item label="存单代码:">
  										<el-input  clearable placeholder="请输入内容"></el-input>
  									</el-form-item>
  								</sc-form-layout-col>
	  							<sc-form-layout-col >
	  								
	  							</sc-form-layout-col>
  								<sc-form-layout-col align="right" width="160px">
  									<el-form-item>
  										<el-button type="primary" @click="onQuery" v-cloak>查询</el-button>
  										<el-button @click="onReset" v-cloak>重置</el-button>
  									</el-form-item>
  								</sc-form-layout-col>
  							</sc-form-layout-row>
  						</sc-form-layout>
  					</el-form>
  				</sc-form-layout-col>
  			</sc-form-layout-row>
  		</sc-form-layout>
	</div>
</div>
</template>
<script>
export default {
	data () {
		return {
			typeShow:this.$route.params.type
		}
	},
	methods: {
		showType:function(type){
			return this.typeShow=='all' || this.typeShow==type;
		}
	},
	mounted:function(){
		console.log(this.typeShow);
	}
}
</script>

<style scoped lang="less">
	.types{
		background:#fff;
		padding:10px;
		margin-bottom:10px;
		p{
			padding:10px;
			border-bottom:1px solid rgb(191, 193, 217);
			margin-bottom:10px;
		}
	}
</style>
