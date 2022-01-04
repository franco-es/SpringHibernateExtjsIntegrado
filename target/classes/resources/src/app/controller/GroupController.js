Ext.define("Front.controller.GroupController", {
  extend: "Ext.app.Controller",
  models: ["GroupModel"],
  stores: ["GroupStore"],
  views: [
	"groups.GroupView", 
	"groups.GroupAddForm", 
	"groups.GroupGrid"
	],
  init: function () {
    console.log("GroupController Functional"),
      this.control({
        "GroupAddForm button[action=SaveOp]": {
          click: this.addOperation,
        },
        GroupGrid: {
          render: this.onGridRender,
        },
      });
  },
  onGridRender: function () {
    console.log("grid rendered");
    Ext.getStore("GroupStore").load();
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
