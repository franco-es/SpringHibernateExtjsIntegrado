Ext.define("Front.view.groups.GroupView", {
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
  items: [
   {
    //Operation Form
      xtype: "GroupAddForm",
      colspan: 3,
    },
     {
    	 rowspan: 2,
       	 resizable: true,
       	 layout: "fit",
         items: [
       {
           xtype: "GroupGrid",
         },
       ],
     },
  ],
});
