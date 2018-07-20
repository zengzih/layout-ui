<template>
  <el-table
    :data="filterData"
    :row-style="showTr"
    :stripe="true"
    border
    style="width: 100%"
  >
   <!-- <el-table-column  v-for="(column, index) in columns"  :align="getTheadAlign(column.align)" :fixed="column.fixed" :key="column.dataIndex"
                      :label="column.text">
      <template scope="scope">
        <span v-if="spaceIconShow(index)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
        <span class="button is-outlined is-primary is-small" v-if="toggleIconShow(index,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-tree-node__expand-icon" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-tree-node__expand-icon expanded" aria-hidden="true"></i>
        </span>
        <span v-else-if="index===0" class="ms-tree-space"></span>
        {{scope.row[column.dataIndex]}}
      </template>
    </el-table-column>-->
    <el-table-column
      prop="name"
      fixed
      label="姓名">
      <template scope="scope">
        <span v-if="spaceIconShow(0)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
        <span class="button is-outlined is-primary is-small" v-if="toggleIconShow(0,scope.row)" @click="toggle(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-tree-node__expand-icon" aria-hidden="true"></i>
          <i v-if="scope.row._expanded" class="el-tree-node__expand-icon expanded" aria-hidden="true"></i>
        </span>
        <span :class="getScope(scope)"></span><!--scope.row.iconClass-->
        {{scope.row.name}}
      </template>
    </el-table-column>
    <el-table-column
      prop="age"
      label="年龄">
    </el-table-column>
    <el-table-column
      prop="sex"
      label="性别">
    </el-table-column>


    <el-table-column label="操作" v-if="treeType === 'normal'" width="auto" align="center" :fixed="getToolTip()">
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
</template>
<script>
  import TreeScope from '../../components/base/treescope'
  import Utils from '../../components/base/treeTable/utils/index.js'
  export default {
    name: 'tree-grid',
    data () {
      return {
         data:[],
         columns:[],
         treeType:"normal",
         treeStructure:true,
         defaultExpandAll:false
      }
    },
    computed:{
      filterData(){
          if (this.treeStructure) {
              var data = Utils.MSDataTransfer.treeToArray(this.data, null, null, this.defaultExpandAll);
              this.data = data;
              return data;
          }
            return this.data;
          }
    },
    methods: {
      getScope(scope){
          console.log(scope);
      },
      getToolTip:function(){
        if(this.handleFixed){
          return this.handleFixed;
        }else{
          return false;
        }
      },
      onBtnClickEvent(rowIndex,rowData,typeName){
        this.$emit("btnclickevent",rowIndex,rowData,typeName);
      },
      getTheadAlign:function(attr){
        if(attr){
          return attr;
        }else{
          return "center";
        }
      },
      // 显示行
      showTr: function (row, index) {
        let show = (row._parent ? (row._parent._expanded && row._parent._show) : true)
        row._show = show;
        return show ? '' : 'display:none;'
      },
      // 展开下级
      toggle: function (trIndex) {
        var record = this.data[trIndex]
        record._expanded = !record._expanded
      },
      // 显示层级关系的空格和图标
      spaceIconShow (index) {
        if (this.treeStructure && index === 0) {
          return true
        }
        return false
      },
      // 点击展开和关闭的时候，图标的切换
      toggleIconShow (index, record) {
        if (this.treeStructure && index === 0 && record.children && record.children.length > 0) {
          return true
        }
        return false
      },
      onDeleteRow(index,data){
        console.log(index,data);
      },
    },
    components : {
      TreeScope
    },
    mounted(){
        this.data = [
        {
          id: 1,
          parentId: 0,
          name: '测试',
          age: 18,
          sex: '男',
          children: [
            {
              id: 2,
              parentId: 1,
              name: '测试2',
              age: 22,
              sex: '男',
              children: [
                {
                  id: 2,
                  parentId: 1,
                  name: '测试3',
                  age: 22,
                  sex: '哈哈',
                  children: [
                    {
                      id: 7,
                      parentId: 6,
                      name: '测试888888',
                      age: 27,
                      sex: '男'
                    }
                  ]
                },
                {
                  id: 2,
                  parentId: 1,
                  name: '测试3-1',
                  age: 22,
                  sex: '哈哈'
                }
              ],
            }
          ]
        },
        {
          id: 3,
          parentId: 0,
          name: '测试3',
          age: 23,
          sex: '女',
          children: [
            {
              id: 4,
              parentId: 3,
              name: '测试4',
              age: 22,
              sex: '男'
            },
            {
              id: 5,
              parentId: 3,
              name: '测试5',
              age: 25,
              sex: '男',
              iconClass:"el-icon-edit"
            },
            {
              id: 6,
              parentId: 3,
              name: '测试6',
              age: 26,
              sex: '女',
              children: [
                {
                  id: 7,
                  parentId: 6,
                  name: '测试7',
                  age: 27,
                  sex: '男'
                }
              ]
            }
          ]
        },
        {
          id: 18,
          parentId: 0,
          name: '测试8',
          age: 18,
          sex: '男'
        }
      ];
        this.columns =  [
          {
            text: '姓名',
            dataIndex: 'name',
            align:"left",
            fixed:true
          },
          {
            text: '年龄',
            dataIndex: 'age'
          },
          {
            text: '性别',
            dataIndex: 'sex'
          },
          {
            text: '姓名',
            dataIndex: 'name'
          },
          {
            text: '年龄',
            dataIndex: 'age'
          },
          {
            text: '性别',
            dataIndex: 'sex'
          },
          {
            text: '姓名',
            dataIndex: 'name'
          },
          {
            text: '年龄',
            dataIndex: 'age'
          },
          {
            text: '性别',
            dataIndex: 'sex'
          }
        ];
    }
  }
</script>
<style scoped>
  .ms-tree-space{position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;}
  .ms-tree-space::before{content: ""}
  table td{
    line-height: 26px;
  }

</style>
