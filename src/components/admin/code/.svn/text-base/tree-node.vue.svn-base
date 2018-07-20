<template>
  <div>
    <el-collapse-transition>
      <ul class="menu_content" v-show="(data.parent.level && data.parent.expanded) || !data.parent.level">
        <li class="menu_item" :key="data.id" @click="handlerExpand(data.parent)">
          <div class="menu_group" :style="{ 'padding-left': data.level * 14 + 'px' }">
            <span class="menu_icon"><i class="iconfont sc-icon-cunkuanguanli"></i></span>
            <div class="menu_label">{{ data.data.label }}</div>
          </div>
          <el-collapse-transition>
            <div v-if="data.childNodes">
               <tree-node v-for="childs in data.childNodes" :data="childs"></tree-node>
            </div>
          </el-collapse-transition>
        </li>
      </ul>
    </el-collapse-transition>
    <!--<el-collapse-transition>
      <ul class="menu_content">
        <li v-for="item in root.childNodes" class="menu_item" :key="item.data.id" @click="handlerExpand(item)">
          <div class="menu_group" :style="{ 'padding-left': item.level * 14 + 'px' }">
            <span class="menu_icon"><i class="iconfont sc-icon-cunkuanguanli"></i></span>
            <div class="menu_label">{{ item.data.label }}</div>
          </div>
          <el-collapse-transition>
            <ul v-if="item.childNodes.length" v-show="item.expanded">
              <li v-for="items in item.childNodes" class="menu_item" :key="items.data.id">
                <div class="menu_group" :style="{ 'padding-left': items.level * 14 + 'px' }">
                  <span class="menu_icon"><i class="iconfont sc-icon-cunkuanguanli"></i></span>
                  <div class="menu_label">{{ items.data.label }}</div>
                </div>
              </li>
            </ul>
          </el-collapse-transition>
        </li>
      </ul>
    </el-collapse-transition>-->
  </div>
</template>

<script>
  import { Node } from './node'
  export default {
    name: 'TreeNode',
    props: {
      data: Object
    },
    data () {
      return {
        root: []
      }
    },
    watch: {
      data: {
        handler (val) {
          this.root = new Node({
            data: val,
            store: {}
          })
        },
        deep: true
      }
    },
    computed: {},
    created () {
    },
    mounted () {
    },
    methods: {
      handlerExpand(parent) {
        this.$set(parent, 'expanded', !parent.expanded)
      },
      getStyle(child) {
      }
    }
  };
</script>

<style>

</style>
