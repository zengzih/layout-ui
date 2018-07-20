<template>
  <div class="sc-theme padding">
    <el-tree
      :data="data2"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  </div>
</template> 

<style  lang="less" scoped>
  .sc-theme{
    background:#fff;
  }
</style>

<script>
  let id = 1000;

  export default {
    data() {
      return {
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    methods: {
      append(store, data) {
        store.append({ id: id++, label: 'testtest', children: [] }, data);
      },

      remove(store, data) {
        store.remove(data);
      },

      renderContent(create,{ node, data, store }) {
        return create('span',[
            create('span',[
              node.label,
            ]),
            create('span',{style:{
                float:'right',
              }},[
              create('el-button',{props:{
                  size:'mini'
                }, on:{
                  click:() => this.append(store, data)
                }},[
                'Append'
              ]),
              create('el-button',{props:{
                  size:'mini'
                },on:{
                  click:() => this.remove(store, data)
                }},[
                'Remove'
              ])
            ])
          ]
        )
      }
    }
  };
</script>