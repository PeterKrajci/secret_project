//nieco
/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://User1:<password>@test.fnhqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/

//mongodb+srv://User1:<password>@test.fnhqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    comments:[
        { body: String, 
        date: Date }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    likes: Number,
    img:
    {
        data: Buffer,
        contentType: String
    }
})