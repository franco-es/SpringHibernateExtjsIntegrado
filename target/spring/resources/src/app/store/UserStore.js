Ext.define("Front.store.UserStore", {
  extend: "Ext.data.Store",
  id: "userStore",
//  model: "UserModel",
  proxy: {
    type: "ajax",
    url: "/allUsers",
    reader: {
      type: "json",
      root: "results",
    },
  },
  autoload: true,
});
