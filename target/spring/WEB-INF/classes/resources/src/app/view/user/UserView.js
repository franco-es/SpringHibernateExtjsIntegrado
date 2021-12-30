Ext.define("Front.view.user.UserView", {
  extend: "Ext.grid.Panel",
  itemId: "UserView",
  xtype: "UserView",
  store: "UserStore",
  title: "Users",
  layout: "fit",
  columns: [
    {
      text: "ID",
      dataIndex: "id",
    },
    {
      text: "Login",
      dataIndex: "login",
    },
  ],
  initComponent: function () {
    this.callParent();
  },
});
