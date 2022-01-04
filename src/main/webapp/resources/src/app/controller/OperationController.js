Ext.define("Front.controller.OperationController", {
  extend: "Ext.app.Controller",
  models: ["OpModel", "OpTypeModel"],
  stores: ["OpStore", "OpTypeStore"],
  views: ["op.OpView", "op.OpAddForm", "op.OpGrid"],
  init: function () {
    console.log("OperationController Functional"),
      this.control({
        "opAddForm button[action=SaveOp]": {
          click: this.addOperation,
        },
        OpGrid: {
          render: this.onGridRender,
        },
      });
  },
  onGridRender: function () {
    console.log("grid rendered");
    Ext.getStore("OpStore").load();
  },
  addOperation: function (button) {
    console.log("button click");

    var letter = button.up("form").getForm();

    var opParams = letter.getFieldValues();
    Ext.Ajax.request({
      url: "/spring/operation/addOperation",
      jsonData: opParams,
      success: function (res) {
        console.log(res.responseText);
        var data = res.responseText;
        var dataJson = JSON.parse(data);
        var store = Ext.getStore("OpStore");
        store.add(dataJson);
      },
      failure: function (err) {
        console.log("error" + err);
        Ext.msg.alert("Status", "Request failed.");
      },
    });
  },
});
