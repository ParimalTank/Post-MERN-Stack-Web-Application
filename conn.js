const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/merncrud', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect('mongodb+srv://root:P%40T132@cluster0.8cr0l.mongodb.net/merncrud', {useNewUrlParser: true, useUnifiedTopology: true});

const dbobject = mongoose.connection

dbobject.on('connected' , ()=>{console.log('Mongo DB Connection Successfull')})
dbobject.on('error' , ()=>{console.log('Mongo DB Connection Failed')})

module.exports = mongoose