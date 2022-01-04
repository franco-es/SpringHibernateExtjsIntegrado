Ext.define("Front.view.groups.GroupGrid", {
  extend: "Ext.grid.Panel",
  itemId: "GroupGrid",
  xtype: "GroupGrid",
  store: "GroupStore",
  title: "Groups",
  layout: "fit",
  default: [{ anchor: 100 }],
  resizable: true,
  columns: [
    {
      text: "ID",
      dataIndex: "id",
    },
    {
      text: "Group Name",
      dataIndex: "name",
    },
    {
      text: "Group Description",
      dataIndex: "description",
    },
  ],
  initComponent: function () {
    this.callParent();
  },
});
