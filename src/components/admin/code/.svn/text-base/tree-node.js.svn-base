import { Node } from './node'
import ElCollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import EasyScrollbar from '../../easy-scrollbar'
import debounce from 'throttle-debounce/debounce'

export default {
  name: 'renderMenu',
  props: {
    data: Array,
    accordion: Boolean,
    originData: Array,
    childExpand: {
      type: Boolean,
      default: true
    },
    defaultExpandedKeys: Array,
    defaultProps: {
      type: Object,
      default () {
        return {}
      }
    },
    self: Object
  },
  data () {
    return {
      root: {},
      activeCode: '',
      activeNode: {},
      activeList: [],
      tooltipContent: ''
    }
  },
  watch: {
    data: {
      handler (val) {
        this.root = new Node({
          data: val,
          store: {
            defaultExpandedKeys: this.defaultExpandedKeys,
            childExpand: this.childExpand,
            defaultProps: this.defaultProps,
            siderToggled: this.self.siderToggled
          }
        })
        // this.getDefaultChecked(this.root);
      },
      deep: true
    },
    originData: {
      handler (val) {
        this.originRoot = new Node({
          data: val,
          store: {
            defaultExpandedKeys: this.defaultExpandedKeys,
            childExpand: this.childExpand,
            defaultProps: this.defaultProps,
            siderToggled: this.self.siderToggled
          }
        })
        // this.getDefaultChecked(this.root);
      },
      deep: true
    }
  },
  components: {
    ElCollapseTransition,
    EasyScrollbar
  },
  render (h) {
    const nodeKey = this.defaultProps.nodeKey
    this.createMenu = (menu, parent) => {
      return (
        <el-collapse-transition>
          <div class={[!parent ? 'menu_content' : '']} v-show={this.getMenuContentShow(parent)}
               ref={!parent ? 'menuContent' : ''}>
            {
              this._l(menu, (child) =>
                <div
                  class='menu_item' // [child.level > 1 && child.nodeActive ? 'menu_item is-active' : 'menu_item']
                  on-click={($event) => this.handlerMenu($event, child)} key={child.data[nodeKey]}>
                  <div
                    class={['menu_group', child.level === 1 ? 'first_group' : '', !child.childNodes.length ? 'is-no_icon_arrow' : '', child.level > 1 && this.activeList[child.level - 1] === child.data[nodeKey] ? 'is-active' : '', child.level === 1 && this.activeList[child.level - 1] === child.data[nodeKey] ? 'parentActive' : '']}
                    style={'padding-left:' + (child.level * (this.defaultProps.indent || 15)) + 'px;'}>
                          <span class={['menu_icon_arrow', 'menu_icon']}>
                            {
                              <i v-show={child.childNodes.length && child.level > 1}
                                 class={['el-icon-caret-right', child.expanded ? 'icon_active' : '']}></i>
                              
                            }
                            {
                              <i v-show={child.level === 1 || child.level === 3}
                                 class={[child.data.icon ? ('iconfont sc-icon-' + child.data.icon) : '', 'level' + child.level]}></i>
                            }
                          </span>
                        {/* <span class={['menu_icon', 'level' + child.level]} v-show={child.level === 1}>
                          <i class={child.data.icon ? ('iconfont sc-icon-' + child.data.icon) : ''}></i>
                        </span> */}
                    <div class={['menu_label el-tooltip', 'level' + child.level]}
                         on-mouseenter={($event) => this.handleCellMouseEnter($event, child)}
                         on-mouseleave={this.handleCellMouseLeave}>
                      {child.data.label}
                    </div>
                  </div>
                  {child.childNodes ? this.createMenu(child.childNodes, child) : ''}
                </div>
              )
            }
          </div>
        </el-collapse-transition>
      )
    }
    return (
      <div>
        {
          [this.createMenu(this.root.childNodes)].concat(
            <el-tooltip effect='light' placement="top" ref="tooltip" content={this.tooltipContent}></el-tooltip>
          )
        }
      </div>
    )
  },
  created () {
    this.activateTooltip = debounce(50, tooltip => tooltip.handleShowPopper())
  },
  methods: {
    getDefaultChecked (root) {
      const childNodes = root.childNodes || []
      const nodeKey = this.defaultProps.nodeKey
      const model = this.defaultExpandedKeys
      childNodes.forEach((child) => {
        child.expanded = model.indexOf(child.data[nodeKey]) !== -1
        if (model.indexOf(child.data[nodeKey]) !== -1) {
          this.$set(this.activeList, child.level - 1, child.data[nodeKey])
        }
      })
    },
    handleCellMouseEnter (event, child) {
      // 判断是否text-overflow, 如果是就显示tooltip
      const targetEl = event.target
      if (targetEl.scrollWidth > targetEl.offsetWidth) {
        const tooltip = this.$refs.tooltip
        this.tooltipContent = targetEl.innerText
        tooltip.referenceElm = targetEl
        tooltip.$refs.popper.style.display = 'none'
        tooltip.doDestroy()
        tooltip.setExpectedState(true)
        this.activateTooltip(tooltip)
      }
    },
    handleCellMouseLeave () {
      const tooltip = this.$refs.tooltip
      if (tooltip) {
        tooltip.setExpectedState(false)
        tooltip.handleClosePopper()
      }
    },
    getChildrenMenuStyle (parent) {
      let result = []
      const childrenNum = (node) => {
        node.forEach((nodes) => {
          if (nodes.children) {
            result.push.apply(result, childrenNum(nodes.children.childNodes))
          } else {
            result.push(nodes)
          }
        })
      }
      parent && parent.level === 1 && childrenNum(parent.childNodes)
      return result.length * 30 > 300 ? 'height: ' + (this.defaultProps.scrollHeight || '300') + 'px' : ''
    },
    setNodeExpand (model) {
      if (!this.self.siderIsToggled) return
      const childNodes = this.root.childNodes || []
      const nodeKey = this.defaultProps.nodeKey
      childNodes.forEach((child) => {
        child.expanded = model.indexOf(child.data[nodeKey]) !== -1
      })
    },
    getMenuContentShow (parent) {
      if (parent && parent.level) {
        if (!parent.expanded) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    },
    getMenuContentStyle (menu, parent) {
      let vStyle = ''
      if (!menu || (menu && !menu.length)) return
      switch (menu[0].level) {
        case 1:
          // vStyle += ';background: #495060';
          break
        case 2:
          vStyle += ';background: #363e4f'
          break
        case 3:
          vStyle += ';background:rgb(48, 53, 65)'
          break
      }
      return vStyle
    },
    filterNode (val) {

    },
    handlerMenu (e, child) {
      e.stopPropagation()
      if (this.accordion && !child.expanded) {
        const childNodes = child.parent.childNodes
        childNodes.forEach((childs) => {
          childs.expanded = false
        })
      }
      if (this.activeList.length > child.level) {
        this.activeList.splice(child.level)
      }
      this.$set(this.activeList, child.level - 1, child.data.id)
      if (child.childNodes.length) {
        this.$set(child, 'expanded', !child.expanded)
      } else {
        this.$emit('menu-click', child.data)
      }
      child.nodeActive = true
      if (!this.self.siderIsToggled) {
        this.self.siderIsToggled = true
      }
      this.$emit('node-click')
    },
    setMenuNode (tab) {
      if (!tab) return false
      const nodeKey = this.defaultProps.nodeKey
      this.setTabMenuExpand(tab)
      const trans = (data) => {
        data.forEach((child) => {
          if (this.activeList.indexOf(child.data[nodeKey]) === -1) {
            child.expanded = false
          }
          if (child.childNodes.length) {
            trans(child.childNodes)
          }
        })
      }
      trans(this.root.childNodes)
      // this.setTabMenuExpand(tab)
    },
    setTabMenuExpand (child) {
      // 重组activeList
      if (!this.self.siderIsToggled) return
      const data = this.root.childNodes
      const nodeKey = this.defaultProps.nodeKey
      this.activeList.splice(0)
      const setExpanded = (node) => {
        if (node.parent) {
          this.$set(this.activeList, node.level - 1, node.data[nodeKey])
          node.parent.expanded = true
          setExpanded(node.parent)
        }
      }
      const getTabNode = (data) => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].data[nodeKey] === child[nodeKey]) {
            setExpanded(data[i])
            break
          }
          if (data[i].childNodes.length) {
            getTabNode(data[i].childNodes)
          }
        }
      }
      getTabNode(data)
    },
    menuToggle (siderIsToggled) {
      if (!siderIsToggled) {
        const trans = (data) => {
          data.forEach((child) => {
            child.expanded = false
            if (child.childNodes.length) {
              trans(child.childNodes)
            }
          })
        }
        trans(this.root.childNodes)
      }
    }
  }
}
