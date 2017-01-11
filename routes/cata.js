var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
var mongodb=require('mongodb');
var Cata=require('../models/catasc');
mongoose.createConnection('mongodb://localhost/finddoc');

router.get('/addc',function(req, res, next){
	res.render('addcategory');
});


router.post('/addc',function(req, res, next){
	//console,log("getting the catagories");
var cata=new Cata();
cata.c_id=req.body.c_id;
cata.c_name=req.body.c_name;
cata.save(function(err){
	if(err)
		res.send(err);

	//req.flash('success',"catagories added");
	res.location('/d');
	res.redirect('/d');
});

});

module.exports=router;