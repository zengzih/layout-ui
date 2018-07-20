<template>
  <div id="xx">
    <sc-tree-grid
      ref="treeLoad"
      :data="tableData"
      :url="url"
      :column="column"
      :height="height"
      :fit-column="fitColumns"
      :row-numbers="rownumbers"
      :handle-btn="handleBtn"
      :tree-params="treeParams"
      :collapse-all="collapseAll"
      @handle-click="handleClick"
      @edit-click="editColumn"
      @on-expand="onExpand"
      @on-collapse="onCollapse"
    ></sc-tree-grid>
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

  export default {
    data () {
      return {
        url:'static/TreeGridJson/treegrid.json',
        collapseAll:false,
        handleBtn:[ //操作列按钮
          {type:"",name:"修改",iconClass:"el-icon-edit",color:"#5B7BFA"},
          {type:"",name:"删除",iconClass:"el-icon-delete",color:"#5B7BFA"},
          {type:"",name:"查看",iconClass:"el-icon-document",color:"#5B7BFA"}
        ],
        fitColumns:true, //表格宽度是否自适应 默认是为true(自适应)
        rownumbers:false, //是否显示序号
        height:"210px",
        treeParams:{
          treeField:"region",
          idField:"id",
          parentId:"_parentId"
        },
        column:[
          {title:'资产名称',fieldName:'f1'},
          {title:'资源路径',fieldName:'f2'},
          {title:'资源编码',fieldName:'f3'},
          {title:'资源类型',fieldName:'f4'},
          {title:'排序',fieldName:'f5'},
          {title:'上级资源',fieldName:'f6'},
          {title:'备注',fieldName:'f7'},
          {title:'测试',fieldName:'f8'},
          {title:'资产名称',fieldName:'f1'},
          {title:'资源路径',fieldName:'f2'},
          {title:'资源编码',fieldName:'f3'},
          {title:'资源类型',fieldName:'f4'},
          {title:'排序',fieldName:'f5'},
          {title:'上级资源',fieldName:'f6'},
          {title:'备注',fieldName:'f7'},
          {title:'测试',fieldName:'f8'},
          {title:'操作',fieldName:'fn'},
        ],
        tableData:[],
        currentPage4: 4,
      }
    },
    components : {
    },
    mounted () {
      var url = "static/TreeGridJson/treegrid.json";
      var _this = this;
      this.$http.get(url, {}, { emulateJSON: true }).then(function(response) {
        // _this.tableData = response.data.rows;
      });
    },
    methods:{
      handleClick (typeName,rowData) {  //typeName:当前按钮类型的名字   data：当前行的数据
        //  body
        console.log("-----------操作列:"+typeName+"---------------",rowData);
        var treeLoad = this.$refs.treeLoad; //调用刷新方法
        treeLoad.refshTreeGrid();
      },
      editColumn(rowData){ //单元格编辑事件 rowData:当前编辑行的数据(包含编辑后的数据)
        //this.$http(); //ajax
        this.tableData = this.tableData;
      },
      onExpand(row){  //节点展开 row:当前行数据

      },
      onCollapse(){  //节点折叠 row:当前行数据

      },
      handleSizeChange:function (val) {
        console.log('每页'+val+'条');
      },
      handleCurrentChange:function (val) {
        this.currentPage = val;
        console.log('当前页:'+val);
      },
    }
  }
</script>
