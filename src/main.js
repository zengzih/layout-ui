import './lib/jquery/jquery-easyui-1.5.2/themes/default/easyui.css'  // easyui 默认主题样式文件

import './styles/postcss/sc.base.css' // 全局规范：盒模型、字体、标准内边距、标准边距
import './styles/postcss/sc.layout.css' // 布局：五方图、表单混合列布局
import './styles/postcss/sc.com.css' // 饿了么组件样式定制
import './styles/postcss/sc.window.css' // 尚城窗体样式


// import './styles/postcss/sc.responsive.css' // 响应式样式

// import Admin from './components/admin'
import VueZtree from './components/ztree'

// import Layout from './components/base/layout'
// import ScFormLayout from './components/base/FormLayout'
// import ScFormLayoutItem from './components/base/FormLayoutItem'
// import ScFormLayoutRow from './components/base/FormLayoutRow'
// import scFormGroup from './components/base/formGroup'
// import scDataGrid from './components/base/dataGrid'
// import scSideTab from './components/base/sideTab'
// import scTabStep from './components/base/tabStep'
// import easyScrollbar from './components/easy-scrollbar'

if (typeof window !== 'undefined' && window.Vue) {
  var Vue = window.Vue

  // Vue.component('sc-admin', Admin)
  Vue.component('vue-ztree', VueZtree)
  // Vue.component('sc-layout', Layout)
  // Vue.component('sc-form-layout', ScFormLayout)
  // Vue.component('sc-form-layout-col', ScFormLayoutItem)
  // Vue.component('sc-form-layout-row', ScFormLayoutRow)
  // Vue.component('sc-form-group', scFormGroup)
  // Vue.component('sc-data-grid', scDataGrid)
  // Vue.component('sc-side-tab', scSideTab)
  // Vue.component('sc-tab-step', scTabStep)
  // Vue.component('easy-scrollbar', easyScrollbar)
}

