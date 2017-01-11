var mongoose=require('mongoose');
var schema=mongoose.Schema;
var doctorschema=new schema({
	d_id:Number,
	d_name:String,
	d_newp:String,
	d_gy:Number,
	d_pn:String,
	d_add:String,
	d_city:String,
	d_state:String,
	d_zip:Number
});
var doctorsch=module.exports=mongoose.model('doctorsch',doctorschema);
