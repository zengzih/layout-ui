<template>

  <el-row>
      <el-col :span="12">
        <label class="el-form-item__label">单选：</label>
        <el-select v-model="treeText" placeholder="请选择" class="el-form-item__content">
          <el-option value="treeValue" class="sc-drop-tree">
            <el-tree class="sc-select-tree" :data="data"  :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <label class="el-form-item__label">多选：</label>
        <el-select v-model="mutiTreeText" placeholder="请选择" class="el-form-item__content">
          <el-option value="mutiTreeValue" class="sc-drop-tree">
            <el-tree
              :data="data2"
              show-checkbox
              node-key="id"
              ref="tree"
              @check-change="onNodeCheck"
              :default-expanded-keys="[2,3]"
              :default-checked-keys="[5,6]"
              :props="defaultProps">
            </el-tree>
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
      </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
    return {
      /****单选选的配置数据****/
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
            label: '三级 1-1-1'
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
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
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
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          id: 10,
          children: [{
            id: 11,
            label: '三级 3-2-1'
          }]
        }]
      }],
      /****批量勾选的配置数据****/
      mutiTreeValue:"",
      mutiTreeText:"",
      data2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      /**公共的配置***/
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
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
      }
    },
    onNodeCheck(data,val1,val2) {
        this.getMultiTreeVal(this.$refs.tree.getCheckedNodes());
    },
    getMultiTreeVal(nodes) {
        this.mutiTreeValue="";
        this.mutiTreeText="";
        for(var i=0;i<nodes.length;i++)
        {
          var childrens=nodes[i][this.defaultProps.children];
          if(childrens==undefined)
          {
              this.mutiTreeValue+=(this.mutiTreeValue.length>0?",":"")+nodes[i].id;
              this.mutiTreeText+=(this.mutiTreeText.length>0?",":"")+nodes[i][this.defaultProps.label];
          }
        }
    },
  },
  mounted () {
    this.getMultiTreeVal(this.$refs.tree.getCheckedNodes());
  }
  };
</script>

<style lang="less" scoped>

</style>
