var express=require('express');
var router=express.Router();
var mongoose=require('mongoose');
mongoose.createConnection('mongodb://localhost/finddoc');

	var docs=require('../models/docsc');
	router.get('/',function(req,res){
		docs.find(function(err, doctorsch){
			if(err){
				res.send(err);
			}
			else{
			res.render('doctors', {
				doctors:doctorsch
			});
		}
		});
		
});

router.get('/adddoc',function(req, res){
	docs.find(function(err, doctorsch){
			if(err){
				res.send(err);
			}
			else{
			res.render('adddoctor', {
				catagories: doctorsch
			});
		}
		});

});

router.post('adddoc',function(req,res){
	var doc=new docs();
	doc.d_ic=req.body.d_id;
	doc.d_name=req.body.d_name;
	doc.d_newp=req.body.d_newp;
	doc.d_gy=req.body.d_gy;
	doc.d_pn=req.body.d_pn;
	doc.d_add=req.body.add;
	doc.d_city=req.body.city;
	doc.d_state=req.body.d_state;
	doc.d_zip=req.body.d_zip;

	doc.save(function(err){
		if(err)
			res.send(err)
		else
			res.location('/d');
			res.redirect('/d');
	});
});

router.get('/details/:id',function(req,res){
	var sid=req.params.id;
	docs.findById(id,function(err,doctorsch){
		if(err)
			res.send(err);
		else
			res.render('doctors', {
				doctors:doctorsch
			});
	});
});

router.get('/cata/:name',function(req,res){
	var sname=req.params.name;
	docs.findOne(sname,function(err,doctorsch){
		if(err)
			res.send(err);
		else
			res.render('doctors', {
				doctors:doctorsch
			});
	});
});
module.exports=router;
