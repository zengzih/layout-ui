<template>
  <div :style="getContentStyle()" class="sc-tab-step">
    <div class="tab_nav">
      <div class="nav_menu" style="overflow: hidden;" :style="getMenuStyle()">
        <div class="step_component">
          <div v-show="!isdefaultStyle && !elTabStyle" class="step_item" :class="getClickActice(index)"
               v-for="(item,index) in LevelMenuOptions" @click="getSel(index,item, $event)">
            <div class="first_angle angle"></div>
            <div class="step_text">
              <span class="count">{{index + 1}}</span>
              <span class="tab_name">{{item.tabName}}</span>
              <span class='msg_num' v-if='item.msgNum' :style="`background:${item.msgBgColor};color:${item.msgColor}`">{{item.msgNum}}</span>
            </div>
            <div class="last_angle angle"></div>
          </div>


          <div v-show="isdefaultStyle" class="default step_item" :class="getClickActice(index)"
               v-for="(item,index) in LevelMenuOptions" @click="getSel(index,item, $event)">
            <span class="tab_name">{{item.tabName}}</span>
          </div>


          <div v-show="elTabStyle" class="el-tab-box" ref="elTabBox" :class="elTabBoxClass">
             <span class="step_arrow el-icon-arrow-left" v-show="elTabBoxClass" @click="stepArrow('left')"></span>
            <div class="step_item_content">
              <div class="step_item_list"  ref="stepContent">
                <span class="el-tabs__active-bar" :style="elTabCss"></span>
                <div class="el_tab step_item" v-run :class="getClickActice(index)" v-for="(item,index) in LevelMenuOptions" @click="getSel(index,item,$event)"
                  :ref="'stepItem'+ index">
                  {{item.tabName}}
                </div>
              </div>
            </div>
            <span class="step_arrow el-icon-arrow-right" v-show="elTabBoxClass" @click="stepArrow('right')"></span>
          </div>
          <slot v-if="$scopedSlots.default"></slot>
        </div>
      </div>
      <div class="tab_content" v-if="isIframeModel">
        <iframe v-for="(ifr, index) in LevelMenuOptions" @load='iframeLoad($event)' ref="iframe"
                style="height: 100% !important;width: 100%" v-show="getIfShow(index)"
                :src="getIframeUrl(index, ifr.requestUrl)" :id="addStyle(index)" frameborder="0"
                v-on:click="computedHeight($event)" :scrolling="changeIframeScrolling">
        </iframe>
      </div>
      <div class="tab_content" v-else><!--:class="getNavContentClass()"-->
        <div v-for="(slots,index) in LevelMenuOptions" v-show="getIfShow(index)"
             :id="addStyle(index)">
          <slot :name="slots.slotName"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'tabStep',
    props: {
      minWidth: {
        type: String,
        default () {
          return ''
        }
      },
      userData: {
        type: Object,
        default: function () {
          return {}
        }
      },
      elTabStyle: {
        type: Boolean,
        default () {
          return false
        }
      },
      isdefaultStyle: {
        type: Boolean,
        default () {
          return false
        }
      },
      iframeModel: {
        type: Boolean,
        default () {
          return false
        }
      },
      levelMenuOption: {
        type: Array,
        default () {
          return []
        }
      },
      themes: {
        type: String,
        default () {
          return ''
        }
      },
      position: {
        type: String,
        default () {
          return ''
        }
      },
      clickColor: {
        type: String,
        default () {
          return ''
        }
      },
      bgColor: {
        type: String,
        default () {
          return ''
        }
      },
      styleLine: {
        type: Boolean,
        default () {
          return false
        }
      },
      changeNavHeightNameMinLength: {
        type: String,
        default () {
          return ''
        }
      },
      height: {
        type: String,
        default () {
          return ''
        }
      },
      width: {
        type: String,
        default () {
          return ''
        }
      },
      value: {
        type: String
      },
      elTabBoxClass: String

    },

    watch: {
      width: {
        handler (val) {
          this.widths = val
        }
      },
      minWidth: {
        handler (val) {
          this.minWidths = val
        },
        deep: true
      },
      height: {
        handler (val) {
          this.heights = val
        }
      },
      levelMenuOption: {
        handler (val) {
          this.LevelMenuOptions = val
        },
        deep: true
      },
      value (val) {
        this.setTabsActive(val)
      }
    },
    directives: {
      run: {
        inserted (el, build, vnode) {
          if (vnode.context.runIndex == 0) {
            vnode.context.elTabCss = ';width:' + el.offsetWidth + 'px;left:0;'
            vnode.context.runIndex++
          }
        }
      }
    },
    data: function () {
      return {
        runIndex: 0,
        fadeIndex: 0,
        itemData: [],
        LevelMenuOptions: this.levelMenuOption,
        isIframeModel: this.iframeModel,
        navPosition: this.themes,
        heights: this.height,
        widths: this.width,
        minWidths: this.minWidth,
        cssStyle: {
          width: this.width,
          height: this.height
        },
        elTabClass: '',
        elTabCss: ''
      }
    },
    created () {

    },
    mounted () {
      if (this.value) {
        this.$nextTick(()=> {
          this.setTabsActive(this.value)
        })
      }
    },
    computed: {
      changeIframeScrolling: function () {
        if (this.navPosition == 'center') {
          return 'auto'
        } else {
          return 'auto'
        }
      }
    },
    methods: {
      stepArrow(direction) {
        var elTabBox = this.$refs.elTabBox;
        var stepContent = this.$refs.stepContent;
        if (direction === 'right' ) {
          var parentWidth = stepContent.parentNode.offsetWidth;
          if (stepContent.offsetWidth - Math.abs(stepContent.offsetLeft) > parentWidth) {
            stepContent.style.left = stepContent.offsetLeft - 100 + 'px';
          }
        } else {
          if (stepContent.offsetLeft < 0) {
            var offLeft = '';
            if (stepContent.offsetLeft + 100 > 0) {
              offLeft = 0;
            } else {
              offLeft = stepContent.offsetLeft + 100
            }
            stepContent.style.left = offLeft + 'px';
          }
        }
      },
      iframeLoad (e) {
        this.$emit('iframeload', e, this)
      },
      getMenuStyle () {
        if (this.elTabStyle) {
          return ';border-bottom:1px solid #d1dbe5'
        }
      },
      getContentStyle () {
        return ';width:' + this.widths + 'px;height:' + this.heights + 'px;min-width:' + this.minWidths + 'px'
      },
      getClickActice (index) {
        if (index === this.fadeIndex) {
          return 'active'
        }
      },
      getIfShow (index) {
        if (index === this.fadeIndex) {
          return true
        } else {
          return false
        }
      },
      getIframeUrl: function (index, url) {
        if (index === 0) {
          return url
        } else {
          return ''
        }
      },
      getSel: function (index, item, e) {
        for (var i in this.LevelMenuOptions) {
          i === index ? this.LevelMenuOptions[i].active = true : this.LevelMenuOptions[i].active = false
        }
        if (e) {
          var widths = e.target.offsetWidth
          var lefts = e.target.offsetLeft
          this.elTabCss = ';width:' + widths + 'px;transform:translateX(' + lefts + 'px)'
        }
        this.fadeIndex = index
        if (this.isIframeModel) {
          var iframe = this.$el.getElementsByTagName('iframe')
          if (iframe[index].getAttribute('src') === '') {
            iframe[index].src = item.requestUrl
            this.$emit('tab-side', iframe, index, iframe[index])
          }
        } else {
          this.$emit('tab-side', e.target, index, item)
        }
        this.$emit('input', item.slotName)
      },
      addStyle () {

      },
      setTabsActive (val) { // 设置选中tab页
        const levelMenuOption = this.LevelMenuOptions
        for (var i = 0; i < levelMenuOption.length; i++) {
          if (levelMenuOption[i].slotName === val) {
            this.fadeIndex = i
            break
          }
        }
        try {
          let stepItem = this.$refs['stepItem' + this.fadeIndex][0]
          if (this.isIframeModel) {
            var iframe = this.$el.getElementsByTagName('iframe')
            if (iframe[this.fadeIndex].getAttribute('src') === '') {
              iframe[this.fadeIndex].src = levelMenuOption[this.fadeIndex].requestUrl
              this.$emit('tab-side', iframe, this.fadeIndex, iframe[this.fadeIndex])
            }
          }
          this.$emit('input', levelMenuOption[this.fadeIndex].slotName)
          this.elTabCss = ';width:' + stepItem.offsetWidth + 'px;transform:translateX(' + stepItem.offsetLeft + 'px)'  
        } catch(e) {
          console.warn(e);
        }
      }
    },
    updated: function () { // elTabBoxClass
      var elTabBox = this.$refs.elTabBox;
      var stepContent = this.$refs.stepContent;
      if (stepContent.offsetWidth > elTabBox.offsetWidth) {
        this.elTabBoxClass = 'is-overflow';
      }
    }
  }
</script>
