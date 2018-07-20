<!--
 Created by zzh
 date:on 2017/5/11.
-->

<template>
  <div class="easyui-layout" style="width: 1200px;margin:100px auto;">
  <sc-data-grid
    :data="tableData"
    :column="column"
    :width="tableWidth"
    :height="tableHeight"
    :auto-merge-cells="autoMergeCells"
    :fit-columns="fitColumns"
    :row-numbers="rownumbers"
    :fix-columns="fixColumns"
    :handle-btn="handleBtn"
    @on-sort-click="onSortColEvent"
    @handle-click="ctrClickEvent"
    @edit-click="editColEvent"
  ></sc-data-grid>
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
</template>

<style scoped>

</style>

<script>
  import scDataGrid from '../../components/base/dataGrid'
  export default {
    data () {
      return {
        divshow:false,
        tableWidth:"",
        tableHeight:"500",
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
       /* fixColumns:[[ //设置固定列(注意此处是一个二维数组) 使用固定列需关闭表格自适应fitColumns并手动设置每一列的宽度
          {field:'itemid',title:'Item ID',width:80,align:"center",sortable:true},
          {field:'productid',title:'Product ID',width:80,align:"center"},
        ]]*/
        currentPage4: 4,
      }
    },
    components : {
      scDataGrid
    },
    mounted(){
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
      ]; //[{startRow:3,endRow:4,colIndex:3},{startRow:2,endRow:6,colIndex:1}]
      this.autoMergeCells = [{startRow:3,endRow:4,colIndex:3},{startRow:2,endRow:6,colIndex:1}];
       this.$http.get(url, {}, { emulateJSON: true }).then(function(response) {
           console.log(response);
        // _this.tableData = response.data.rows;
       });
    },
    methods:{
      ctrClickEvent (typeName,data) {  //typeName:当前按钮类型的名字   data：当前行的数据
          console.log("-----------操作列:"+typeName+"---------------",data);
      },
      onSortColEvent(sort, order){ //排序 sort:排序字段  order:排序方式(asc或desc)
          console.log("-------排序-------:","排序字段:"+sort,"----排序方式:"+order);
      },
      editColEvent(rowData){ //单元格编辑事件 rowData:当前编辑行的数据(包含编辑后的数据)
         var data = this.tableData;
         this.tableData = [];
        //this.$http();
         this.tableData = data;
      },
      handleSizeChange:function (val) {
        console.log('每页'+val+'条');
      },
      handleCurrentChange:function (val) {
        this.currentPage = val;
        console.log('当前页:'+val);
      },
    },
    updated(){
      //  this.tableHeight = ($(window).height() - 200).toString();
    }
  }
</script>
