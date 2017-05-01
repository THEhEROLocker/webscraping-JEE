var request = require('request');

request.post({
'headers': {
'Host': 'resultsarchives.nic.in',
'Connection': 'keep-alive',
'Content-Length': 23,
'Cache-Control': 'max-age=0',
'Origin': 'http://resultsarchives.nic.in',
'Upgrade-Insecure-Requests': 1,
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
'Content-Type': 'application/x-www-form-urlencoded',
'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
'Referer': 'http://resultsarchives.nic.in/cbseresults/cbseresults2014/class12/cbse122014_total.htm'
},
url: 'http://resultsarchives.nic.in/cbseresults/cbseresults2014/class12/cbse122014_total.asp', 
form: {
    'regno': '4667608',
    'B1': 'Submit' }
}, function(objectError, objectResponse, strContent) 
    { // check whether there is an error in objectError // check the response status within objectResponse
        console.log(strContent); 
    });