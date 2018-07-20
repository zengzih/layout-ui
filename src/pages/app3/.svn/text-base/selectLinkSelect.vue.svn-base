<template>
    <div class="sc-theme is-standard">
        <el-select 
            v-model="value6" 
            @change="onChange6"
            @visible-change="onVisibleChange"
              
            filterable 
            clearable 
            size="large"  
            placeholder="请选择"
            >
            <el-option v-for="item in cities" 
                :key="item.value" 
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
                >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
            </el-option>
        </el-select><!--:filter-method="filterMethod" -->
        
        
        <el-select 
            v-model="value8" 
            @change="onChange8"
            no-data-text="木有好吃的"
            placeholder="请选择"
            ><!--disabled  multiple--> 
            <el-option v-for="item in options" 
                :key="item.value" 
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>
     
    </div>
</template>
<script>
    export
    default {
        data() {
            var cityData = [{
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
                    value: 'Shenzhen',
                    label: '深圳'
                }, {
                    value: 'japan',
                    label: 'こんにちは-空尼奇哇！'
                }, {
                    value: 'Korea',
                    label: '안녕하세요！',
                    disabled: true
                }, {
                    value: 'Guangzhou',
                    label: '广州'
                }];
            var optionsData = [{
                    value: 'Shanghai',
                    label: '上海黄金糕'
                }, {
                    value: 'Nanjing',
                    label: '南京双皮奶'
                }, {
                    value: 'Chengdu', 
                    label: '成都大熊猫'
                }, {
                    value: 'Shenzhen',
                    label: '深圳蚵仔煎'
                }, {
                    value: 'Guangzhou',
                    label: '广州龙须面'
                }, {
                    value: 'Beijing',
                    label: '北京烤鸭'
                }];
            
            return {
                citiesSrc: cityData,
                cities: cityData,
                value6: '',
                optionsSrc: optionsData,
                options:optionsData,
                value8: ''
            }
        },
        
        methods: {
            /*filterMethod: function(inputValue) {//适用于 自定义其他 搜索逻辑
                console.log("inputValue=");
                console.log(inputValue);
            },*/
            onChange6: function(selectOptionValue) {
                console.log("onChange6=");
                console.log(selectOptionValue)
                var  filterOption = [];
                this.value8 = '';
                if(selectOptionValue != ''){
                    this.myForEach(this.optionsSrc, function(index, curOption){
                        if(curOption.value == selectOptionValue){
                            filterOption.push(curOption);
                        }
                    });
                    
                }else {
                    filterOption = this.optionsSrc;
                }
                    
               
                this.options = filterOption;
                this.value8 = this.options.length > 0 ? this.options[0].label : '';
                
            },
            onChange8: function(selectOptionValue) {
                console.log("onChange8=");
                console.log(selectOptionValue);
            },
            onVisibleChange: function(isVisible) {
                console.log("isVisible=");
                console.log(isVisible);
            },
            myForEach: function(arr, callBack) {
                for (var i = 0,
                len = arr.length; i < len; i++) {
                    callBack(i, arr[i]);
                }
            }

        },
       
    }
  
</script>