Ext.define("Front.view.tree.tree", {
  extend: "Ext.tree.Panel",
  alias: "widget.treeView",

  requires: [
    "Ext.tree.*",
    "Ext.data.*",
    "Ext.layout.container.HBox",
    'Front.store.TreeStore',
  ],

  // xtype: "treepanel",
  width: 300,
  height: 200,
  rootVisible: false,
  // Sharing the store synchronizes the views:
  store: {
    root: {
      expanded: true,
      children: [
        { text: "detention", leaf: true, href: "somplace" },
        {
          text: "homework",
          expanded: true,
          children: [
            { text: "book report", leaf: true },
            { text: "algebra", leaf: true },
          ],
        },
        { text: "buy lottery tickets", leaf: true },
      ],
    },
  },
});
