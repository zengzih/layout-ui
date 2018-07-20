<template>
	<div class="sc-theme" :style="styleObj">
		<div :id="layoutId" :class="classObj" data-options="fit:true">
			<div v-if="showNorth" :data-options="northOption" :class="northClass" :style="{height: northHeight+'px', backgroundColor: northBgcolor, color:northColor}">
				<slot name="north"></slot>
			</div>
			<div v-if="showSouth" :data-options="southOption" :class="southClass" :style="{height: southHeight+'px', backgroundColor: southBgcolor, color:southColor}">
				<slot name="south"></slot>
			</div>
			<div v-if="showEast" :data-options="eastOption" :class="eastClass" :style="{width: eastWidth+'px', backgroundColor: eastBgcolor, color:eastColor}">
				<slot name="east"></slot>
			</div>
			<div v-if="showWest" :data-options="westOption" :class="westClass" :style="{width: westWidth+'px', backgroundColor: westBgcolor, color:westColor}">
				<slot name="west"></slot>
			</div>
			
		
			<div :data-options="mainOption" :style="{backgroundColor: centerBgcolor, color:color}">    			
    			<div v-if="showEast" class="sc-expander is-east">
    				<div :class="eastShowIconLayOut"  @click="toggleEast()"><span :class="eastShowIcon"></span></div>
    			</div>
    			
    			<div v-if="showWest" class="sc-expander is-west" >
			        <div :class="westShowIconLayOut" @click="toggleWest()"><span :class="westShowIcon"></span></div>
			    </div>

				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style>
.left_stop_icon{
    position: absolute;
    top: 50%;
	transform: translateY(-50%);
	width:24px;
    z-index: 1;
    font-size: 30px;
    border-radius: 50% 50%;
    text-align: center;
    left: -1px;
	cursor: pointer;
	display: none;
}

.right_stop_icon{
    position: absolute;
    top: 50%;
	transform: translateY(-50%);
	width:24px;
    z-index: 1;
    font-size: 30px;
    right:0px;
    left: inherit;
	cursor: pointer;
	display: none;
}

.is-west-collapsible .left_stop_icon {
	display: block;
}
.is-east-collapsible .right_stop_icon{
	display: block;
}

.shrink_left_open{
    background: url('../icons/shrink_left_open.png');
    display: block;
    height: 104px;
    background-Size: cover;
    width: 24px;
}

.shrink_left_close {
    background: url('../icons/shrink_left_stop.png');
    display: block;
    height: 104px;
    background-Size: cover;
    width: 24px;
}

.shrink_right_open{
    background: url('../icons/shrink_right_open.png');
    display: block;
    height: 104px;
    background-Size: cover;
    width: 24px;
}

.shrink_right_close {
    background: url('../icons/shrink_right_stop.png');
    display: block;
    height: 104px;
    background-Size: cover;
    width: 24px;
}
</style>

