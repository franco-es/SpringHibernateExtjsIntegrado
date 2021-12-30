Ext.define("Front.model.OpModel",{
	extend: "Ext.data.Model",
	fields: [
		{name: "operation_id", type: 'int'},
		{name:'description', type:'string'},
		{name:'name', type:'string'},
		{name:'type', type:'string'},
	]
})