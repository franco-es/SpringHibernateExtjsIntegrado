Ext.define("Front.controller.UserController", {
  extend: "Ext.app.Controller",
  models: ["UserModel", "OpModel", "OpTypeModel"],
  stores: ["UserStore", "TreeStore", "OpStore", "OpTypeStore"],
  views: [
    "ExtraView",
    "Main",
    "tree.tree",
    "user.UserView",
    "user.UserByTypeWindow",
    "user.UserByTypeForm",
    "user.UserAdd",
    "op.OpView",
    "op.OpAddForm",
    "op.OpGrid",
  ],
  refs: [{ ref: "UserGrid", selector: "app-main > tabpanel #UserView" }],
  init: function () {
    var me = this;
    me.control({
      "viewport > main": {
        render: me.OnPanelRendered,
      },
      UserView: {
        render: me.onRendered,
      },
      "main > tabpanel > #userPanel > #button1": {
        click: me.onClickbutton,
      },
      "userByTypeForm button[action=save]": {
        click: me.search,
      },
    });
    console.log("Controller cargado");
  },
  onLaunch: () => {},
  OnPanelRendered: function () {
    console.log("the panel was rendered");
  },
  onRendered: function () {
    var store = Ext.getStore("UserStore");
    store.load();
  },

  //show pop-up form
  onClickbutton: function () {
    var userByTypeDialog = Ext.widget("userByTypeWindow");
    userByTypeDialog.show();
  },

  search: function (button) {
    var letter = button.up("form").getForm();

    var opTitle = letter.getFieldValues();
    Ext.Ajax.request({
      url: `/allGa?type=${opTitle.opTitle}`,
      method: "GET",
      timeout: 60000,
      success: function (response) {
        var data = response.responseText;
        var dataJson = JSON.parse(data);
        console.info(dataJson);
        var user = dataJson.id;
        console.log(user);
        var userStore = Ext.getStore("UserStore");
        userStore.removeAll();
        dataJson.forEach((element) => {
          console.log(element);
          userStore.add({ id: element.id, login: element.user.login });
        });
      },
      failure: function (response) {
        Ext.Msg.alert("Status", "Request Failed.");
      },
    });
  },
});
