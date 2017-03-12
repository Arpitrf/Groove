var google = require('googleapis');
//google.options({proxy: 'http://172.31.1.3:8080/'});
var express= require('express');
var bodyParser = require('body-parser');
var app = express();
var request = require('request');
var x;
var user_name;
var youtube = google.youtube({ version: 'v3', auth: 'AIzaSyAoN1RLSoqgf7ujPK-2cfT8pz4qQR1_tvg' });
app.listen(3000);

app.use(express.static('./Public'));
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.get('/', function(req,res) {
    res.sendFile(path);
 });
var path = __dirname + '/login.html';

app.post('/index', function(req, res) {
  user_name = req.body.firstname;
  res.redirect('new.html');
});

app.get("/user", function(req, res) {
  res.send(user_name);
});

app.get('/search/:query', function(req, res) {
  console.log(req.params);
  var results = youtube.search.list({part : 'id,snippet', q: req.params.query, maxResults: 25});
  x = results.url.href;
  request({url: x, json: true}, function(err, localres, json) {
    if (err) {
      throw err;
    }
    res.send(json.items[0].id.videoId);
  });
});


