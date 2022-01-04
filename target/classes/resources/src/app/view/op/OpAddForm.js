Ext.define("Front.view.op.OpAddForm", {
  extend: "Ext.form.Panel",
  title: "Agregar Operacion",
  xtype: "opAddForm",
  id: "opAddForm",
  defaultType: "textfield",
  defaults: {
    anchor: "100%",
  },
  frame: true,
  margin: 10,
  width: 320,
  height: 150,
  boddyPadding: 10,
  items: [
    {
      allowBlanl: false,
      fieldLabel: "Description",
      name: "description",
      emptyText: "Operation Description",
    },
    {
      allowBlanl: false,
      fieldLabel: "Name",
      name: "name",
      emptyText: "Operation Name",
    },
    {
      xtype: "combobox",
      fieldLabel: "Operation Type",
      store: "OpTypeStore",
      name: "type",
      queryMode: "local",
      displayField: "typeOp",
      valueField: "typeOp",
    },
  ],
  buttons: [
    {
      text: "Save Operation",
      action: "SaveOp",
    },
  ],
});
