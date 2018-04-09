var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
	var dbo = db.db("MyBlog");
	var query = { name: "Leonardo" };
	var andQuery = {title: "sampleTitle1", likes: 10}
	var orQuery = {
		$or:[
		 {title: "sampleTitle1"}, {likes: 10}
		]
	}
	dbo.collection("users").find(query).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});
	dbo.collection("posts").find(andQuery).toArray(function(err, result2) {
		if (err) throw err;
		console.log("******");
		console.log(result2);
		console.log("******");
		db.close();
	});
});
