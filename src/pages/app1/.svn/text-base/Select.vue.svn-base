<template>
  <page sc-title='Select 选择器'>
  
  <block sc-title='基础用法'>
    <el-select v-model='value' placeholder='请选择'>
      <el-option
        v-for='item in options'
        :label='item.label'
        :value='item.value'>
      </el-option>
    </el-select>
  </block>
  
  <block sc-title='有禁用选项'>
    <el-select v-model='value2' placeholder='请选择'>
    <el-option
      v-for='item in options'
      :label='item.label'
      :value='item.value'
      :disabled='item.disabled'>
    </el-option>
  </el-select>
  </block>
  
  <block sc-title='禁用状态'>
    <el-select v-model='value3' disabled placeholder='请选择'>
    <el-option
      v-for='item in options'
      :label='item.label'
      :value='item.value'>
    </el-option>
  </el-select>
  </block>
  
  <block sc-title='可清空单选'>
    <el-select v-model='value4' clearable placeholder='请选择'>
    <el-option
      v-for='item in options'
      :label='item.label'
      :value='item.value'>
    </el-option>
  </el-select>
  </block>
  
  <block sc-title='基础多选'>
    <el-select v-model='value5' multiple placeholder='请选择'>
    <el-option
      v-for='item in options'
      :label='item.label'
      :value='item.value'>
    </el-option>
  </el-select>
  </block>
  
  <block sc-title='自定义模板'>
    <el-select v-model='value6' placeholder='请选择'>
    <el-option
      v-for='item in cities'
      :label='item.label'
      :value='item.value'>
      <span style='float: left'>{{ item.label }}</span>
      <span style='float: right; color: #8492a6; font-size: 13px'>{{ item.value }}</span>
    </el-option>
  </el-select>
  </block>
  
  <block sc-title='分组'>
  <el-select v-model='value7' placeholder='请选择'>
    <el-option-group
      v-for='group in options3'
      :label='group.label'>
      <el-option
      v-for='item in group.options'
      :label='item.label'
      :value='item.value'>
      </el-option>
    </el-option-group>
  </el-select>
  </block>
  
  <block sc-title='可搜索'>
  <el-select v-model='value8' filterable placeholder='请选择'>
    <el-option
      v-for='item in options'
      :label='item.label'
      :value='item.value'>
    </el-option>
  </el-select>
  </block>
  
  <block sc-title='远程搜索'>
  <el-select
    v-model='value9'
    multiple
    filterable
    remote
    placeholder='请输入关键词'
    :remote-method='remoteMethod'
    :loading='loading'>
    <el-option
      v-for='item in options4'
      :key='item.value'
      :label='item.label'
      :value='item.value'>
    </el-option>
  </el-select>
  </block>
  
  <block sc-title='创建条目'>
  <el-select
    v-model="value10"
    multiple
    filterable
    allow-create
    placeholder="请选择文章标签">
    <el-option
      v-for="item in options5"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </block>
  </page>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      value2: '',
      value3: '',
      value4: '',
      value5: [],
      cities: [{
        value: 'Beijing',
        label: '北京'
      },
      {
        value: 'Shanghai',
        label: '上海'
      },
      {
        value: 'Nanjing',
        label: '南京'
      },
      {
        value: 'Chengdu',
        label: '成都'
      },
      {
        value: 'Shenzhen',
        label: '深圳'
      },
      {
        value: 'Guangzhou',
        label: '广州'
      }
      ],
      value6: '',
      options3: [
        {
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        },
        {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }
      ],
      value7: '',
      value8: '',
      // value9: '',
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ],
      options5: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      value10: []
    }
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    }
  }
}
</script>

<style lang='less'>
</style>
