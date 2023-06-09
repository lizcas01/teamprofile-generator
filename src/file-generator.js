const fs = require('fs');

const fileGenerator = (fileContent) => {
	fs.fileGenerator('./dist/html', fileContent, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log("Employee profile has been generated!");
		}
	});
};

module.exports = fileGenerator;
