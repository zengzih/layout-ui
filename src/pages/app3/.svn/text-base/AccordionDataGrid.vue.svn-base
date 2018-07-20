<template>
		<div class="sc-theme is-standard padding">
			<div class="sc-card sc-card--accordion" :class="{'is-open': card.opened}" v-for="card in cards">
				<div class="sc-header">
					<div class="sc-title">
						A001_测试基金1号
					</div>
					<div class="sc-content" style="overflow: visible;">
						<ul class="sc-box is-flex is-red">
							<li><b>银行头寸:</b><span class="red">-5,000,000,000.00</span></li>
							<li><b>银行余额:</b><span>5,000,000,000.00</span></li>
							<li><b>权益余额:</b><span>5,000,000,000.00</span></li>
						</ul>
						<ul class="sc-box is-flex is-yellow">
							<li><b>银行头寸+权益:</b><span class="red">-120,000,000.00</span></li>
							<li><b><a href="#">今日入款:</a></b><span>120,000,000.00</span></li>
							<li><b><a href="#">今日出款:</a></b><span>120,000,000.00</span></li>
						</ul>
						<ul class="sc-box is-flex is-yellow2">
							<li><b>中债DVP账户:</b><span>120,000,000.00</span></li>
							<li><b>上清DVP账户:</b><span>120,000,000.00</span></li>
						</ul>
						<ul class="sc-box is-flex is-green">
							<li><b>中债轧差:</b><span>120,000,000.00</span></li>
							<li><b>上清轧差:</b><span>100,000,000.00</span></li>
							<li><b>总轧差:</b><span>100,000,000.00</span></li>
						</ul>
						<ul class="sc-box is-flex2 is-blue">
							<li>
								<div class="iblock"><b>交收状态：</b><span>10/2</span></div>
								<div class="iblock lmargin"><b>成交状态：</b><span>10/2</span></div>
							</li>
							<li>
								<b>头寸状态：</b>
								<div class="iblock">
									<span class="tag is-red">银行头寸未平</span>
									<span class="tag is-green">银行头寸+权益已平</span>
								</div>
							</li>
							<li>
								<div class="iblock">
									<b>交易状态：</b>
									<div class="iblock"><span class="tag is-red">未完成</span></div>
								</div>
								<div class="iblock lmargin">
									<b>划款状态：</b>
									<div class="iblock"><span class="tag is-green">中债已完</span><span class="tag is-red">上清已完</span></div>
								</div>
							</li>
						</ul>
						<div class="center" style="font-size:26px; line-height: 120px; width: 30px; margin-left: 10px;">
							<i class="iconfont grey pointer" :class="card.iconClass" @click="card.opened = !card.opened"></i>
						</div>
					</div>
				</div>
				<div class="sc-body">
          <div style="height: 500px; background: #fff;">

          </div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data () {
			return {
				cards: [
					{ opened: false, iconClass: 'sc-icon-add'},
					{ opened: false, iconClass: 'sc-icon-add'},
					{ opened: false, iconClass: 'sc-icon-add'},
				],
				opened: false,
				west: {
					width: 500,
					padding: true,
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
				currentPage4: 4,
			}
		},
		computed: {
			iconClass: function () {
				return {
					'sc-icon-minus': this.opened,
					'sc-icon-add': !this.opened
				}
			}
		},
		mounted () {
			var url = 'static/tableJson/datagrid.json';
			var _this = this;

			this.tableData = [
				{"productid":"FI-SW-01","productname":"Koi","unitcost":10.00,"status":"P","listprice":36.50,"attr1":"Large","itemid":"EST-1"},
				{"productid":"K9-DL-01","productname":"Dalmation","unitcost":12.00,"status":"P","listprice":18.50,"attr1":"Spotted Adult Female","itemid":"EST-10"},
				{"productid":"RP-SN-01","productname":"Rattlesnake","unitcost":12.00,"status":"P","listprice":38.50,"attr1":"Venomless","itemid":"EST-11"},
				{"productid":"RP-SN-01","productname":"Rattlesnake","unitcost":12.00,"status":"P","listprice":26.50,"attr1":"Rattleless","itemid":"EST-12"},
				{"selected":true,"productid":"RP-LI-02","productname":"Iguana","unitcost":12.00,"status":"P","listprice":35.50,"attr1":"Green Adult","itemid":"EST-13"},
				{"productid":"FL-DSH-01","productname":"Manx","unitcost":12.00,"status":"P","listprice":158.50,"attr1":"Tailless","itemid":"EST-14"},
				{"productid":"FL-DSH-01","productname":"Manx","unitcost":12.00,"status":"P","listprice":83.50,"attr1":"With tail","itemid":"EST-15"},
				{"productid":"FL-DLH-02","productname":"Persian","unitcost":12.00,"status":"P","listprice":23.50,"attr1":"Adult Female","itemid":"EST-16"},
				{"productid":"FL-DLH-02","productname":"Persian","unitcost":12.00,"status":"P","listprice":89.50,"attr1":"Adult Male","itemid":"EST-17"},
				{"productid":"AV-CB-01","productname":"Amazon Parrot","unitcost":92.00,"status":"P","listprice":63.50,"attr1":"Adult Male","itemid":"EST-18"}
			]

			this.autoMergeCells = [{startRow:3,endRow:4,colIndex:3},{startRow:2,endRow:6,colIndex:1}];
		},
		methods:{
			ctrClickEvent (typeName,data) {  //typeName:当前按钮类型的名字   data：当前行的数据
				console.log("-----------操作列:"+typeName+"---------------",data);
			},
			onSortColEvent(sort, order){
				console.log("-------排序-------:","排序字段:"+sort,"----排序方式:"+order);
			},
			editColEvent (rowData) { //单元格编辑事件 rowData:当前编辑行的数据(包含编辑后的数据)
				var data = this.tableData;
				this.tableData = [];

				this.tableData = data;
			},
			handleSizeChange:function (val) {
				console.log('每页'+val+'条');
			},
			handleCurrentChange:function (val) {
				this.currentPage = val;
				console.log('当前页:'+val);
			}
		}
	}
</script>
