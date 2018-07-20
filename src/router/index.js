import Vue from 'vue'
import Router from 'vue-router'
// 应用页面
// 基础
import Home from '@/pages/app1/Home'
import Layout from '@/pages/app1/Layout'
import Color from '@/pages/app1/Color'
import Font from '@/pages/app1/Font'
import Icon from '@/pages/app1/Icon'
import Button from '@/pages/app1/Button'
// 表单
import Radio from '@/pages/app1/Radio'
import Checkbox from '@/pages/app1/Checkbox'
import Input from '@/pages/app1/Input'
import InputNumber from '@/pages/app1/InputNumber'
import Select from '@/pages/app1/Select'
import Cascader from '@/pages/app1/Cascader'
import Switch from '@/pages/app1/Switch'
import Slider from '@/pages/app1/Slider'
import TimePicker from '@/pages/app1/TimePicker'
import DatePicker from '@/pages/app1/DatePicker'
import DateTimePicker from '@/pages/app1/DateTimePicker'
import Upload from '@/pages/app1/Upload'
import Rate from '@/pages/app1/Rate'
import ColorPicker from '@/pages/app1/ColorPicker'
import Form from '@/pages/app1/Form'

// 数据
import Table from '@/pages/app1/Table'
/* import Tag from '@/pages/app1/Tag'
import Progress from '@/pages/app1/Progress'
import Tree from '@/pages/app1/Tree'
import Pagination from '@/pages/app1/Pagination'
import Badge from '@/pages/app1/Badge' */
// 导航
import NavMenu from '@/pages/app1/NavMenu'
/* import Tabs from '@/pages/app1/Tabs'
import Breadcrumb from '@/pages/app1/Breadcrumb'
import Dropdown from '@/pages/app1/Dropdown'
import Steps from '@/pages/app1/Steps' */

// SCUI 自建组件
import ScHome from '@/pages/app2/Home'
import ScAdmin from '@/pages/app2/Admin'
import ScCurdTable from '@/pages/app2/CurdTable'
import ScDialog from '@/pages/app2/ScDialog'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/layout',
      component: Layout
    },
    {
      path: '/color',
      component: Color
    },
    {
      path: '/font',
      component: Font
    },
    {
      path: '/icon',
      component: Icon
    },
    {
      path: '/button',
      component: Button
    },
    {
      path: '/radio',
      component: Radio
    },
    {
      path: '/checkbox',
      component: Checkbox
    },
    {
      path: '/input',
      component: Input
    },
    {
      path: '/inputnumber',
      component: InputNumber
    },
    {
      path: '/select',
      component: Select
    },
    {
      path: '/cascader',
      component: Cascader
    },
    {
      path: '/switch',
      component: Switch
    },
    {
      path: '/slider',
      component: Slider
    },
    {
      path: '/timepicker',
      component: TimePicker
    },
    {
      path: '/datepicker',
      component: DatePicker
    },
    {
      path: '/datetimepicker',
      component: DateTimePicker
    },
    {
      path: '/upload',
      component: Upload
    },
    {
      path: '/rate',
      component: Rate
    },
    {
      path: '/colorpicker',
      component: ColorPicker
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/table',
      component: Table
    }, /* ,
    {
      path: '/tag',
      component: Tag
    },
    {
      path: '/progress',
      component: Progress
    },
    {
      path: '/tree',
      component: Tree
    },
    {
      path: '/pagination',
      component: Pagination
    },
    {
      path: '/badge',
      component: Badge
    } */
    {
      path: '/navmenu',
      component: NavMenu
    },
    {
      path: '/admin',
      component: ScAdmin,
      name: 'ScAdmin'
    },
    {
      path: '/schome',
      component: ScHome
    },
    {
      path: '/sccurdtable',
      component: ScCurdTable
    },
    {
      path: '/scdialog',
      component: ScDialog
    }
  ]
})
export default router;
// router.beforeEach((to, from, next) => {
//   if (to.path === '/') {
//     next('/schome')
//   }
// })
