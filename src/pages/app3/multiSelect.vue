<template>
  <el-row>
    <label>多选下拉框：</label>
    <el-select v-model="selText" placeholder="请选择">
      <el-option class="sc-multiselect" value="">
        <ul>
          <li @click="toggle($event)">
            <el-checkbox  v-model="allChecked" @change="onChange($event,null,-1)">{{allText}}
            </el-checkbox>                
          </li>
          <li v-for="(item,index) in datas" @click="toggle($event)">
            <el-checkbox  v-model="item.checked" @change="onChange($event,item,index)">{{ item.label }}
            </el-checkbox>                
          </li>
        </ul>
      </el-option>
    </el-select>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        datas: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Tianjing',
          label: '天津'
        }, {
          value: 'hubei',
          label: '湖北'
        },{
          value: 'hunang',
          label: '湖南'
        }, {
          value: 'dongguan',
          label: '东莞'
        },{
          value: 'Shenzhen',
          label: '深圳'
        },{
          value: 'Guangzhou',
          label: '广州'
        }],
        selValue: '',
        selText: '',
        allChecked:false,
        allText:"全选",
      }
    },
   methods: {
      toggle(event) {
         event.stopPropagation();
      },
      onChange(event,item,index) {
        if(item!=null)
        {
          this.datas[index]["checked"]=event.target.checked;
        }
        else
        {
          this.datas.forEach(function(item){  
             item["checked"]=event.target.checked;
          });
          //this.allText=(event.target.checked?"反选":"全选");
        }
        this.getSelectVal(this.datas);

      },
      getSelectVal(items) {
        this.selText="";
        this.selValue="";
        for(var i=0;i<items.length;i++)
        {
          if(items[i].checked)
          {
            this.selText+=(this.selText.length>0?",":"")+items[i].label;
            this.selValue+=(this.selValue.length>0?",":"")+items[i].value;
          }
        }
        var arrSel=this.selText.split(",");
        this.allText=(this.selText==""||arrSel.length!=this.datas.length?"全选":"反选");
        this.allChecked=(arrSel.length==this.datas.length?true:false);
      }
    },
    created () {
        var ids="";//这块可以对应后台返回的值
        //var ids="Beijing,Guangzhou,Chengdu";//这块可以对应后台返回的值
        this.datas.forEach(function(item){
             if(ids.indexOf(item.value)>=0)item["checked"]=true;
        });  
        this.getSelectVal(this.datas); 
    }
  }
</script>