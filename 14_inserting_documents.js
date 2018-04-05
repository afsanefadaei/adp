var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var ObjectId = require('mongodb').ObjectID;

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db('MyBlog');
  var myobj = { title: 'Leonardo', sn: 'Cohen' , email: 'Leonardocohen@hotmail.com', admin: false, gender: 'male'};
  dbo.collection('users').insertOne(myobj, function(err, res) {

    if (err) throw err;
    console.log('1 user inserted');
    db.close();
  });

   var myobj2 = [
				    { 	title: 'sampleTitle', 
				    	content: 'sampleContent',
				    	likes: 10, 
						user_id: ObjectId("5ac63df8dc084421ecaef433"),
						comments: [	{   
				                        user_id: ObjectId("5ac642d8b449561cb8e40f32"),
				                        comment: 'have fun',
				                        dateCreated: new Date(2013,11,10,2,35)
				                    },
				    				{   
				                        user_id: ObjectId("5ac63e690e7af808609475cb"),
				                        comment: 'Not bad',
				                        dateCreated: new Date(2013,11,10,2,35)
				                    }
				                  ]
					},
				    { 	
				        title: 'sampleTitle1', 
				    	content: 'sampleContent1',
				    	likes: 20, 
				    	user_id: ObjectId("5ac63e690e7af808609475cb"),
				    	tags: ['footbal','player'],
				    	comments: [	{   
				                        user_id: ObjectId("5ac642d8b449561cb8e40f32"),
				                        comment: 'have fun again',
				                        dateCreated: new Date(2013,11,10,2,35)
				                    },
				    				{   
				                        user_id: ObjectId("5ac63df8dc084421ecaef433"),
				                        comment: 'Not bad again',
				                        dateCreated: new Date(2013,11,10,2,35)
				                    }
				                  ]
				    },
				    { 	
				        title: 'sampleTitle2', 
				    	content: 'sampleContent2',
				    	likes: 30,
				    	rate: 3.3,
				    	user_id: ObjectId("5ac63e740c169911b460ab0d"),
				    	comments: [	{   
				                        user_id: ObjectId("5ac642d8b449561cb8e40f32"),
				                        comment: 'Yessssssss',
				                        dateCreated: new Date(2013,11,10,2,35)
				                    }
				                  ]
				    }
				]
  dbo.collection('posts').insertMany(myobj2, function(err, res) {
    if (err) throw err;
    console.log('Number of documents inserted: ' + res.insertedCount);
    db.close();
  });

}); 
