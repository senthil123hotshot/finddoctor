var mongoose=require('mongoose');
var schema=mongoose.Schema;
var caragoryschema=new schema({
	c_id:Number,
	c_name:String
});
var catasc=module.exports=mongoose.model('catasc',caragoryschema);
