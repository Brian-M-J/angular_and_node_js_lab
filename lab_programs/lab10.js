const fs = require('fs');
fs.appendFile('newFile_appended.txt', 'This is the content that will be appended.', (err) => {
	if(err) {
		console.error(err);
		return;
	}
	console.log('File created (or content appended) successfully!');
});
fs.open('newFile_open.txt', 'w', (err, file) => {
	if(err) {
		console.error(err);
		return;
	}
	console.log('File created successfully!');
});
fs.writeFile('newFile_write.txt', 'This is the content that will be written.', (err) => {
	if(err) {
		console.error(err);
		return;
	}
	console.log('File created (or content written) successfully!');
});
