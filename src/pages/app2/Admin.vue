<template>
  <sc-admin
    :menuTree="menusData"
    :nav-menu-items='navMenuItems'
    :menu-theme="menuTheme"
    :sider-toggled="siderToggled"
    :default-expanded-keys="defaultExpandedKeys"
    :msg-notifs="msgNotifs"
    :drop-menu-items="dropMenuItems"
    show-menu
    @set-up="setUp">
  </sc-admin>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        siderToggled: false,
        menuTheme: 'classic',
        accordion: false,
        defaultExpandedKeys: [],
        defaultProps: {
          nodeKey: 'id'
        },
        editableTabsValue: 'u1',
        editableTabs: [
          {
            title: '申赎表分析',
            name: 'u1',
            url: 'http://element.eleme.io/'
          }
        ],
        msgNotifs: [
          {
            id: 1,
            icon: 'transaction1',
            num: 0
          },
          {
            id: 2,
            icon: 'message',
            num: 0
          },
          //TODO 待办
          {
            id: 4,
            icon: 'chedanxiaoxi',
            num: 0
          },
           {
            id: 5,
            icon: 'chedanxiaoxi',
            num: 0
          },
           {
            id: 6,
            icon: 'chedanxiaoxi',
            num: 3
          }
        ],
        dropMenuItems: {
          username: '尚诚信息尚诚信息尚诚信息尚诚信息尚诚信息',
          title: '个人中心',
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
            /*{
            id: 4,
            label: '重新登录',
            icon: 're-login'
            },*/
            {
              id: 5,
              label: '退出登录',
              icon: 'exit'
            }
          ]
        },
        menusData: [
          {
            name: '组合概览',
            index: '1',
            sort: 1,
            subMenus: [
              {
                name: '申赎表分析',
                index: 'u1',
                mode: 'iframe',
                url: 'http://element.eleme.io/',
                sort: 1
              }, {
                name: '资产规模查询',
                index: 'u2',
                mode: 'iframe',
                url: 'http://www.wescxx.com',
                sort: 2
              }, {
                name: '组合规模变动表',
                index: 'u3',
                mode: 'iframe',
                url: 'http://www.baidu.com',
                sort: 3
              }, {
                name: '资产走势一览',
                index: 'u4',
                mode: 'iframe',
                url: 'http://www.qq.com',
                sort: 4
              }
            ]
          },
          {
            name: '债券回购',
            index: '2',
            sort: 2,
            subMenus: [
              {
                name: '询价指令查询',
                index: '1.1',
                sort: 1
              }, {
                name: '交易清算统计',
                index: '1.2',
                sort: 2
              }, {
                name: '银行间清算确认',
                index: '1.3',
                sort: 3
              }, {
                name: '银行间账户余额查询',
                index: '1.4',
                sort: 4
              }, {
                name: '场外债券交易查询',
                index: '1.4',
                sort: 5
              }, {
                name: '质押券查询',
                index: '1.4',
                sort: 5
              }, {
                name: '质押券信息核对',
                index: '1.4',
                sort: 5
              }, {
                name: '组合久期与期限查询',
                index: '1.4',
                sort: 5
              }, {
                name: '债券库查询',
                index: '1.4',
                sort: 5
              }, {
                name: '城投债设置',
                index: '1.4',
                sort: 5
              }, {
                name: '突发收付金额维护',
                index: '1.4',
                sort: 5
              }
            ]
          },
          {
            name: '存款管理',
            index: '3',
            sort: 2,
            subMenus: [
              {
                name: '询价管理',
                index: '1.1',
                sort: 1
              }, {
                name: '协议管理',
                index: '1.2',
                sort: 2
              }, {
                name: '提前支取',
                index: '1.3',
                sort: 3
              }, {
                name: '框架协议',
                index: '1.4',
                sort: 4
              }, {
                name: '提前支取模板',
                index: '1.4',
                sort: 5
              }, {
                name: '存款协议核对',
                index: '1.4',
                sort: 5
              }, {
                name: '存款业务导出',
                index: '1.4',
                sort: 5
              }, {
                name: '授信额度监控',
                index: '1.4',
                sort: 5
              }, {
                name: '存款比例监控',
                index: '1.4',
                sort: 5
              }, {
                name: '存款监控',
                index: '1.4',
                sort: 5
              }, {
                name: '银行报价报表',
                index: '1.4',
                sort: 5
              }, {
                name: '存款比例设置',
                index: '1.4',
                sort: 5
              }, {
                name: '存款模板设置',
                index: '1.4',
                sort: 5
              }, {
                name: '存款期限设置',
                index: '1.4',
                sort: 5
              }, {
                name: '银行联系人设置',
                index: '1.4',
                sort: 5
              }, {
                name: '银行信息设置',
                index: '1.4',
                sort: 5
              }
            ]
          }
        ],
        menuData: [],
        navMenuItems: [],
      }
    },
    created () {
      axios.get('static/menu/menu.json').then((response) => {
        this.menuData = response.data
        this.transformData(this.menuData, () => {
          // this.defaultExpandedKeys = ['402809815afe6e90015afe73cea50001']
        })
      })
    },
    mounted() {
      // this.defaultExpandedKeys = ['402809815afe6e90015afe73cea50001', '4028c8bf5a4577ea015a46064dca000b']
    },
    methods: {
      setUp() {
        // this.defaultExpandedKeys = ['402809815afe6e90015afe73cea50001']
      },
      transformData (resultData, callback) {
        var f, s, t
        for (f = 0; f < resultData.length; f++) {
          resultData[f].id = resultData[f].moduleCode || resultData[f].id;
          resultData[f].label = resultData[f].name
          // 添加图标
          setChildren(resultData[f])
        }
        this.navMenuItems = this.navMenuItems.concat(resultData)

        function setChildren (data) {
          if (data.children) {
            var children = data.children
            for (var i = 0; i < children.length; i++) {
              if (children[i].isExternal != 1) children[i].url = '/scxx-web/' + children[i].url//增加外链判断
              children[i]['label'] = children[i].name
              if (children[i].children.length == 0) {
                delete children[i].children
              } else {
                setChildren(children[i])
              }
            }
          }
          callback && callback()
        }
      }
    }
  }
</script>


<style>
  .menu_item {
    min-height: 30px;
  }
</style>
