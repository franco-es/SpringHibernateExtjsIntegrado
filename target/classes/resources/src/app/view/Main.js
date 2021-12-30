Ext.define("Front.view.Main", {
  extend: "Ext.container.Container",
  alias: "widget.main",

  layout: {
    type: "border",
  },
  items: [
    {
      region: "north",
      xtype: "toolbar",
      items: [
        {
          xtype: "button",
          text: "Agregar",
          action: "add",
          //   icon: "resources/src/image/book_add.png",
        },
        {
          xtype: "button",
          text: "Borrar",
          action: "delete",
          //   icon: "resources/src/image/book_delete.png",
        },
        {
          xtype: "button",
          text: "Editar",
          action: "edit",
          //   icon: "resources/src/image/book_edit.png",
        },
        {
          xtype: "button",
          text: "Generar reporte",
          action: "report",
          //   icon: "resources/src/image/report.png",
        },
      ],
    },
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
        {
          title: "Operaciones",
          id: "operationTab",
          items: [
            {
              xtype: "OpView",
            },
          ],
        },
        {
          title: "Grupos",
          id: "groupTab",
          items: [
            {
              xtype: "GroupView",
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
