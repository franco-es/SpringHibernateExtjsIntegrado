Ext.define("Front.view.op.GroupGrid", {
  extend: "Ext.grid.Panel",
  itemId: "GroupGrid",
  xtype: "GroupGrid",
  store: "GroupStore",
  title: "Operations",
  layout: "fit",
  width: 450,
  resizable: true,
  columns: [
    {
      text: "ID",
      dataIndex: "operation_id",
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
