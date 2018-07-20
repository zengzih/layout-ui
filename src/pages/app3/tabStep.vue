<!--
 Created by zzh
 date:on 2017/5/16.
-->
<template>
  <div>
    <el-button @click="getTabStep">设置iframe地址</el-button>
    <sc-tab-step
      :iframe-model="iframeModel"
      :level-menu-option="LevelMenuOption"
      :height="height"
      :width="width"
      :el-tab-style="elTabStyle"
      :click-color="clickColor"
      :default-color="DefaultColor"
      @tab-side="tabSide"
      ref="tabStep"
    >
    <template>
      <div>
        
      </div>
    </template>
      <div slot="slot1">
        <el-button @click="setActive"></el-button>
      </div>
      <div slot="slot2" class="bbb">dat这是第二个插槽！！！</div>
      <div slot="slot3" class="bbb">dat这是第三个插槽！！！</div>
    </sc-tab-step>
  </div>
</template>

<style scoped>

</style>

<script>
  import scTabStep from '../../components/base/tabStep'

  export default {
    data () {
      return {
        LevelMenuOption: [
          {
            tabName: '今日事件', //tabName:标签名     requestUrl：要渲染页面的链接
            requestUrl: 'http://www.baidu.com',
            slotName: 'slot1',
            msgNum: 10,
            msgBgColor: 'blue',
            msgColor: 'white',
          },
          {
            tabName: '近期事件',
            requestUrl: 'http://www.taobao.com',
            slotName: 'slot2'
          },
          {
            tabName: '近期事件',
            requestUrl: 'http://www.taobao.com',
            slotName: 'slot3'
          }],
        clickColor: '#5B7BFA',
        DefaultColor: '#fff',
        iframeModel: false,
        height: '800px',
        width: '100%',
        elTabStyle: true,
        active: 'slot2'
      }
    },
    components: {
      scTabStep
    },
    methods: {
      getTabStep() {
        this.active = 'slot3'
      },
      setActive () {
        this.active = 'slot2'
      },
      tabSide(e, index, item) {
        console.log(arguments)
      }
    }
  }
</script>
