<template>
  <sc-admin
    ref="admin"
    show-menu
    type="1"
    @dropmenu-change="handleUserMenu"
    @msg-click="handleMsgClick"
    @tab-contextmenu="handleTabContextmenu"
    :nav-menu-items="navMenuItems"
    :drop-menu-items="dropMenuItems"
    :msg-notifs="msgNotifs"
    :sider-toggled="true"
    :logo="logo">
  </sc-admin>
</template>

<script>
import axios from 'axios'  
export default {
  methods: {
    handleTabContextmenu: function (tab, e) {
      // tab.label = '改变label'
      console.log('处理tab右键菜单', tab, e.clientX, e.clientY)
    },
    handleUserMenu: function (id) {
      this.$refs.admin.stopShake(id)
    },
    handleMsgClick: function (id) {
      this.$refs.admin.stopShake(id)
    }
  },
  created() {
  },
  mounted() {
    this.$refs.admin.tabsAppend({id:'', label:'百度', url:'http://www.baidu.com'})
    this.$refs.admin.tabsAppend({id:'', label:'百度', url:'http://www.baidu.com'})
    this.$refs.admin.tabsAppend({id:'', label:'百度', url:'http://www.baidu.com'})
    this.$refs.admin.tabsAppend({id:'', label:'百度', url:'http://www.baidu.com'})
    this.$refs.admin.tabsAppend({id:'', label:'百度', url:'http://www.baidu.com'})
    this.$refs.admin.shake(1)
    this.$refs.admin.shake(2)
    axios('../../../static/menu/menu.json').then((res)=> {
      var resultData = res.data;
       debugger;
       var _this = this;
       transformData();
      function transformData() {
        var f, s, t;
        for (f = 0; f < resultData.length; f++) {
          resultData[f].id = resultData[f].moduleCode || resultData[f].id;
          resultData[f].label = resultData[f].name;
          if (resultData[f].name === '常用功能') {
            resultData[f].icon = 'common-menu1';
          }
          //添加图标
          setChildren(resultData[f]);
        }
        _this.navMenuItems = resultData;
        console.log(_this.navMenuItems);
        function setChildren(data) {
          if (data.children) {
            var children = data.children;
            for (var i = 0; i < children.length; i++) {
              if (children[i].url) {//不是空链接才处理
                if (children[i].isExternal != 1) {
                  children[i].url = "/scxx-web/" + children[i].url;//增加外链判断
                } else {
                  children[i].url += '?userName=${sessionScope.userSession.name}';
                }
              }
              children[i]["label"] = children[i].name;
              if (children[i].children.length == 0) {
                delete children[i].children;
              } else {
                setChildren(children[i]);
              }
            }
          }
        };
      }
    });
  },
  data () {
    return {
      logo: {
        normal: 'logo',
        mini: 'logo'
      },
      showMenu: true,
      msgNotifs: [
        {
          id: 1,
          icon: 'message',
          num: 5,
          bellColor:'#000'
        },
        {
          id: 2,
          icon: 'message',
          num: 9,
          bellColor:'#f0f'
        },
        {
          id: 3,
          icon: 'message',
          num: 9,
          bellColor:'#f0f'
        },
        {
          id: 4,
          icon: 'message',
          num: 9,
          bellColor:'#f0f'
        },
        {
          id: 5,
          icon: 'message',
          num: 9,
          bellColor:'#f0f'
        },
        {
          id: 6,
          icon: 'message',
          num: 9,
          bellColor:'#f0f'
        }
      ],
      dropMenuItems: {
        username: '尚诚信息尚诚信息尚诚信息尚诚信息',
        title:'个人中心',
        items: [
          {
            id: 1,
            label: '我的资料',
            icon: 'agreement'
          },
          {
            id: 2,
            label: '消息提醒',
            icon: 'warn'
          },
          {
            id: 3,
            label: '修改密码',
            icon: 'password'
          },
          {
            id: 4,
            label: '重新登录',
            icon: 're-login'
          },
          {
            id: 5,
            label: '退出登录',
            icon: 'exit'
          }
        ]
      },
      navMenuItems: [
        {
          id: 0,
          label: '首页',
          icon: 'home',
          active: true,
          url: 'http://www.wescxx.com'
        },
        {
          id: 1,
          label: '债权回购',
          icon: 'zhaiquanhuigou',
          active: false,
          children: [
            {
              id: 11,
              label: '模板导航1模板导航1模板导航1模板导航1模板导航1',
              template: '<h3>模板导航1<h3>',
              children:[
                {
                  id:'111',
                  label:'sanji -1sanji -1sanji -1sanji -1sanji -1',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'112',
                  label:'sanji -2',
                  url:'https://www.hao123.com44/'
                },
                {
                  id:'113',
                  label:'sanji -3',
                  url:'https://www.hao123.com4/'
                },
                {
                  id:'114',
                  label:'sanji -4',
                  url:'https://www.hao123.comf/'
                },
                {
                  id:'111',
                  label:'sanji -1sanji -1sanji -1sanji -1sanji -1',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'112',
                  label:'sanji -2',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'113',
                  label:'sanji -3',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'114',
                  label:'sanji -4',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'111',
                  label:'sanji -1sanji -1sanji -1sanji -1sanji -1',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'112',
                  label:'sanji -2',
                },
                {
                  id:'113',
                  label:'sanji -3',
                },
                {
                  id:'114',
                  label:'sanji -4',
                },
                {
                  id:'111',
                  label:'sanji -1sanji -1sanji -1sanji -1sanji -1',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'112',
                  label:'sanji -2',
                },
                {
                  id:'113',
                  label:'sanji -3',
                },
                {
                  id:'114',
                  label:'sanji -4',
                },
                {
                  id:'111',
                  label:'sanji -1sanji -1sanji -1sanji -1sanji -1',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'112',
                  label:'sanji -2',
                },
                {
                  id:'113',
                  label:'sanji -3',
                },
                {
                  id:'114',
                  label:'sanji -4',
                },
                {
                  id:'111',
                  label:'sanji -1sanji -1sanji -1sanji -1sanji -1',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'112',
                  label:'sanji -2',
                },
                {
                  id:'113',
                  label:'sanji -3',
                },
                {
                  id:'114',
                  label:'sanji -4',
                },
                {
                  id:'111',
                  label:'sanji -1sanji -1sanji -1sanji -1sanji -1',
                  url:'https://www.hao123.com/'
                },
                {
                  id:'112',
                  label:'sanji -2',
                },
                {
                  id:'113',
                  label:'sanji -3',
                },
                {
                  id:'114',
                  label:'sanji -4',
                },
              ]
            },
            {
              id: 12,
              label: 'URL导航111111',
              url: 'https://www.hao123.com/',
              children:[
                {
                  id:'121',
                  label:'sanji -111',
                },
                {
                  id:'123',
                  label:'sanji -222',
                },
                {
                  id:'124',
                  label:'sanji -333',
                },
                {
                  id:'125',
                  label:'sanji -4444',
                },
              ]
            },
            {
              id: 13,
              label: 'URL导航2',
              url: 'https://www.renrenche.com/'
            },
            {
              id: 14,
              label: 'URL导航3',
              url: 'http://sz.58.com'
            },
            {
              id: 15,
              label: 'URL导航4',
              url: 'http://military.china.com/'
            },
            {
              id: 16,
              label: 'URL导航5',
              url: 'http://www.ifeng.com/'
            },
            {
              id: 17,
              label: 'URL导航1',
              url: 'https://www.hao123.com/'
            },
            {
              id: 18,
              label: 'URL导航2',
              url: 'https://www.renrenche.com/'
            },
            {
              id: 19,
              label: 'URL导航3',
              url: 'http://sz.58.com'
            },
            {
              id: 20,
              label: 'URL导航4',
              url: 'http://military.china.com/'
            },
            {
              id: 21,
              label: 'URL导航5',
              url: 'http://www.ifeng.com/'
            },
            {
              id: 22,
              label: 'URL导航1',
              url: 'https://www.hao123.com/'
            },
            {
              id: 23,
              label: 'URL导航2',
              url: 'https://www.renrenche.com/'
            },
            {
              id: 24,
              label: 'URL导航3',
              url: 'http://sz.58.com'
            },
            {
              id: 25,
              label: 'URL导航4',
              url: 'http://military.china.com/'
            },
            {
              id: 26,
              label: 'URL导航5',
              url: 'http://www.ifeng.com/'
            },
            {
              id: 27,
              label: 'URL导航1',
              url: 'https://www.hao123.com/'
            },
            {
              id: 28,
              label: 'URL导航2',
              url: 'https://www.renrenche.com/'
            },
            {
              id: 29,
              label: 'URL导航3',
              url: 'http://sz.58.com'
            },
            {
              id: 44,
              label: 'URL导航2',
              url: 'https://www.renrenche.com/'
            },
            {
              id: 55,
              label: 'URL导航3',
              url: 'http://sz.58.com'
            }
          ]
        },
        {
          id: 2,
          label: '组合概览',
          icon: 'zuheyulan',
          children: [
          ]
        },
        {
          id: 3,
          label: '存款管理',
          icon: 'cunkuanguanli',
          children: [
          ]
        },
        {
          id: 4,
          label: '同业存单',
          icon: 'tongyecundan',
          children: [
          ]
        },
        {
          id: 5,
          label: '新股管理',
          icon: 'xinguguanli2',
          children: [
          ]
        },
        {
          id: 6,
          label: '新债管理',
          icon: 'xinzhaiguanli1',
          children: [
          ]
        },
        {
          id: 7,
          label: '可转债管理',
          icon: 'kezhuanzhaiguanli',
          children: [
          ]
        },
        {
          id: 8,
          label: '压力测试',
          icon: 'yaliceshi',
          children: [
          ]
        },
        {
          id: 9,
          label: '任务调度',
          icon: 'renwudiaodu',
          children: [
          ]
        },
        {
          id: 10,
          label: '系统设置',
          icon: 'xitongshezhi',
          children: [
          ]
        },
        {
          id: 11,
          label: '支付管理',
          icon: 'zhifuguanli',
          children: [
          ]
        },
        {
          id: 12,
          label: '券商对账',
          icon: 'quanshangduizhang',
          children: [
          ]
        },
        {
          id: 13,
          label: 'DEMO管理',
          icon: 'demoguanli',
          children: [
          ]
        },
        {
          id: 14,
          label: '参数设置管理',
          icon: 'canshushezhiguanli',
          children: [
          ]
        }
      ]
    }
  }
}
</script>
