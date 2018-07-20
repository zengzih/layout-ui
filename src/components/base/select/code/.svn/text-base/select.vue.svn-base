<template>
  <div
    class="sc-select"
    v-clickoutside="handleClose">
    <div
      class="sc-select__tags"
      v-if="multiple"
      @click.stop="toggleMenu"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px' }">
      <transition-group @after-leave="resetInputHeight">
        <el-tag
          v-for="item in selected"
          :key="item.value"
          closable
          :hit="item.hitState"
          type="primary"
          @close="deleteTag($event, item)"
          close-transition>
          <span class="sc-select__tags-text">{{ item.currentLabel }}</span>
        </el-tag>
      </transition-group>

      <input
        type="text"
        class="sc-select__input"
        :class="`is-${ size }`"
        @focus="visible = true"
        :disabled="disabled"
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.down.prevent="navigateOptions('next')"
        @keydown.up.prevent="navigateOptions('prev')"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.prevent="visible = false"
        @keydown.delete="deletePrevTag"
        v-model="query"
        :debounce="remote ? 300 : 0"
        v-if="filterable"
        :style="{ width: inputLength + 'px', 'max-width': inputWidth - 42 + 'px' }"
        ref="input">
    </div>
    <el-input
      ref="reference"
      v-model="selectedLabel"
      type="text"
      :placeholder="currentPlaceholder"
      :name="name"
      :size="size"
      :disabled="disabled"
      :readonly="!filterable || multiple"
      :validate-event="false"
      @focus="handleFocus"
      @click="handleIconClick"
      @mousedown.native="handleMouseDown"
      @keyup.native="debouncedOnInputChange"
      @keydown.native.down.prevent="navigateOptions('next')"
      @keydown.native.up.prevent="navigateOptions('prev')"
      @keydown.native.enter.prevent="selectOption"
      @keydown.native.esc.prevent="visible = false"
      @keydown.native.tab="visible = false"
      @paste.native="debouncedOnInputChange"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
      :icon="iconClass">
    </el-input>
    <transition
      name="el-zoom-in-top"
      @after-leave="doDestroy"
      @after-enter="handleMenuEnter">
      <el-select-menu
        ref="popper"
        v-show="visible && emptyText !== false">
        <el-scrollbar
          tag="ul"
          wrap-class="sc-select-dropdown__wrap"
          view-class="sc-select-dropdown__list"
          :class="{ 'is-empty': !allowCreate && filteredOptionsCount === 0 }"
          v-show="options.length > 0 && !loading">
          <el-option
            :value="query"
            created
            v-if="showNewOption">
          </el-option>
          <slot></slot>
        </el-scrollbar>
        <p class="sc-select-dropdown__empty" v-if="emptyText && !allowCreate">{{ emptyText }}</p>
      </el-select-menu>
    </transition>
  </div>
</template>

<script type="text/babel">
export default {
  mixins: [],

  name: 'ScSelect',

  componentName: 'ScSelect',

  computed: {
    iconClass () {
    },

    debounce () {
    },

    emptyText () {
    },

    showNewOption () {
    }
  },

  components: {
  },

  directives: {},

  props: {
    name: String,
    value: {},
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default () {
      }
    }
  },

  data () {
    return {
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      isSelect: true,
      inputLength: 20,
      inputWidth: 0,
      cachedPlaceHolder: '',
      optionsCount: 0,
      filteredOptionsCount: 0,
      dropdownUl: null,
      visible: false,
      selectedLabel: '',
      hoverIndex: -1,
      query: '',
      bottomOverflow: 0,
      topOverflow: 0,
      optionsAllDisabled: false,
      inputHovering: false,
      currentPlaceholder: ''
    }
  },

  watch: {
    placeholder (val) {
    },

    value (val) {
    },

    query (val) {
    },

    visible (val) {
      this.$emit('visible-change', val)
    },

    options (val) {
    }
  },

  methods: {
    handleIconHide () {
    },

    handleIconShow () {
    },

    handleMenuEnter () {
    },

    getOverflows () {
    },

    resetMenuScroll () {
    },

    getOption (value) {
    },

    setSelected () {
    },

    handleFocus () {
    },

    handleIconClick (event) {
    },

    handleMouseDown (event) {
    },

    doDestroy () {
    },

    handleClose () {
    },

    toggleLastOptionHitState (hit) {
    },

    deletePrevTag (e) {
    },

    managePlaceholder () {
    },

    resetInputState (e) {
    },

    resetInputHeight () {
    },

    resetHoverIndex () {
    },

    handleOptionSelect (option) {
    },

    toggleMenu () {
    },

    navigateOptions (direction) {
    },

    resetScrollTop () {
    },

    selectOption () {
    },

    deleteSelected (event) {
    },

    deleteTag (event, tag) {
      event.stopPropagation()
    },

    onInputChange () {
    },

    onOptionDestroy (option) {
      this.broadcast('ElOption', 'resetIndex')
    },

    resetInputWidth () {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width
    },

    handleResize () {
    }
  },

  created () {
    this.$on('handleOptionClick', this.handleOptionSelect)
    this.$on('onOptionDestroy', this.onOptionDestroy)
    this.$on('setSelected', this.setSelected)
  },

  mounted () {
  },

  beforeDestroy () {
  }
}
</script>
