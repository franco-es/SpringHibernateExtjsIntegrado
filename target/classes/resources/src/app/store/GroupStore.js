Ext.define("Front.store.OpStore", {
  extend: "Ext.data.Store",
  id: "opStore",
  model: "Front.model.OpModel",
  proxy: {
    type: "ajax",
    url: "http://localhost:8080/spring/allOp",
    reader: {
      type: "json",
      root: "users",
    },
  },
  autoload: true,
});
