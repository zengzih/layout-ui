<template>
  <div class="sc-admin" :class="{ 'is-toggled': siderToggled }">
		<div class="sc-admin__header" @click="toggle">
			<a class="logo">
				<img class="logo-lg" src="../../assets/logo.png">
				<span class="logo-sm">LO</span>
			</a>
		</div>
		<div class="sc-admin__sider">
			<el-menu default-active="u1" @open="handleOpen" @close="handleClose"  @select="handleSelect" unique-opened="true" theme="dark">
				<el-submenu :index="menu.index" v-for="menu in menusData" :key="menu.sort">
					<template slot="title">{{ menu.name }}</template>
                    <el-menu-item v-for="submenu in menu.subMenus" :index="submenu.index">{{ submenu.name }}</el-menu-item>
				</el-submenu>
			</el-menu>
		</div>
		<div class="sc-admin__content">
			<div class="sc-content">
				<el-tabs type="card" closable :active-name="editableTabsValue" @tab-remove="removeTab">
				  <el-tab-pane
					v-for="(item, index) in editableTabs"
					:label="item.title"
					:name="item.name"
				  >
					<div v-if="contentMode=='inner'" v-html="item.content"></div>
                    <div v-else>
                        <iframe :name="item.name" :src="item.url" frameborder="0" width="100%" height="500px" marginheight="0" marginwidth="0"></iframe>
                    </div>
				  </el-tab-pane>
				</el-tabs>
			</div>
		</div>
  </div>
</template>

<script>
function getMenuByIdx (idx, menuData) {
  for (var i in menuData) {
    for (var j in menuData[i].subMenus) {
      var submenu = menuData[i].subMenus[j]
      if (submenu.index === idx) {
        return submenu
      }
    }
  }
}

export default {
  methods: {
    toggle () {
      this.siderToggled = !this.siderToggled
    },
    handleOpen (key, keyPath) {
      var submenu = getMenuByIdx(key, this.menusData)
      if (submenu) { console.log(submenu.name) }
    },
    handleSelect (key, keyPath) {
      var submenu = getMenuByIdx(key, this.menusData)
      if (submenu) {
        var mode = submenu.mode || 'iframe'
        var url = submenu.url
        var name = submenu.name
        var index = submenu.index

        if (url) {
          let tabs = this.editableTabs
          var hasTab = false
          tabs.forEach((tab, i) => {
            if (tab.name === index) {
              hasTab = true
            }
          })
          if (!hasTab) {
            this.contentMode = mode
            console.log('contentMode', this.contentMode)
            if (mode === 'inner') {
              this.$http
              .get(url)
              .then((response) => {
                this.editableTabs.push({title: name, name: index, url: url, content: response.data})
                // this.$set('', response.data)
              })
              .catch(function (response) {
                console.log(response)
              })
            } else {
              this.editableTabs.push({title: name, name: index, url: url})
            }
          }
          this.editableTabsValue = index
        }
      }
    },
    removeTab (targetName) {
      let tabs = this.editableTabs
      let activeName = this.editableTabsValue
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue = activeName
      this.editableTabs = tabs.filter(tab => tab.name !== targetName)
    }
  },

  data () {
    return {
      contentMode: 'iframe',
      siderToggled: false,

      editableTabsValue: 'u1',
      editableTabs: [
        {
          title: '申赎表分析',
          name: 'u1',
          url: 'http://element.eleme.io/#/zh-CN/component/color'
        }
      ],
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
              url: 'http://element.eleme.io/#/zh-CN/component/color',
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
      ]
    }
  }
}
</script>
