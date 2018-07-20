<template>
    <el-table :data="tableData3" border style="width: 100%" :default-sort="{prop:'date',order:'descending'}">
        <el-table-column prop="date" label="日期" width="150" sortable></el-table-column>
        <el-table-column label="配送信息">
            <el-table-column prop="name" label="姓名" width="120" sortable></el-table-column>
            <el-table-column label="地址">
                <el-table-column prop="province" label="省份" width="120" sortable></el-table-column>
                <el-table-column prop="city" label="市区" width="120" sortable></el-table-column>
                <el-table-column prop="address" label="地址" width="300" sortable></el-table-column>
                <el-table-column prop="zip" label="邮编" width="120" sortable></el-table-column>
            </el-table-column>
        </el-table-column>
    </el-table>    
</template>
<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区1',
          address: '上海市普陀区金沙江路 15181 弄',
          zip: 2003331
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区2',
          address: '上海市普陀区金沙江路 15182 弄',
          zip: 2003332
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区3',
          address: '上海市普陀区金沙江路 15183 弄',
          zip: 2003333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区4',
          address: '上海市普陀区金沙江路 15184 弄',
          zip: 2003334
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区5',
          address: '上海市普陀区金沙江路 15185 弄',
          zip: 2003335
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区6',
          address: '上海市普陀区金沙江路 15186 弄',
          zip: 2003336
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区7',
          address: '上海市普陀区金沙江路 15187 弄',
          zip: 2003337
        }]
      }
    }
  }
</script>
