<template>
  <el-row>
      <el-col :span="12">
        <label>单选：</label>
        <el-select style="width:500px" v-model="selectText" placeholder="请选择">
          <el-option value="selectValue" class="sc-drop-table">
             <el-table
              :data="tableData"
              fit
              border
              @header-click="onHeaderClick"
              @row-click="onRowClick"
              style="width: 100%">
              <el-table-column
                prop="date"
                label="日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="100">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="12">
        <label>多选：</label>
        <el-select style="width:500px" v-model="mutiSelectText" placeholder="请选择">
          <el-option value="mutiSelectValue" class="sc-drop-table">
            <el-table
              ref="multipleTable"
              :data="tableData"
              fit
              border
              @header-click="onHeaderClick"
              @row-click="onMultiRowClick"
              @selection-change="handleSelectionChange"
              style="width: 100%">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                prop="date"
                label="日期"
                width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="100">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-input
              @keyup.native="formatChar($event)"
              @keydown.native="formControlKey($event)" v-model="selectValue" placeholder="请输入内容">
        </el-input>
      </el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
    return {
     selectText:"",
     selectValue:"",
     mutiSelectText:"",
     mutiSelectValue:"",
     tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          multipleSelection: []
    };
  },
  methods: {
    onHeaderClick(column, event) {
      event.stopPropagation();
    },
    onRowClick(row, event, column) {
       this.selectText=row.date+','+row.name+','+row.address;
       this.selectValue=row.date;
       event.stopPropagation();
    },
    onMultiRowClick(row, event, column) {
       //this.multipleSelection.push(row);没用checkbox不会勾选
       this.$refs.multipleTable.toggleRowSelection(row);
       this.getMultiTableVal(this.multipleSelection);
      event.stopPropagation();
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
        this.getMultiTableVal(val);
    },
    getMultiTableVal(val) {
        this.mutiSelectText="";
        this.mutiSelectValue="";
        for(var i=0;i<val.length;i++)
        {
           this.mutiSelectText+=(this.mutiSelectText.length>0?",":"")+val[i].date+'-'+val[i].name+'-'+val[i].address;
           this.mutiSelectValue+=(this.mutiSelectValue.length>0?",":"")+val[i].date;
        }
    },
    formControlKey(e) {
            var arcBefore = 3;//this.integer;
            var arcAfter =4; //this.decimal;
            var thisVal = e.target.value;
            var key = e.keyCode;
            var pos = e.target.selectionEnd;//获取鼠标位置
            var isContainFirst = false;
            var vfirst="-";
            var visNotSelect=true;
            // 首位可以输入自定义字符的处理
            if (vfirst) {
                if(pos == 0 && !((key >=48 && key<=57) || (key>=35 && key<=40) || (key>=96 && key<=105) || (key==8) || key == 110 || key == 190)) {
                    if(vfirst.indexOf(e.key) == -1) {
                        e.preventDefault();
                    }
                }
                if (pos != 0 && vfirst.indexOf(e.key) >= 0) {
                    e.preventDefault();
                }

                if( visNotSelect &&  (arcBefore || arcAfter) ){
                    for(var i = 0; i < vfirst.length; i++){
                        if (thisVal.indexOf(vfirst[i]) >= 0) {
                            isContainFirst = true;
                        }
                    }

                    if((key >=48 && key<=57) || (key>=35 && key<=40) || (key>=96 && key<=105) || (key==8) || key == 110 || key == 109 || key == 190) {
                        if(key != 8 && key!=37 && key!=39 && key!=36 && key!=35){ //删除  左右方向键  home  end
                            if(e.target.value.indexOf(".")!=-1 && (key == 110 || key == 190)){  //190：小数点  110 小键盘小数点
                                e.preventDefault();
                            }
                            if((key == 110 || key == 190) && (arcAfter == undefined || arcAfter == 0)){  //190：小数点  110 小键盘小数点
                                e.preventDefault();
                            }
                            if(e.target.value.indexOf(".")!=-1){  //有小数点的情况下
                                //有小数点
                                var valueLength = e.target.value.split(".")[0].length;
                                if (isContainFirst) {
                                    valueLength = e.target.value.split(".")[0].length - 1;
                                }
                                if(pos<e.target.value.indexOf(".") && valueLength >=arcBefore){
                                    e.preventDefault();
                                }
                                if(pos>e.target.value.indexOf(".") && e.target.value.split(".")[1].length >=arcAfter){
                                    e.preventDefault();
                                }
                                if(valueLength >=arcBefore && e.target.value.split(".")[1].length>=arcAfter){
                                    e.preventDefault();
                                }
                            }else{
                                var valueLength = e.target.value.length;
                                if (isContainFirst) {
                                    valueLength = e.target.value.length - 1;
                                }

                                if(valueLength == 0 && (key == 110 || key == 190)){
                                    e.preventDefault();
                                }
                                if(valueLength >= arcBefore && (key != 110 && key != 190 && key != 37 && key != 39)){
                                    e.preventDefault();
                                }
                            }
                        }
                    }else{
                        if (vfirst.indexOf(e.key) == -1) {
                            e.preventDefault();
                        }
                    }
                }
            } else {
                if( visNotSelect &&  (arcBefore || arcAfter )){
                    if((key >=48 && key<=57) || (key>=35 && key<=40) || (key>=96 && key<=105) || (key==8) || key == 110 || key == 109  || key == 190) {
                        if(key != 8 && key!=37 && key!=39 && key!=36 && key!=35){ //删除  左右方向键  home  end
                            if(e.target.value.indexOf(".")!=-1 && (key == 110 || key == 190)){  //190：小数点  110 小键盘小数点
                                e.preventDefault();
                            }
                            if((key == 110 || key == 190) && (arcAfter == undefined || arcAfter == 0)){  //190：小数点  110 小键盘小数点
                                e.preventDefault();
                            }
                            if(e.target.value.indexOf(".")!=-1){  //有小数点的情况下
                                //有小数点
                                if(pos<e.target.value.indexOf(".") && e.target.value.split(".")[0].length >=arcBefore){
                                    e.preventDefault();
                                }
                                if(pos>e.target.value.indexOf(".") && e.target.value.split(".")[1].length >=arcAfter){
                                    e.preventDefault();
                                }
                                if(e.target.value.split(".")[0].length>=arcBefore && e.target.value.split(".")[1].length>=arcAfter){
                                    e.preventDefault();
                                }
                            }else{
                                if(e.target.value.length == 0 && (key == 110 || key == 190)){
                                    e.preventDefault();
                                }
                                if(e.target.value.length >= arcBefore && (key != 110 && key != 190 && key != 37 && key != 39)){
                                    e.preventDefault();
                                }
                            }
                        }
                    }else{
                        e.preventDefault();
                    }
                }
            }

        },
        formatChar(e) {
            var arcBefore =3; //this.integer;
            var arcAfter =4; //this.decimal;
            var key = e.keyCode;
                if(arcBefore || arcAfter){
                    if(key != 8 && key!=37 && key!=39 && key!=36 && key!=35 && key!=109){
                        var charArr = e.target.value.split("");
                      for(var i=0;i<charArr.length;i++){
                        if(Number(charArr[i])!=0 &&  !Number(charArr[i]) && charArr[i]!="." && charArr[i]!="-"){
                          charArr[i] = "";
                        }
                      }
                      e.target.value = charArr.join("");
                    }
            }
        },
        formMatChar(char) {  //解决中文字符问题
            var charArr = char.split("");
            for(var i=0;i<charArr.length;i++){
                if(Number(charArr[i])!=0 &&  !Number(charArr[i]) && charArr[i]!="." && charArr[i]!="-"){
                    charArr[i] = "";
                }
            }
            return charArr.join("");
        },
  },
  mounted () {
  }
  };
</script>

<style lang="less" scoped>

</style>
