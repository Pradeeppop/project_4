const mongoose = require('mongoose');

const spRegisterSchema=mongoose.Schema({
name:{type:String,required: true},
email:{type:String,required: true},
service_type:{type:String, required:true},                         
password:{type:String,required: true},
logoutKey:{type:String},
location: {
    type: {
      type: String, 
    
    },
    coordinates:  [Number],
     // required: true
    
  }
},
{
    timestamps:true   
});

spRegisterSchema.index({location:"2dsphere"})
module.exports=mongoose.model('sp_register',spRegisterSchema)
