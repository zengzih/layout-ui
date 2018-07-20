<template>
	<table
		class="sc-layout-table"
		:class="classObj"
		:style="styleObj"
		cellspacing="0"
        cellpadding="0"
        border="0"
		>
		<slot></slot>
	</table>
</template>

<script>
  export default {
    name: 'ScFormLayout',

    props: {
		width: {
			type: String,
			default: '100%'
		},
		labelWidth: {
			type: String,
			default: 'auto'
		}
    },

    watch: {
    },

    computed: {
		classObj: function () {
			return `sc-layout-label--${ this.labelWidth }`;
		},
		styleObj: function() {
			return {
				width: this.width === 'small' ? '30%' : (this.width === 'normal' ? '50%': (this.width === 'middle' ? '70%' : (this.width === 'large' ? '90%' : this.width)) )
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
