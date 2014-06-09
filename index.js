// Howdy! How is it going? I hope you are having a good day. Been trying to
// set up a testing database with some basic fixtures, but turns out it is
// a little cumbersome, right? Well, fear not, because this little block of
// code does just that. Just call it with the database you wanna wipe off,
// pass it some fixtures in the form of a hash; and a done callback if you
// so desire. You're good to go. Have fun!
//
// fixtures hash has too look like this:
//
// {
// 	  'User': [
// 	  	  { username: 'foo' },
// 	  	  { username: 'bar' }
// 	  ],
//
// 	  'Post': [
// 	      { title: 'domestical robots are happy' }
// 	  ]
// };

var mongoose = require('mongoose'),
	Q = require('Q');

module.exports = function mongoFixtures(uri, fixtures, done) {
	mongoose.connect(uri, function () {
		mongoose.connection.db.dropDatabase(function () {
			var schemas = {},
				createPromises = [];

			Object.keys(fixtures).forEach(function (collectionName) {
				schemas[collectionName] = mongoose.model(collectionName,
					new mongoose.Schema({}, { strict: false }));
				fixtures[collectionName].forEach(function (document) {
					createPromises.push(schemas[collectionName].create(document));
				});
			});

			Q.all(createPromises).then(function (res) {
				done();
			});
		});
	});
};
