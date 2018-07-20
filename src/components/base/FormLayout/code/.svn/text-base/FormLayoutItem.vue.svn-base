<template>
	<td
		:colspan="cols"
		:class="classObj"
		:style="styleObj">
		<slot></slot>
	</td>
</template>

<script>
  export default {
    name: 'ScFormLayout',

    props: {
		offsetLeft : Boolean,
		align: {
			type: String,
			default: 'left'
		},
		cols: {
			type: String,
			default: '1'
		},
		width: {
			type: String,
			default: 'auto'
		}
    },

    watch: {
    },

    computed: {
		classObj: function () {
			return {
				'sc-layout-table__col': true,
				'left': this.align === 'left',
				'right': this.align === 'right',
				'center': this.align === 'center',
				'is-offset-left': this.offsetLeft
			}
		},
		styleObj: function() {
			if(this.width=='standard'){
				return {
					width:'23%'//calc 在表格中不可用，如果用计算的方式，在浏览器 resize 时不会浏览器的 size 变化而变化。
				};
			}
			return {
				width: this.width === 'small' ? '80px' : (this.width === 'normal' ? '160px': (this.width === 'middle' ? '480px' : (this.width === 'large' ? '640px' : (this.width=='standard2' ? '25%' : this.width))) )
			}
		}
    },

    methods: {
    },

	beforeMount() {
	},
	
    mounted() {
    }
  }
</script>
