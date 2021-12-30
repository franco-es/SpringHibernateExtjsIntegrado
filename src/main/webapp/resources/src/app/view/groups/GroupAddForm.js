Ext.define("Front.view.op.GroupAddForm", {
  extend: "Ext.form.Panel",
  title: "Agregar Operacion",
  xtype: "GroupAddForm",
  id: "GroupAddForm",
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
      fieldLabel: "Name",
      name: "name",
      emptyText: "Group Name",
    },
    {
      allowBlanl: false,
      fieldLabel: "Description",
      name: "description",
      emptyText: "Group Description",
    },
  ],
});
