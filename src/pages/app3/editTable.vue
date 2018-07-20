<template>
  <el-table
    :data="tableData"
    fit
    border
    style="width: 100%">
    <el-table-column
      prop="switch"
      label="开关"
      width="120">
      <template scope="scope">
        <el-switch
          v-model="tableData[scope.$index].switch"
          on-text="是"
          off-text="否"
          @change="onSwitch(scope.$index,tableData)"
          on-color="#13ce66"
          off-color="#ff4949">
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column class-name="sc-edit-col"
      prop="date"
      label="日期"
      width="120">
      <template scope="scope">
        <el-date-picker v-model="tableData[scope.$index].date" type="date" placeholder="选择日期">
        </el-date-picker>
      </template>
    </el-table-column>
    <el-table-column class-name="sc-edit-col"
      prop="name"
      label="姓名"
      width="150">
      <template scope="scope" >
          <el-input v-if="tableData[scope.$index].id!='001'" @blur="onBlur(scope.$index,tableData)" v-model="tableData[scope.$index].name" placeholder="请输入内容"></el-input>
          <el-select v-if="tableData[scope.$index].id=='001'" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      width="120px"
      label="操作">
      <template scope="scope" >
          <el-tooltip class="item" effect="light" content="新增"
          placement="left">
              <el-button @click.native.prevent="onAdd(scope.$index, tableData)"
              type="text" size="small">
                  <i class="iconfont sc-icon-add"></i>
              </el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="light" content="移除"
          placement="left">
              <el-button @click.native.prevent="onSub(scope.$index, tableData)"
              type="text" size="small">
                  <i class="iconfont sc-icon-minus"></i>
              </el-button>
          </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
     value2:"AAA",
     tableData: [{
            id:'001',
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            switch:true
          }, {
            id:'002',
            date: '2016-05-04',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1517 弄',
            switch:false
          }, {
            id:'003',
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            switch:true
          }, {
            id:'004',
            date: '2016-05-03',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1516 弄',
            switch:false
          }, {
            id:'005',
            date: '2016-05-03',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1516 弄',
            switch:true
          }, {
            id:'006',
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            switch:true
          }, {
            id:'007',
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
            switch:true
          }],
    };
  },
  methods: {
    onSwitch(index,rows) {//开关按钮的事件
      console.log('我改变的是第【'+index+'】条数据！')
      console.log(rows[index]);
    },
    onBlur(index,rows) {
      console.log('我触发的是第【'+index+'】条数据：改成了：')
      console.log(rows[index].name);
    },
    onAdd(index,rows) {
        this.tableData.push(rows[index]);
    },
    onSub(index,rows) {
      this.tableData.splice(index,1);    
    }
  },
  created () {

  }
  };
</script>

<style lang="less" scoped>

</style>
