Ext.define("Front.store.OpTypeStore", {
  extend: "Ext.data.Store",
  xtype: "OpTypeStore",
  model: "Front.model.OpTypeModel",
  data: [
    { id: 1, typeOp: "A" },
    { id: 2, typeOp: "B" },
    { id: 3, typeOp: "C" },
  ],
  //autoload: true,
});
