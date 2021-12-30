Ext.define("Front.model.UserModel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "id", type: "int", convert: null },
    { name: "login", type: "string" },
    { name: "password", type: "string" },
    { name: "defaultGroupId", type: "string" },
    { name: "lastLogin", type: "string" },
  ],
});
