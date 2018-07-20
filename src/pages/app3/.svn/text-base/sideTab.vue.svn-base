<template>
	<sc-side-tab
    :iframe-model="iframeModel"
    :level-menu-option="LevelMenuOption"
    :themes="themes"
    :height="height"
    :width="width"
    :position="position"
    :active-bg-color="activeBgColor"
    :bg-color="bgColor"
  >
		<div slot="slot1">这是第一个插槽啊！！！！</div>
		<div slot="slot2" class="bbb">dat这是第二个插槽！！！</div>
	</sc-side-tab>
</template>

<script>
	export default {
		data (){
			return {
					LevelMenuOption:[
					{
						tabName : "今日事件", //tabName:标签名     requestUrl：要渲染页面的链接
						requestUrl : 'http://www.baidu.com',
						slotName:'slot1'
					},
					{
						tabName : "近期事件打发第三方的",
						requestUrl : 'http://www.taobao.com',
						slotName:'slot2'
					}],
          themes : "left",
          position : "center",
          activeBgColor:'#5B7BFA',
          bgColor:'#fff',
          iframeModel:true,
          height:"500",
          width:"100%"
			}
		},
    methods:{
    },
	}
</script>
