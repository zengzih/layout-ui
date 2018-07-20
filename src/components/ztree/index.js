import VueZtree from './code/index';

/* istanbul ignore next */
VueZtree.install = function(Vue) {
  Vue.component(VueZtree.name, VueZtree);
};
export default VueZtree;
