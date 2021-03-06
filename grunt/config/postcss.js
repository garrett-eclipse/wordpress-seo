var autoprefixer = require( "autoprefixer" );

// https://github.com/nDmitry/grunt-postcss
module.exports = {
	options: {
		processors: [
			autoprefixer( { browsers: "last 2 versions, IE >= 11" } ),
		],
	},
	build: {
		src: "<%= files.css %>",
	},
};
