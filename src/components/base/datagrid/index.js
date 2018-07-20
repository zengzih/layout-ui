/**
 * Created by Faker on 2017/5/11.
 */
import dataGrid from './code/datagrid.vue';

/* istanbul ignore next */
dataGrid.install = function(Vue) {
  Vue.component(dataGrid.name, dataGrid);
};
export default dataGrid;
