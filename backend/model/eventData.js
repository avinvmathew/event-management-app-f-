const mongoose=require('mongoose');
const eventSchema=mongoose.Schema({
    username:String,
    email:String,
    password:String,
})
const EventData=mongoose.model('signups',eventSchema,);
module.exports=EventData