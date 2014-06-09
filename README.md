# Mongo Fixtures
Let's you **reset your testing database** with **fixtures**. A common use-case
is integration testing. Before firing your tests, you want your testing database
to be in a pre-configured state. To do simply do:

~~~~javascript
var mongoFixtures = require('mongo_fixtures');

mongoFixtures('mongodb://localhost/testing_db', {
	'User': [
		{ username: 'foo' },
		{ username: 'bar' }
	],

	'Coffee': [
		{ from: 'brazil' }
	]
}, function () {
	console.log('done');
});
~~~

The above resets any collection in `testing_db`, and inserts in `users` and
`coffees` the given documents.

Have a great day!

## License

        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.