const express = require('express')
const randomLocation = require('random-location')
var bodyParser = require('body-parser')
const moment = require('moment')
const fetch = require('node-fetch')
const MongoClient = require('mongodb').MongoClient
const app = express()
const port = 456
const P = {
    latitude: 45.888580 , 
    longitude: 3.104450
  }

 app.use(bodyParser.json())
   
app.get('/api',(req,response) => {
    var url = "mongodb://ugkahetxjvtw5hpvyiks:D0590lAevCRQ5lz1SpYp@bp79hnjilr4abg1-mongodb.services.clever-cloud.com:27017/bp79hnjilr4abg1"
    var client = new MongoClient(url,{useNewUrlParser : true , useUnifiedTopology : true});
    client.connect((err , db) => {
        if(err){
            console.log("unable to connect to the server" , err)
        }else {
            console.log("connection established")
            var db = client.db('bp79hnjilr4abg1')
            var collection = db.collection('locations')
            collection.find({}).toArray((err,res) => {
                if(err){
                    console.log('err')
                }
                else{
                    response.send(res)
                }
            })
           
        }
       
        

    })
    

})
app.post('/api',(req,res) => {
    var url = "mongodb://ugkahetxjvtw5hpvyiks:D0590lAevCRQ5lz1SpYp@bp79hnjilr4abg1-mongodb.services.clever-cloud.com:27017/bp79hnjilr4abg1"
    var client = new MongoClient(url,{useNewUrlParser : true , useUnifiedTopology : true});
    client.connect((err , db) => {
        if(err){
            console.log("unable to connect to the server" , err)
        }else {
            console.log("connection established")
            var db = client.db('bp79hnjilr4abg1')
            var collection = db.collection('locations')
            var location = req.body
            
            collection.insertOne(location)
            .then((response) => { res.sendStatus(200) })
            .catch((err) => {console.log(err)})
            
           
            
        }
        
       
    })


})
   
   
app.get('/', (req, res) => {
  res.send('Welcome')
})



app.listen(port | process.env.PORT, () => console.log(`Example app listening at http://localhost:${port}`))