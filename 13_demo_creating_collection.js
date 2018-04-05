var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MyBlog");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("User Collection created!");
    db.close();
  });
}); 