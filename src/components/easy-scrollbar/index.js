import EasyScrollbar from './code/main';

/* istanbul ignore next */
EasyScrollbar.install = function(Vue) {
  Vue.component(EasyScrollbar.name, EasyScrollbar);
};
export default EasyScrollbar;
