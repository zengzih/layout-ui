import Admin from './code/admin'

/* istanbul ignore next */
Admin.install = function (Vue) {
  Vue.component(Admin.name, Admin)
}

export default Admin
