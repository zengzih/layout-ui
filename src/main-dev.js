 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/*
  导入 ElementUI node_modules 主题样式
  ------------------------------------
  参考链接：http://element.eleme.io

*/
// import 'element-ui/lib/theme-default/index.css'

/*
  ElementUI 主题样式源文件
  ----------------------------
*/
import './theme/index.css'  // 饿了么PostCSS源文件入口文件

/*
  第三方库引入：jquery及其插件、专用插件
  --------------------------------------
  统一放在 './lib/' 目录下，jquery及其插件统一放在在 './lib/jquery/' 下，其他独立库以厂商名或项目名创建文件夹
*/
// import './lib/jquery/jquery.js' // js例子: jquery及其插件统一放在jquery下
// import './lib/swiper/swiper.css' // css例子: swiper 是独立于jquery的轮播插件
import './lib/jquery/jquery-easyui-1.5.2/jquery.min.js' // easyui 依赖的jquery库文件
import './lib/jquery/jquery-easyui-1.5.2/jquery.easyui.min.js'  // easyui 脚本文件
import './lib/jquery/jquery-easyui-1.5.2/themes/default/easyui.css'  // easyui 默认主题样式文件

import './lib/style/index.css'  // 标准样式库


/* 引入字体图标文件 */
import './lib/iconfont/iconfont.css'

/*
   演示页面组件样式
   ------------------------
 */
import './styles/less/atomic.less'  // Page, Block 组件样式

/*
  尚城主题样式
  ------------------------
*/
import './styles/postcss/sc.base.css' // 全局规范：盒模型、字体、标准内边距、标准边距
import './styles/postcss/sc.layout.css' // 布局：五方图、表单混合列布局
import './styles/postcss/sc.com.css' // 饿了么组件样式定制
import './styles/postcss/sc.window.css' // 尚城窗体样式
import './styles/postcss/sc.responsive.css' // 响应式样式

/*
  开发用样式
  ----------
*/
import './styles/postcss/module/sc.mod.prospectus.css'

/*
  非标准模块样式
  ---------------
*/
import './styles/postcss/sc.dev.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

/*
  App3 页面路由
  -----------------
*/
import App from './App'
import router from './router/index4'

/*
  Vue插件注册
  -----------------
*/
import Vue from 'vue'
import Resource from 'vue-resource'
import ElementUI from 'element-ui'
import { Table } from 'bootstrap-vue/es/components'

Vue.use(Table)
Vue.use(Resource)
Vue.use(ElementUI)

/*
  Vue全局组件注册
  -----------------
*/
import Page from './components/atomic/page'
import Block from './components/atomic/block'
import Admin from './components/admin'
import Layout from './components/base/layout'
import ScFormLayout from './components/base/FormLayout'
import ScFormLayoutItem from './components/base/FormLayoutItem'
import ScFormLayoutRow from './components/base/FormLayoutRow'
import scAdvanceQuery from './components/base/advanceQuery'
import scFormGroup from './components/base/formGroup'
import scSideTab from './components/base/sideTab'
import scDataGrid from './components/base/dataGrid' // by 曾子涵
import EasyScrollbar from './components/easy-scrollbar'
Vue.component('page', Page)
Vue.component('block', Block)
Vue.component('sc-admin', Admin)
Vue.component('sc-layout', Layout)
Vue.component('sc-form-layout', ScFormLayout)
Vue.component('sc-form-layout-col', ScFormLayoutItem)
Vue.component('sc-form-layout-row', ScFormLayoutRow)
Vue.component('sc-advance-query', scAdvanceQuery)
Vue.component('sc-form-group', scFormGroup)
Vue.component('sc-side-tab', scSideTab)
Vue.component('sc-data-grid', scDataGrid)
Vue.component('easy-scrollbar', EasyScrollbar)

/* eslint-disable no-new */
Vue.config.productionTip = false

/*
  Vue 实例化应用
  -----------------
*/
var VueApp = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

/*
  浏览器导出
  -----------------
  Vue ： Vue构造函数
  VueApp : 默认应用实例

*/
window.Vue = Vue
window.VueApp = VueApp
