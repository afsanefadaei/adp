var MongoClient = require('mongodb').MongoClient;
//Create a database named "MyBlog":
var url = "mongodb://localhost:27017/MyBlog";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
