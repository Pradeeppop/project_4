let adminSchema=require('../schema_mongoose/adminSchema')
let customrSchema=require('../schema_mongoose/customerSchema');
let spSchema=require('../schema_mongoose/spSchema');
//Insert Admin in DB
let insertAdmin = function (objToSave) {
	return new Promise((resolve, reject)=>{
		 new adminSchema(objToSave).save((err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

// update admin detail in db

let updateAdmin = function (id,updateDetail) {
	console.log("in updateAdmin",updateDetail)
	return new Promise((resolve, reject)=>{
		console.log(id);
		adminSchema.findByIdAndUpdate(id,updateDetail, (err,result)=>{
			if(err)
			reject (err)
		else
			resolve (result)
		});
	})
};

// check admin in database

let checkAdmin = function (criteria) {
	return new Promise((resolve, reject)=>{
		adminSchema.find(criteria, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

//check admin by id

let checkAdminById = function (id) {
	return new Promise((resolve, reject)=>{
		adminSchema.findOne({_id:id}, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

//fetch all customer

let getAllCustomer = function (projection) {
	return new Promise((resolve, reject)=>{
		customrSchema.find(projection, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

let getAllsp = function (projection) {
	return new Promise((resolve, reject)=>{
		spSchema.find(projection, (err,result)=>{
			if(err)
				reject (err)
			else
				resolve (result)
		});
	})
};

	

module.exports={
insertAdmin:insertAdmin,
checkAdmin:checkAdmin,
 checkAdminById:checkAdminById,
 updateAdmin:updateAdmin,
 getAllCustomer:getAllCustomer,
 getAllsp:getAllsp
}