Ext.define("Front.view.op.OpView", {
  extend: "Ext.container.Container",
  itemId: "OpView",
  xtype: "OpView",
  requires: ["Ext.layout.container.Table"],
  layout: {
    type: "table",
    columns: 3,
    tdattrs: {
      style: "padding 10px;",
    },
  },
  items: [
    {
      //Operation Form
      xtype: "opAddForm",
      colspan: 3,
    },
    {
      rowspan: 2,
      margin: 10,
      resizable: true,
      layout: "fit",
      items: [
        {
          xtype: "OpGrid",
        },
      ],
    },
  ],
});
