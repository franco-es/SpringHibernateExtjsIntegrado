Ext.define("Front.view.Main", {
  extend: "Ext.container.Container",
  // requires: [
  //   "Ext.tab.Panel",
  //   "Ext.layout.container.Border",
  //   "Front.view.ExtraView",
  //   "Front.view.tree.tree",
  //   "Front.view.user.UserView",
  //   "Front.view.ExtraView",
  // ],

  alias: "widget.main",

  layout: {
    type: "border",
  },

  items: [
    {
      region: "west",
      xtype: "treeView",
      title: "west",
      width: 150,
    },
    {
      region: "center",
      xtype: "tabpanel",
      items: [
        {
          title: "Listar",
          id: "userPanel",
          layout: {
            columns: 2,
          },
          items: [
            { xtype: "UserView" },
            {
              xtype: "button",
              id: "button1",
              text: "ClickMe",
            },
          ],
          margin: 10,
        },
        {
          title: "Users",
          id: "coolpanelTab",
          items: [
            {
              xtype: "coolpanel",
            },
          ],
        },
      ],
    },
  ],
  // extend: "Ext.grid.Panel",
  // alias: "widget.userlist",

  // title: "All Users",

  // initComponent: function () {
  //   this.store = {
  //     fields: ["name", "email"],
  //     data: [
  //       { name: "Ed", email: "ed@sencha.com" },
  //       { name: "Tommy", email: "tommy@sencha.com" },
  //     ],
  //   };

  //   this.columns = [
  //     { header: "Name", dataIndex: "name", flex: 1 },
  //     { header: "Email", dataIndex: "email", flex: 1 },
  //   ];

  //   this.callParent(arguments);
  // },
});
