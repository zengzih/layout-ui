<template>
    <div class="sc-two-tree">
        <el-col :span="11">
            <el-input
                placeholder="输入关键字进行过滤"
                v-model="filterLeft"
            ></el-input>
            <el-tree 
                :data="leftData"
                :props="defaultProps"
                show-checkbox
                class="filter-tree"
                node-key="id"
                @node-click="handleNodeClick"
                :filter-node-method="filterLeftNode"
                ref="treeLeft"
            ></el-tree>
        </el-col>
        <el-col :span="2">
            <div class="to-right" @click="getCheckedLeft"><i class="iconfont sc-icon-expansion-right"></i></div>
            <div class="to-left" @click="getCheckedRight"><i class="iconfont sc-icon-collapse-left"></i></div>
        </el-col>
        <el-col :span="11">
            <el-input
                placeholder="输入关键字进行过滤"
                v-model="filterRight"
            ></el-input>
            <el-tree 
                :data="rightData"
                :props="defaultProps"
                show-checkbox
                class="filter-tree"
                node-key="id"
                @node-click="handleNodeClick"
                :filter-node-method="filterRightNode"
                ref="treeRight"
            ></el-tree>
        </el-col>
    </div>

</template>

<style scoped>
    .sc-two-tree {
        margin: 100px;  /*做完删除*/
        height: 200px;
    }
</style>

<script>
  export default {
        data () {
            return {
                leftData: [{
                    id:1,
                    label: '一级 1',
                    children: [{
                        id:11,
                        parentId:1,
                        label: '二级 1-1',
                        children: [{
                            id:111,
                            parentId:11,
                            label: '三级 1-1-1'
                        }]
                    },
                    {
                        id:12,
                        parentId:1,
                        label:'二级 1-2'
                    }]
                },
                {
                    id:2,
                    label: '一级 2',
                    children: [{
                        id:21,
                        parentId:2,
                        label: '二级 2-1',
                        children: [{
                            id:211,
                            parentId:21,
                            label: '三级 2-1-1'
                        }]
                    },
                    {
                        id:22,
                        parentId:2,
                        label: '二级 2-2',
                        children: [{
                            id:221,
                            parentId:22,
                            label: '三级 2-2-1'
                        }]
                    }]
                },
                {
                    id:3,
                    label: '一级 3',
                    children: [{
                        id:31,
                        parentId:3,
                        label: '二级 3-1',
                        children: [{
                            id:311,
                            parentId:31,
                            label: '三级 3-1-1'
                        }]
                    },
                    {
                        id:32,
                        parentId:3,
                        label: '二级 3-2',
                        children: [{
                            id:321,
                            parentId:32,
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                rightData:[],
                defaultProps: {  //数据需要的字段
                    children: 'children',
                    label: 'label',
                    id:'id',  //每个数据的ID
                    parentId:'parentId',  //添加一个parentID，用于追溯右边的项在左边的位置
                },
                filterLeft:'',
                filterRight:''
            }
        },
        watch: {
            filterLeft(val) {
                this.$refs.treeLeft.filter(val);
            },
            filterRight(val) {
                this.$refs.treeRight.filter(val);
            }
        },
        methods: {
            handleNodeClick(data) {
               console.log(data); 
            },
            filterLeftNode(val,data) {
                if (!val) return true;
                return data.label.indexOf(val) !== -1;
            },
            filterRightNode(val,data) {
                if (!val) return true;
                return data.label.indexOf(val) !== -1;
            },
            /*向右*/
            getCheckedLeft() {
                var lCheckedData = this.$refs.treeLeft.getCheckedNodes();
                //var lCheckedData = this.$refs.treeLeft.getCheckedKeys();
                var arr = this.rightData;
                var children = this.defaultProps.children;
                lCheckedData.forEach(function(e){
                    if(!e[children]){
                        arr.push(e);
                    }
                });

                //添加到右边的时候删除左边选中的
                var leftData = this.leftData;
                var id = this.defaultProps.id;
                for(var i = 0; i < lCheckedData.length; i++){
                    for(var p = 0; p < leftData.length; p++){  //第一层
                        if(lCheckedData[i][id] == leftData[p][id] &&　!lCheckedData[i][children]){
                            leftData.splice(p,1);
                        }else{
                            var secondStage = leftData[p][children];
                            if(secondStage){
                                for(var s = 0; s < secondStage.length; s++){  //第二层
                                    if(lCheckedData[i][id] == secondStage[s][id] && !lCheckedData[i][children]){
                                        secondStage.splice(s,1);
                                        break;
                                    }else{
                                        var threeStage = secondStage[s][children];
                                        if(threeStage){
                                            for(var f = 0; f < threeStage.length; f++){  //第三层
                                                if(lCheckedData[i][id] == threeStage[f][id] && !lCheckedData[i][children]){
                                                    threeStage.splice(f,1);
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }                        
                    }
                }
                this.leftData.push({});
                this.leftData.splice(this.leftData.length-1,1);
                this.$refs.treeLeft.setCheckedNodes(this.leftData);
            },
            /*向左*/
            getCheckedRight() {
                var rCheckedData = this.$refs.treeRight.getCheckedNodes();
                //数据回到左边的额时候，首先删除被选中的
                var rightData = this.rightData;
                var leftData = this.leftData;
                var id = this.defaultProps.id;
                var parentId = this.defaultProps.parentId;
                var children = this.defaultProps.children;
                
                for(var p = 0; p < rCheckedData.length; p++){
                    if(rCheckedData[p][parentId]){  //有parentId说明不是第一层
                        //把选中的添加到左边                    
                        for(var f = 0; f < leftData.length; f++){
                            if(rCheckedData[p][parentId] == leftData[f][id]){  //第一层
                                //leftData[f][children].push(rCheckedData[p]);
                                leftData[f][children].push({});
                                var length = leftData[f][children].length;
                                leftData[f][children][length-1] = Object.assign({}, leftData[f][children][length-1], rCheckedData[p]);
                                break;
                            }else{
                                var secondStage = leftData[f][children];
                                if(secondStage){
                                    for(var s = 0; s < secondStage.length; s++){  //第二层
                                        if(rCheckedData[p][parentId] == secondStage[s][id]){
                                            //secondStage[s][children].push(rCheckedData[p]);
                                            secondStage[s][children].push({});
                                            var length = secondStage[s][children].length;
                                            secondStage[s][children][length-1] = Object.assign({}, secondStage[s][children][length-1], rCheckedData[p]);
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }else{
                        leftData.push(rCheckedData[p]);
                    }
                    
                    //把选中的删除
                    for(var i = 0; i < rightData.length; i++){
                        if(rCheckedData[p][id] == rightData[i][id]){
                            rightData.splice(i,1);
                            if(i > 0)i = i - 1;   
                        }
                    }
                }
            },
        }
    }
</script>
