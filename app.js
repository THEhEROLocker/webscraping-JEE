var request = require('request');

for(var i=12480000;i<12482000;++i){
    (function(i){request.post({
    'headers': {
    'Host': 'resultsarchives.nic.in',
    'Connection': 'keep-alive',
    'Content-Length': 43,
    'Cache-Control': 'max-age=0',
    'Origin': 'http://resultsarchives.nic.in',
    'Upgrade-Insecure-Requests': 1,
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Referer': 'http://resultsarchives.nic.in/cbseresults/cbseresults2014/jee/jee_cbse_2014.htm'
    },
    url: 'http://resultsarchives.nic.in/cbseresults/cbseresults2014/jee/jee_cbse_2014.asp', 
    form: {
        'regno': i,
        'dob': '08/03/1997',
        'B2': 'Submit' }
    }, 
    function(objectError, objectResponse, strContent) 
    {
        console.log(i);

        
        if(objectResponse !== undefined && objectResponse.body.search('ROHAN') != -1)
        {
            console.log(i);
        }  
               
    });
    })(i);
}

