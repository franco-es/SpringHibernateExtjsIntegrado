Ext.define("Front.view.ExtraView", {
  extend: "Ext.container.Container",
  requires: ["Ext.layout.container.Table","Front.view.user.UserAdd"],
  xtype: "coolpanel",
  layout: {
    type: "table",
    columns: 3,
    tdAttrs: { style: "padding: 10px;" },
  },

  defaults: {
    xtype: "panel",
  },
  items: [
    {
      xtype: "userAddForm",
    },
    {
      items: [
        {
          xtype: "UserView",
          width: 600,
          height: "auto",
          // padding: 30,
          // bodyPadding: 30,
        },
        {
          xtype: "button",
          // id: "button1",
          text: "ClickMe",
          margin: 15,
        },
      ],
    }
  ],
});
