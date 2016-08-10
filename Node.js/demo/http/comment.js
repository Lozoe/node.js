var http = require('http');
var querystring = reqiure('querystring');
var postData = querystring.stringify({
    msg:"how are you"
});

var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function(chunk)  {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });
    res.on('end', function()  {
        console.log('No more data in response.ended!');
    });
});
req.on('error', function(e)  {
    console.log('Error: '+ e.message);
});
req.write(postData);
req.end();