<template>
  <el-row>
      <el-col :span="12">
        <label class="el-form-item__label">单选：</label>
        <el-select v-model="treeText" placeholder="请选择" class="el-form-item__content">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>
          <el-option value="treeValue" class="sc-drop-tree">
            <el-tree 
              class="sc-select-tree" 
              :data="data2"  
              default-expand-all 
              :filter-node-method="filterNode"  
              :props="defaultProps" 
              @node-click="handleNodeClick"
              ref="tree2">
            </el-tree>
          </el-option>
        </el-select>
      </el-col>
  </el-row>
</template>

<script>
  export default {
     watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    data() {
    return {
      /****单选选的配置数据****/
      filterText:"",
      treeValue:"",
      treeText:"",
      data: [{
        label: '一级 1',
        id: 1,
        children: [{
          label: '二级 1-1',
          id: 4,
          children: [{
            id: 7,
            label: '三级 1-1-1 天下'
          }]
        }]
      }, {
        label: '一级 2',
        id: 2,
        children: [{
          label: '二级 2-1',
          id: 5,
          children: [{
            id: 8,
            label: '三级 2-1-1 情义'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1 兄弟'
          }]
        }]
      }, {
        label: '一级 3',
        id: 3,
        children: [{
          label: '二级 3-1',
          id: 6,
          children: [{
            id: 9,
            label: '三级 3-1-1 同事'
          }]
        }, {
          label: '二级 3-2',
          id: 10,
          children: [{
            id: 11,
            label: '三级 3-2-1 军情'
          }]
        }]
      }],
      data2:[],
      /**公共的配置***/
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    filterNode(value, data) {
        if (!value) return true; 
        return data.label.indexOf(value) !== -1;
      },
    handleNodeClick (data) {
      var childrens=data[this.defaultProps.children];
      if(childrens==undefined){
        $(".el-select-dropdown").hide();
        $(".el-select-dropdown__item").each(function(){
            if($(this).children().hasClass("sc-select-tree")){
              $(this).click();
            }
        });
        this.treeValue=data.id;
        this.treeText=data[this.defaultProps.label];
        var that=this;
        setTimeout(function(){
          that.data2=that.data;
        })
      }
    },
  },
  mounted () {
    this.data2=this.data;
    for(var i=0; i<10; i++){
      if(i==5){
        break;
      }
      console.log(i);
    }
  }
};
</script>

<style lang="less" scoped>

</style>
