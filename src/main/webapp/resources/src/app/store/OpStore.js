Ext.define("Front.store.OpStore", {
  extend: "Ext.data.Store",
  id: "opStore",
  model: "Front.model.OpModel",
  proxy: {
    type: "ajax",
    url: "http://localhost:8080/spring/operation/allOperations",
    reader: {
      type: "json",
      root: "operations",
    },
  },
  autoload: true,
});