<script>
  export default {
    name: 'ScLayout5',

	data () {
		return {
		}
	},
	
    props: {
		gap: {
			type: String,
			default: 'normal'
		},
		mainTitle: {
			type: String,
			default: '主显示区'
		},
		color: {
			type: String,
			default: '#333'
		},
		bgcolor: {
			type: String,
			default: 'transparent'
		},
		fullScreen: {
			type: Boolean,
			default: false
		},
		withTitle: {
			type: Boolean,
			default: false
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '100%'
		},
		north: {
			type: Object,
			default: null
		},
		south: {
			type: Object,
			default: null
		},
		east: {
			type: Object,
			default: null
		},
		west: {
			type: Object,
			default: null
		},
		center: {
			type: Object,
			default: null
		}
    },
	
    data() {
      return {
		layoutId:'',
		layoutDom:null,
		toggleStat: {
			east: false,
			west: false
		}
      }
    },

    watch: {
		layoutId: function (val, oldVal) {
			
		}
    },

    computed: {
		northClass: function () {
			return {
				'padding': this.north && this.north.padding,
				'left': this.north && this.north.align && this.north.align === 'left',
				'center': this.north && this.north.align && this.north.align === 'center',
				'right': this.north && this.north.align && this.north.align === 'right'
			}
		},
		southClass: function () {
			return {
				'padding': this.south && this.south.padding,
				'left': this.south && this.south.align && this.south.align === 'left',
				'center': this.south && this.south.align && this.south.align === 'center',
				'right': this.south && this.south.align && this.south.align === 'right'
			}
		},
		eastClass: function () {
			return {
				'padding': this.east && this.east.padding,
				'left': this.east && this.east.align && this.east.align === 'left',
				'center': this.east && this.east.align && this.east.align === 'center',
				'right': this.east && this.east.align && this.east.align === 'right'
			}
		},
		westClass: function () {
			return {
				'padding': this.west && this.west.padding ? true : false,
				'left': this.west && this.west.align && this.west.align === 'left',
				'center': this.west && this.west.align && this.west.align === 'center',
				'right': this.west && this.west.align && this.west.align === 'right'
			}
		},
		classObj: function () {
			return {
				'easyui-layout' : true,
				'sc-layout--5f' : true,
				'is-noheader' : !this.withTitle,
				'is-noexpander' : true,
				'is-gap-line' : this.gap === 'line',
				'is-gap-normal' : this.gap === 'normal',
				'is-gap-normal' : this.gap === 'small',
				'is-gap-md' : this.gap === 'middle',
				'is-gap-lg' : this.gap === 'large',
				'is-gap-none' : this.gap === 'none',
				'is-east-collapsible' : this.east && this.east.collapsible,
				'is-west-collapsible' : this.west && this.west.collapsible
			}
		},
		styleObj: function() {
			if (this.fullScreen) {
				return {
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}
			} else {
				return {
					width: this.width,
					height: this.height,
				}
			}
		},
		mainOption: function() {
			return "region:'center',title:'" + this.mainTitle + "',border:false";
		},
		showNorth: function () {
			return this.north ? true : false;
		},
		showSouth: function () {
			return this.south ? true : false;
		},
		showEast: function () {
			return this.east ? true : false;
		},
		showWest: function () {
			return this.west ? true : false;
		},
		northOption: function () {
			if (!this.showNorth) { return false; }
			
			var title = this.north.title || '北区',
				split = false,
				border = false,
				collapsible = false;
			
			return "region:'north',title:'" + title + "',split:" + split + ",border:" + border + ",collapsible:"+collapsible;
		},
		southOption: function () {
			if (!this.showSouth) { return false; }
		
			var title = this.south.title || '南区',
				split = false,
				border = false,
				collapsible = false;
		
			return "region:'south',title:'" + title + "',split:" + split + ",border:" + border + ",collapsible:"+collapsible;
		},
		eastOption: function () {
			if (!this.showEast) { return false; }
		
			var title = this.east.title || '东区',
				split = this.east && this.east.collapsible,
				border = false,
				collapsible = false;
		
			return "region:'east',title:'" + title + "',split:" + split + ",border:" + border + ",collapsible:"+collapsible;
		},
		westOption: function () {
			if (!this.showWest) { return false; }
		
			var title = this.west.title || '西区',
				split = this.west && this.west.collapsible,
				border = false,
				collapsible = false;
		
			return "region:'west',title:'" + title + "',split:" + split + ",border:" + border + ",collapsible:"+collapsible;
		},
		northHeight: function() {
			return this.north ? (this.north.height ? this.north.height : 80) : 80;
		},
		southHeight: function() {
			return this.south ? (this.south.height ? this.south.height : 80) : 80;
		},
		eastWidth: function() {
			return this.east ? (this.east.width ? this.east.width : 80) : 80;
		},
		westWidth: function() {
			return this.west ? (this.west.width ? this.west.width : 80) : 80;
		},
 		eastShowIconLayOut: function() {
 			return this.east ?  "right_stop_icon" : '';
 		},
 		westShowIconLayOut: function() {
 			return this.west ?  "left_stop_icon" : '';
 		},
 		eastShowIcon: function() {
 			return this.east ? (this.toggleStat.east ? "shrink_right_close" : "shrink_right_open") : '';
 		},
 		westShowIcon: function() {
 			return this.west ? (this.toggleStat.west ? "shrink_left_close" : "shrink_left_open") : '';
 		},
 		northBgcolor: function () {
			return this.north ? (this.north.bgcolor ? this.north.bgcolor : this.bgcolor) : this.bgcolor;
		},
 		southBgcolor: function () {
			return this.south ? (this.south.bgcolor ? this.south.bgcolor : this.bgcolor) : this.bgcolor;
		},
 		eastBgcolor: function () {
			return this.east ? (this.east.bgcolor ? this.east.bgcolor : this.bgcolor) : this.bgcolor;
		},
 		westBgcolor: function () {
			return this.west ? (this.west.bgcolor ? this.west.bgcolor : this.bgcolor) : this.bgcolor;
		},
		centerBgcolor: function () {
			return this.bgcolor || '#fff'
		},
		northColor: function () {
			return this.north ? (this.north.color ? this.north.color : this.color) : this.color;
		},
 		southColor: function () {
			return this.south ? (this.south.color ? this.south.color : this.color) : this.color;
		},
 		eastColor: function () {
			return this.east ? (this.east.color ? this.east.color : this.color) : this.color;
		},
 		westColor: function () {
			return this.west ? (this.west.color ? this.west.color : this.color) : this.color;
		},
    },

    methods: {
		toggleEast () {
			if (this.toggleStat.east) {
				this.layoutDom.layout('expand', 'east')
			} else {
				this.layoutDom.layout('collapse', 'east')
			}
			this.toggleStat.east = !this.toggleStat.east;
		},
		toggleWest () {
			if (this.toggleStat.west) {
				this.layoutDom.layout('expand', 'west')
			} else {
				this.layoutDom.layout('collapse', 'west')
			}
			this.toggleStat.west = !this.toggleStat.west;
		},
		collapse (region) {
			this.layoutDom.layout('collapse', region);
			this.layoutDom.layout('pannel', region).hide();
			// this.resize();
		},
		expand (region) {
			this.layoutDom.layout('expand', region);
			// this.resize();
		},
		resize () {
			this.layoutDom.layout('resize', {width:'100%', height:'100%'});
		}
    },

	beforeMount() {
		this.layoutId = 'scLayout5_' + Math.floor(Math.random()*1000)
	},
	
    mounted() {
		this.layoutDom = $('#'+this.layoutId);
		this.layoutDom.layout();
    }
  }
</script>
