<template>
	<div class="sc-formgroup">
		<div class="sc-formgroup__title" :class="setClass()">{{title}}：</div>
		<div class="sc-formgroup__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'sc-form-group',
    props: {
        title:{
            type:String,
            default:'表单分组'
        },
        headIcon:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        setClass:function(){
            if(this.headIcon){
                return 'sign'
            }else{
                return '';
            }
        }
    }
    };
</script>
