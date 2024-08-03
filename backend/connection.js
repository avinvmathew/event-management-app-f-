const mongoose=require('mongoose'); // to connect with mongodb
mongoose.connect('mongodb+srv://sanalsajan916:T7Eu3g1auNHGIaIE@cluster0.ibrjg5n.mongodb.net/eventdb?retryWrites=true&w=majority&appName=Cluster0')
 .then((res)=>{
    console.log("DB is connected")
 }).catch((res)=>{
    console.log('DB is not connected')
 })
