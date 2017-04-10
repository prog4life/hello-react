var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, process.env.IP || 'http://localhost', () => {
  console.log('Server is up on: ', process.env.IP, ':', process.env.PORT);
});