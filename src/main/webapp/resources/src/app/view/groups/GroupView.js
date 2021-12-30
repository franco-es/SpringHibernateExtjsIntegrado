Ext.define("Front.view.op.GroupView", {
  extend: "Ext.container.Container",
  itemId: "GroupView",
  xtype: "GroupView",
  requires: ["Ext.layout.container.Table"],
  layout: {
    type: "table",
    columns: 3,
    tdattrs: {
      style: "padding 10px;",
    },
  },
  default: {
    xtype: "panel",
  },
  items: [
    {
      //Operation Form
      xtype: "OpAddForm",
    },
    {
      resizable: true,
      layout: "fit",
      items: [
        {
          xtype: "OpGrid",
        },
        {
          xtype: "button",
          id: "oprefresh",
          text: "refresh",
          margin: 15,
        },
      ],
      //xtype: "OpGrid"
    },
  ],
});
