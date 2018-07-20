<template>
	<div class="sc-theme padding">
	  <el-table
	  	class="execel_table"
	    :data="tableData"
	    border
	    style="width: 100%">
	    <el-table-column
		    label="日期"
		    width="180">
		    <template scope="scope">
		    	<div v-text="scope.row.date" class="show_msg"></div>
			    <el-input 
			    	class="execel_input execel_input_hidden"
			    	v-model='scope.row.date' 
			    	@click.native='execelClick($event,scope)'
			    	@dblclick.native.prevent='dblclick($event,scope)'
			    	@keydown.9.native.prevent='keydown($event,scope)' 
			    	@keydown.13.native.prevent='keydown($event,scope)' 
			    	@keydown.37.native='keydown($event,scope)'  
			    	@keydown.38.native.prevent='keydown($event,scope)'  
			    	@keydown.39.native='keydown($event,scope)' 
			    	@keydown.40.native.prevent='keydown($event,scope)'>
			    </el-input>
			    <el-input 
			    	class="execel_input execel_input_e"
			    	v-model='scope.row.date' 
			    	@click.native='execelClick($event,scope)'
			    	@dblclick.native.prevent='dblclick($event,scope)'
			    	@keydown.9.native.prevent='keydown($event,scope)' 
			    	@keydown.13.native.prevent='keydown($event,scope)' 
			    	@keydown.37.native='keydown($event,scope)'  
			    	@keydown.38.native.prevent='keydown($event,scope)'  
			    	@keydown.39.native='keydown($event,scope)' 
			    	@keydown.40.native.prevent='keydown($event,scope)'>
			    </el-input>
		    </template>
	    </el-table-column>
	    <el-table-column
		    label="姓名"
		    width="180">
		    <template scope="scope">
		    	<div v-text="scope.row.name" class="show_msg"></div>
			    <el-input 
			    	class="execel_input execel_input_hidden"
			    	v-model='scope.row.name' 
			    	@click.native='execelClick($event,scope)'
			    	@dblclick.native.prevent='dblclick($event,scope)'
			    	@keydown.9.native.prevent='keydown($event,scope)' 
			    	@keydown.13.native.prevent='keydown($event,scope)' 
			    	@keydown.37.native='keydown($event,scope)'  
			    	@keydown.38.native.prevent='keydown($event,scope)'  
			    	@keydown.39.native='keydown($event,scope)' 
			    	@keydown.40.native.prevent='keydown($event,scope)'>
			    </el-input>
			    <el-input 
			    	class="execel_input execel_input_e"
			    	v-model='scope.row.name' 
			    	@click.native='execelClick($event,scope)'
			    	@dblclick.native.prevent='dblclick($event,scope)'
			    	@keydown.9.native.prevent='keydown($event,scope)' 
			    	@keydown.13.native.prevent='keydown($event,scope)' 
			    	@keydown.37.native='keydown($event,scope)'  
			    	@keydown.38.native.prevent='keydown($event,scope)'  
			    	@keydown.39.native='keydown($event,scope)' 
			    	@keydown.40.native.prevent='keydown($event,scope)'>
			    </el-input>
		    </template>
	    </el-table-column>
	    <el-table-column label="地址">
		    <template scope="scope">
		    	<div v-text="scope.row.address" class="show_msg"></div>
			    <el-input 
			    	class="execel_input execel_input_hidden"
			    	v-model='scope.row.address' 
			    	@click.native='execelClick($event,scope)'
			    	@dblclick.native.prevent='dblclick($event,scope)'
			    	@keydown.9.native.prevent='keydown($event,scope)' 
			    	@keydown.13.native.prevent='keydown($event,scope)' 
			    	@keydown.37.native='keydown($event,scope)'  
			    	@keydown.38.native.prevent='keydown($event,scope)'  
			    	@keydown.39.native='keydown($event,scope)' 
			    	@keydown.40.native.prevent='keydown($event,scope)'>
			    </el-input>
			    <el-input 
			    	class="execel_input execel_input_e"
			    	v-model='scope.row.address' 
			    	@click.native='execelClick($event,scope)'
			    	@dblclick.native.prevent='dblclick($event,scope)'
			    	@keydown.9.native.prevent='keydown($event,scope)' 
			    	@keydown.13.native.prevent='keydown($event,scope)' 
			    	@keydown.37.native='keydown($event,scope)'  
			    	@keydown.38.native.prevent='keydown($event,scope)'  
			    	@keydown.39.native='keydown($event,scope)' 
			    	@keydown.40.native.prevent='keydown($event,scope)'>
			    </el-input>
			</template>
	    </el-table-column>
	  </el-table>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
        	date: '',
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
        }],
        edit:[]
      }
    },
    methods: {
    	//监听input的事件 
    	inputTextChange:function(){
    		$('.execel_table .el-table__body-wrapper input').bind('input', function(e) { 
    			if($(e.target).parents('.execel_input').hasClass('execel_input_hidden')){
    				$(e.target).parents('.execel_input').siblings('.execel_input_e').addClass('execel_input_show');
      			$(e.target).parents('.execel_input').siblings('.show_msg').addClass('hidden_msg');
    				$(e.target).parents('.execel_input').siblings('.execel_input_e').find('input').focus()
    			}
    			if($(e.target).val()){
    		 		$('.execel_input').find('input').attr('selected',false);
    			}else{
    		 		$(e.target).parents('.execel_input').find('input').attr('selected',true);
    			}
    		});
    		$('.execel_table .el-table__body-wrapper input').focus(function(e) {
    		 	$(e.target).parents('.cell').addClass('cell-border');
    		});
    		$('.execel_table .el-table__body-wrapper input').select(function(e) { 
    		 	$(e.target)[0].selected=true;
    		});
    		$('.execel_table .el-table__body-wrapper input').blur(function(e) { 
    			if(!$(e.target).parents('.execel_input').hasClass('execel_input_hidden')){
    				$(e.target).parents('.execel_input_e').removeClass('execel_input_show')
      				$(e.target).parents('.execel_input').siblings('.show_msg').removeClass('hidden_msg');
    			}
    		 	$(e.target).parents('.cell').removeClass('cell-border');
    		 	$(e.target)[0].selected=false;
    		});
    	},
    	//键盘事件
      	keydown:function(e,sc){
      		var trIndex=sc.$index;
      		var minRowTdNum=$('.execel_table .el-table__body-wrapper input').eq(0).parents('td').attr('class').split('_');
      			minRowTdNum=minRowTdNum[minRowTdNum.length-1];
      		var celClass=$(e.target).parents('td').attr('class').split(' ');
          for(var i=0; i<celClass.length; i++){
            if(/el-table_1_column_/g.test(celClass[i])){
              celClass=celClass[i].split('_');
              break;
            }
          }
      		var rowTdNum=Number(minRowTdNum) - 1 + $('.execel_table .el-table__body-wrapper tr').eq(sc.$index).find('td').length;
      		var rowNum=$('.execel_table .el-table__body-wrapper tr').length;

      		var next=function(){
	      		if(celClass[celClass.length-1]==rowTdNum){
	      			celClass[celClass.length-1]=minRowTdNum;
	      			trIndex++;
	      			if(trIndex>rowNum-1){
	      				return false;
	      			}else{
	      				return true;
	      			}
	      		}else{
	      			celClass[celClass.length-1]++;
	      			return true;
	      		}
      		}
      		
      		if(e.keyCode==9){
      			var isnext=next();
      			if(!isnext){
      				return;
      			}
      		}else if(e.keyCode==13){
            if(trIndex==$('.execel_table .el-table__body-wrapper tr').length-1){
              if(celClass[celClass.length-1]!=rowTdNum){
                trIndex=0;
                celClass[celClass.length-1]++;
              }
            }else{
             trIndex++;
            }
      		}else if(e.keyCode==38){
      			trIndex=trIndex==0?trIndex:--trIndex;
      		}else if(e.keyCode==40){
      			trIndex=trIndex==$('.execel_table .el-table__body-wrapper tr').length-1?trIndex:++trIndex;
      		}else if(e.keyCode==37){
      			if(!$(e.target).attr('selected')){
      				return;
      			}else{
      				window.event? e.returnValue = false : e.preventDefault();
		      		if(celClass[celClass.length-1]==minRowTdNum){
		      			return;
		      		}else{
		      			celClass[celClass.length-1]--;
		      		}
      			}
      		}else if(e.keyCode==39){
      			if(!$(e.target).attr('selected')){
      				return;
      			}else{
      				window.event? e.returnValue = false : e.preventDefault();
              if(celClass[celClass.length-1]==rowTdNum){
                return;
              }
      				var isnext=next();
	      			if(!isnext){
	      				return;
	      			}
      			}
      		}

      		celClass=celClass.join('_');
      		$('.execel_table .el-table__body-wrapper tr').eq(trIndex).find('.'+celClass).find('.execel_input_hidden').find('input').focus();
      		$('.execel_table .el-table__body-wrapper tr').eq(trIndex).find('.'+celClass).find('.execel_input_hidden').find('input').select();
      		$('.execel_table .el-table__body-wrapper tr').find('input').attr('selected',false);
      		$('.execel_table .el-table__body-wrapper tr').find('.cell-border').removeClass('cell-border');
      		$('.execel_table .el-table__body-wrapper tr').eq(trIndex).find('.'+celClass).find('input').attr('selected',true);
      		$('.execel_table .el-table__body-wrapper tr').eq(trIndex).find('.'+celClass).find('.cell').addClass('cell-border');
      	},
      	//单击事件
      	execelClick:function(e,sc){
      		$(e.target).focus();
      		$('.execel_table .el-table__body-wrapper tr').find('.cell-border').removeClass('cell-border');
      		$(e.target).parents('.cell').addClass('cell-border');
      		if(!$(e.target).attr('selected')){
      			$('.execel_table .el-table__body-wrapper tr').find('input').attr('selected',false);
      			$(e.target).select();
      			$(e.target).parents('.execel_input').find('input').attr('selected',true);
      		}else{
      			$(e.target).parents('.execel_input').find('input').attr('selected',false);
      		}
      	},
      	//双击事件
      	dblclick:function(e,sc){
      		if(!$(e.target).parents('.execel_input').hasClass('execel_input_e')){
      			$(e.target).parents('.cell').find('input').attr('selected',false);
      			$(e.target).parents('.execel_input').siblings('.show_msg').addClass('hidden_msg');
      			$(e.target).parents('.execel_input').siblings('.execel_input_e').addClass('execel_input_show');
      			$(e.target).parents('.execel_input').siblings('.execel_input_e').find('input').focus();
      		}
      	},
      	
    },
    mounted:function(){
    	var vm=this;
    	setTimeout(function(){
    		vm.inputTextChange();
    	});
    }
  }
</script>
<style scoped leng="less">
	.sc-theme{
		background:#fff;
	}
</style>