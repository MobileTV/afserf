const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.static('static'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/index.html')
    console.log("Login to '/'");

});
app.listen(PORT, function(req) {
    console.log(`Starting server on port ${PORT}`)
});