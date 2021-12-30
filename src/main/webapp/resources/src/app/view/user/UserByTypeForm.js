Ext.define("Front.view.user.UserByTypeForm", {
  extend: "Ext.form.Panel",
  title: "busqueda por tipo de Operacion",
  xtype: "userByTypeForm",
  id: "userByTypeForm",
  items: [
    {
      xtype: "textfield",
      fieldLabel: "Tipo de Operacion",
      name: "opTitle",
    },
  ],
  buttons: [
    {
      text: "Buscar",
      action: "save",
    },
  ],
});
