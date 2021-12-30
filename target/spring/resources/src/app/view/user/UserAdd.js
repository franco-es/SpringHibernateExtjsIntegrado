Ext.define("Front.view.user.UserAdd", {
  extend: "Ext.form.Panel",
  title: "Agregar Usuaio",
  xtype: "userAddForm",
  id: "userAddForm",
  defaultType: "textfield",
  defaults: {
    anchor: "100%",
  },
  frame: true,
  width: 320,
  bodyPadding: 10,

  items: [
    {
      allowBlank: false,
      fieldLabel: "User ID",
      name: "user",
      emptyText: "user id",
    },
    {
      allowBlank: false,
      fieldLabel: "Password",
      name: "password",
      emptyText: "password",
      inputType: "password",
    },
  ],

  buttons: [{ text: "Register", action: "register" }],
});
