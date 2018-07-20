<template>
  <div  class="sc-theme easyui-panel" :style="getTableStyle(0)">
    <table :id="tableId" :style="getTableStyle(1)">
      <thead>
      <tr v-if="getColShow()">
        <th v-for="col in autoMergeHeader" :colspan="col.colSpan">{{col.colName}}</th>
      </tr>
      <tr>
        <th v-for="item in columns" :width="getThStyle(item)" :field="item.fieldName" :id="getThId(item)"
            :hidden="getHidden(item)" align="center" :editor="item.editor">{{item.title}}
        </th>
        <th field="fn" data-options="field:'_operate',align:'center',formatter:formatOper">操作</th>
      </tr>
      </thead>
    </table>
  </div>
</template>
<style scoped>

</style>
<script>
  export default {
    name: 'DataGrid',
    props: {
      autoMergeCells: {
        type: Array,
        default(){
            return [];
        }
      },
      fixColumns: {
        type: Array,
        default(){
            return [];
        }
      },
      data: {
        type: Array,
        default(){
            return [];
        }
      },
      mergeHeader:{
          type:Array,
          default(){
              return [];
          }
      },
      column:{
        type:Array,
        default(){
            return [];
        }
      },
      height:{
          type:String,
          default:""
      },
      width:{
        type:String,
        default:'100%'
      },
      fitColumn:{
        type:Boolean,
        default(){
          return true;
        }
      },
      rowNumbers:{
         type:Boolean,
         default(){
           return true;
         }
      },
      handleBtn:{
          type:Array,
         default(){
            return [];
        }
      },
      url:{
          type:String,
          default(){
            return '';
          }
      }
    },
    data () {
      return {
        requestUrl: this.url,
        columns: this.column,
        rownumbers: this.rowNumbers,
        fitColumns: this.fitColumn,
        gridData: this.data,
        fit: false,
        heights:this.height,
        MergeCells: this.autoMergeCells,
        controlList: this.handleBtn,
        tableStyle: {
          width: this.width+"px",
          border:"1px solid #ddd"
        },
        frozenColumns: this.fixColumns,
        editIndex:undefined,
        tableId:"",
        autoMergeHeader:this.mergeHeader
      }
    },
    watch: {
      height:{
          handler(val){
              //if(val &&  val!=this.heights){
                this.heights  = val;
               // $('#'+this.tableId).datagrid('reload');
                this.loadTreeGrid();
           //   }
          },
          deep:true
      },
      watch:{
          handler(val){
              this.widths = val;
              this.loadTreeGrid();
          }
      },
      mergeHeader:{
          handler:function(val){
              this.autoMergeHeader = val;
          },
          deep:true
      },
      column:{
          handler:function(val){
              this.columns = val;
          },
          deep:true
      },
      autoMergeCells:{
          handler:function(val){
              this.MergeCells = val;
          },
          deep:true
      },
      data: {
        handler: function (val) {
          this.gridData = [];
          this.gridData = val;
          if(val.length>0){
            this.loadTreeGrid();
          }
        },
        deep: true
      },
    },
    mounted() {
      window.vue = this;
      this.loadTreeGrid();
    },
    beforeMount() {
      this.tableId = 'tableId' + Math.floor(Math.random()*1000)
    },
    methods: {
      getColShow(){
          if(this.autoMergeHeader.length>0){
              return true;
          }else{
              return false;
          }
      },
      getHidden(item){
          if(item.hidden!=undefined){
              if(item.hidden){
                   return item.hidden;
              }
          }else{
               return false;
          }
      },
      getTableStyle(attr){
          if(attr == 0){
            return ";width:"+this.width+"px!important;height:"+(+this.heights+2)+"px"
          }else{
            return ";width:"+this.width+"px!important;height:"+this.heights+"px"
          }

      },
      refshTreeGrid: function () {  //刷新表格
        $('#'+this.tableId).datagrid('reload');
      },
      getThId: function (item) {
        if (item.sortable) {
          return "sort"
        }
      },
      getThStyle(item){
        if (item.width) {
          return item.width
        } else {
          return 60;
        }
      },
      loadTreeGrid(){
        var _this = this;
        window.controlList = _this.controlList;
        $('#'+this.tableId).datagrid({
          fitColumns: _this.fitColumns,
          rownumbers: _this.rownumbers,
          showFooter: false,
          cache:false,
          fit:false,
          animate: false,
          idField: _this.idField,
          frozenColumns: _this.frozenColumns,
          striped: true, //隔行换色
          treeField: _this.treeField,
          onLoadSuccess: function (row, data) {  //数据加载完成事件
            if (row.rows.length>0 && _this.MergeCells && _this.MergeCells.length > 0) {
                for(var i in _this.MergeCells){
                  _this.getMergeCells("datagrid-btable",_this.MergeCells[i].startRow,_this.MergeCells[i].endRow,_this.MergeCells[i].colIndex);
                }
              // $(this).datagrid("autoMergeCells", _this.MergeCells);
              _this.setCss('.datagrid-view{height:'+_this.heights+'px!important}');
              var thead = $(".datagrid-header").height();
              _this.setCss('.datagrid-body{height:'+(_this.heights - thead)+'px!important}');

              //$(".datagrid-view").attr("style","height:"+_this.heights+"px!important");
            }
            window.handleClick = _this.handleClick;
            $("#sort .datagrid-sort-icon").append("<i class='sort-caret ascending'></i><i class='sort-caret descending'></i>");
            var strClass = 'datagrid-cell-sort-';
            $(".datagrid-header-row>td").on("click", function () {
              if ($(this).attr("id")) {
                var fieldName = $(this).attr("field");
                var gridsotrId = $(this).find(">div").attr("id");
                var sortId = "";
                var sortType = "";
                switch (gridsotrId) {
                  case "":
                  case undefined:
                    sortId = strClass + "asc";
                    sortType = "arc";
                    break;
                  case strClass + "asc":
                    sortId = strClass + "desc";
                    sortType = "desc";
                    break;
                  case strClass + "desc":
                    sortId = "";
                    sortType = "";
                    break;
                }
                $(this).find(">div").attr("id", sortId);
                  _this.$emit("on-sort-click",fieldName,sortType);
                }
            });
          },
          onDblClickCell: function(index, field, value){
            for(var i in _this.columns){
                if(_this.columns[i].fieldName == field && _this.columns[i].editor){
                  $(this).datagrid('beginEdit', index);
                  var that = $(this);
                  var ed = $(this).datagrid('getEditor', {index:index,field:field});
                  $(ed.target).focus();
                  $(ed.target).parent().css("border","none");
                  $(ed.target).bind("blur",function(){
                    that.datagrid('endEdit', index);
                  });
                  $(document).on("click",function(){
                    that.datagrid('acceptChanges');
                    that.datagrid('endEdit', index);
                    this.editIndex = undefined;
                  });
                  $(ed.target).on("keydown",function(e){
                    var code = e.keyCode || e.which;
                    if(code == 13){
                      $(ed.target).unbind("blur");
                      that.datagrid('acceptChanges');
                      that.datagrid('endEdit', index);
                      this.editIndex = undefined;
                      e.preventDefault();
                    }
                  });
                }
            }
          },
          /*
          * rowIndex:编辑行的索引，索引从0开始。
          * rowData:对应于完成编辑的行的记录(包含更改后的值)
          * changes:更改后的字段(键)/值对。
          * */
          onAfterEdit(rowIndex, rowData, changes){   //编辑完成事件
           // _this.editClick(rowData); //外放事件
            _this.$emit("edit-click",rowData);
          },
        });
        $("#"+_this.tableId).datagrid("loadData", _this.gridData);
      },
      setCss(t,s){
        s=document.createElement('style');
        s.innerText=t;
        document.body.appendChild(s);
      },
      getStyle(item){
        if (item.width) {
          return item.width;
        } else {
          return "auto";
        }
      },
      getMergeCells(tableId, startRow, endRow, col) {
        var tb = document.getElementsByClassName(tableId)[0];
        if (col >= tb.rows[0].cells.length) {
          return;
        }
        if (col == 0) {
          endRow = tb.rows.length - 1;
        }
        for (var i = startRow; i < endRow; i++) {
          try {
            if (tb.rows[startRow].cells[col].innerText == tb.rows[i + 1].cells[col].innerText) {
              tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col]);
              tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan | 0) + 1;
              if (i == endRow - 1 && startRow != endRow) {
                this.getMergeCells(tableId, startRow, endRow, col + 1);
              }
            } else {
              this.getMergeCells(tableId, startRow, i + 0, col + 1);
              startRow = i + 1;
            }
          } catch (e) {
            console.log(e)
          }
        }
      }
    }
  }
  //单元格编辑功能
  /* $.extend($.fn.datagrid.methods, {
    editCell: function(jq,param){
      return jq.each(function(){
        var opts = $(this).datagrid('options');
        var fields = $(this).datagrid('getColumnFields',true).concat($(this).datagrid('getColumnFields'));
        for(var i=0; i<fields.length; i++){
          var col = $(this).datagrid('getColumnOption', fields[i]);
          col.editor1 = col.editor;
          if (fields[i] != param.field){
            col.editor = null;
          }
        }
        $(this).datagrid('beginEdit', param.index);
        for(var i=0; i<fields.length; i++){
          var col = $(this).datagrid('getColumnOption', fields[i]);
          col.editor = col.editor1;
        }
      });
    }
  });
  $.extend($.fn.datagrid.methods, {
    autoMergeCells: function (jq, fields) {

      return jq.each(function () {

        var target = $(this);

        if (!fields) {

          fields = target.datagrid("getColumnFields");

        }

        var rows = target.datagrid("getRows");

        var i = 0,

          j = 0,

          temp = {};

        for (i; i < rows.length; i++) {

          var row = rows[i];

          j = 0;

          for (j; j < fields.length; j++) {

            var field = fields[j];

            var tf = temp[field];

            if (!tf) {

              tf = temp[field] = {};

              tf[row[field]] = [i];

            } else {

              var tfv = tf[row[field]];

              if (tfv) {

                tfv.push(i);

              } else {
                tfv = tf[row[field]] = [i];
              }
            }
          }
        }
        $.each(temp, function (field, colunm) {

          $.each(colunm, function () {

            var group = this;


            if (group.length > 1) {

              var before,

                after,

                megerIndex = group[0];

              for (var i = 0; i < group.length; i++) {

                before = group[i];

                after = group[i + 1];

                if (after && (after - before) == 1) {

                  continue;

                }

                var rowspan = before - megerIndex + 1;

                if (rowspan > 1) {

                  target.datagrid('mergeCells', {

                    index: megerIndex,

                    field: field,

                    rowspan: rowspan

                  });

                }

                if (after && (after - before) != 1) {

                  megerIndex = after;

                }

              }

            }

          });

        });

      });
    }
  });
  window.formatOper = function (val, row, index) {  //val指当前单元格的值,row,当前行对象,index当前行的索引
    var vhtml = "";
    for (var i = 0; i < controlList.length; i++) {
      vhtml += "<span class='"+ controlList[i].iconClass + "' style='color:" + controlList[i].color + "' name='" + controlList[i].name + "' data='" + JSON.stringify(row) + "' onclick=\"ctrClickEvent(event)\"></span>";
    }
    return vhtml;
  };

  window.ctrClickEvent = function (e) {
    var rowData = JSON.parse($(e.target).attr("data"));
    var iconName = $(e.target).attr("name");
    vue.$emit("handle-click",iconName,rowData)
  };*/
</script>
