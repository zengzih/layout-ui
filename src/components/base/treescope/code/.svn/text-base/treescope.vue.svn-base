<!--
 Created by zzh
 date:on 2017/5/17.
-->
<template scope="scope">
  <div>
   <!-- <span v-if="spaceIconShow(0)" v-for="(space, levelIndex) in scope.row._level" class="ms-tree-space"></span>
    <span class="button is-outlined is-primary is-small" v-if="toggleIconShow(0,scope.row)" @click="toggle(scope.$index)">
            <i v-if="!scope.row._expanded" class="el-tree-node__expand-icon" aria-hidden="true"></i>
            <i v-if="scope.row._expanded" class="el-tree-node__expand-icon expanded" aria-hidden="true"></i>
          </span>
    <span v-else-if="index===0" class="ms-tree-space"></span>
    {{scope.row.name}}-->
  </div>
</template>

<style scoped>

</style>

<script>
    export default {
        name:"TreeScope",
        props:{
            scope:Array
        },
        data () {
            console.log(this.scope);
            return {}
        },
        watch:{
          scope:{
              handler(val){
                  console.log(val);
              }
          },
        },
        methods:{
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
        }
    }
</script>
