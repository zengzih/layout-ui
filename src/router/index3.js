import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Home from '@/pages/app3/Home'
import Layout5 from '@/pages/app3/Layout5'
import ScCurdTable from '@/pages/app3/CurdTable'
import TreeGrid from '@/pages/app3/EasyTreeGrid'   //树状grid
import DataGrid from '@/pages/app3/DataGrid'   //grid
import FormGroup from '@/pages/app3/formgroup'  // 表单分组信息
import Formheadermergesort from '@/pages/app3/formheadermergesort'  // 表头合并排序
import DropTree from '@/pages/app3/droptree'  // 下拉树
import DropSearcgTree from '@/pages/app3/dropsearchtree'  // 下拉树
import AdvanceQuery from '@/pages/app3/AdvanceQuery'  // 页面高级查询功能
import NormalQuery from '@/pages/app3/NormalQuery'  // 页面普通查询功能
import SelectLinkSelect from '@/pages/app3/Home'  // 多下拉控件级联功能
import FormPopup from '@/pages/app3/formpopup'  // 表单中的弹出层
import LayoutJqGrid from '@/pages/app3/LayoutJqGrid'  // 五方图布局：JqUI 数据表格
import Inputdropdown from '@/pages/app3/inputdropdown'  // 带下拉列表输入框控件
import FormLayout from '@/pages/app3/FormLayout'  // 表单混合布局
import treeTable from '@/pages/app3/elTreeGrid'	// 表单布局
import sideTab from '@/pages/app3/sideTab'  // 侧边tab页
import TreeLinkForm from '@/pages/app3/treeLinkForm'  // 带下拉列表输入框控件
import FormLayout2 from '@/pages/app3/FormLayout2'	// 表单布局
import DropTable from '@/pages/app3/droptable'  // 下拉表格
import tabStep from '@/pages/app3/tabStep'    //顶部step
import MultiSelect from '@/pages/app3/multiSelect'  // 下拉框多选功能封装实现
import DynAddInput from '@/pages/app3/DynAddInput'  // 动态新增表单
import AccordionDataGrid from '@/pages/app3/AccordionDataGrid'  // 可折叠数据表格
import EditTable from '@/pages/app3/editTable'  // 单元格嵌入表单组件表格
import calendarUi from '@/pages/app3/calendarUi'  // easyUI 日历组件样式更改
import twoTree from '@/pages/app3/twoTree' //左右树功能

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/app3/5fangtu',
      component: Layout5
    },
    {
      path: '/app3/elemtreetable',
      component: treeTable
    },
    {
      path: '/app3/formgroup',
      component: FormGroup
    },
    {
      path: '/app3/formgroup',
      component: FormGroup
    },
    {
      path: '/app3/advanceQuery',
      component: AdvanceQuery
    },
    {
      path: '/app3/normalQuery',
      component: NormalQuery
    } ,
	{
      path: '/app3/selectLinkSelect',
      component: SelectLinkSelect
    },
    {
      path: '/app3/formmixlayout',
      component: FormLayout
    },
    {
      path: '/app3/formpopup',
      component: FormPopup
    },
    {
      path: '/app3/formheadermergesort',
      component: Formheadermergesort
    },
    {
      path: '/app3/DynAddInput',
      component: DynAddInput
    },
    {
      path: '/app3/droptable',
      component: DropTable
    },
    {
      path: '/app3/droptree',
      component: DropTree
    },
    {
      path: '/app3/dropsearchtree',
      component: DropSearcgTree
    },
    {
      path: '/app3/treeLinkForm',
      component: TreeLinkForm
    },
    {
      path: '/app3/treewithtable',
      component: Home
    },
    {
      path: '/app3/toptab',
      component: Home
    },
    {
      path: '/app3/sidetabpage',
      component: sideTab
    },
    {
      path: '/app3/sccurdtable',
      component: ScCurdTable
    },
    {
      path: '/app3/treegrid',
      component: TreeGrid
    },
    {
      path: '/app3/datagrid',
      component: DataGrid
    },
    {
      path: '/app3/LayoutJqGrid',
      component: LayoutJqGrid
	},
    {
      path: '/app3/tabstep',
      component: tabStep
    },
    {
      path: '/app3/formlayout2',
      component: FormLayout2
	},
    {
      path: '/app3/multiSelect',
      component: MultiSelect
    },
    {
      path: '/app3/AccordionDataGrid',
      component: AccordionDataGrid
	},
    {
      path: '/app3/editTable',
      component: EditTable
    },
    {
      path: '/app3/calendarUi',
      component: calendarUi
    },
    {
      path: '/app3/twoTree',
      component: twoTree
    }
  ]
});
