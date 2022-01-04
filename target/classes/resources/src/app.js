Ext.application({
  requires: ["Ext.container.Viewport"],
  name: "Front",
  controllers: ["UserController", "OperationController", "GroupController"],
  appFolder: "resources/src/app",
  launch: function () {
    Ext.create("Ext.container.Viewport", {
      layout: "fit",
      items: [
        {
          xtype: "main",
          //   xtype: "panel",
          //   title: "Users",
          //   html: "List of users will go here",
        },
      ],
    });
  },
});
