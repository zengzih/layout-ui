import ScDialog from './code/dialog';

/* istanbul ignore next */
ScDialog.install = function(Vue) {
  Vue.component(ScDialog.name, ScDialog);
};

export default ScDialog;
