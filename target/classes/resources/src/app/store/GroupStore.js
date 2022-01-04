Ext.define("Front.store.GroupStore", {
  extend: "Ext.data.Store",
  id: "GroupStore",
  model: "Front.model.GroupModel",
  proxy: {
    type: "ajax",
    url: "http://localhost:8080/spring/group/all",
    reader: {
      type: "json",
      root: "groups",
    },
  },
  autoload: true,
});
