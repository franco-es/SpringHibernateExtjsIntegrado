Ext.define("Front.view.op.OpGrid", {
  extend: "Ext.grid.Panel",
  itemId: "OpGrid",
  xtype: "OpGrid",
  store: "OpStore",
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
      text: "Operation Name",
      dataIndex: "name",
    },
    {
      text: "Operation Description",
      dataIndex: "description",
    },
    {
      text: "Operation Type",
      dataIndex: "type",
    },
  ],
  initComponent: function () {
    this.callParent();
  },
});
