Ext.define("Front.store.UserStore", {
  extend: "Ext.data.Store",
  id: "userStore",
  model: "Front.model.UserModel",
  proxy: {
    type: "ajax",
    url: "http://localhost:8080/spring/allUsers",
    reader: {
      type: "json",
      root: "users",
    },
  },
  autoload: true,
});
