//var runner = require('./src/runner');
const exec = require('child_process').exec;
const fs = require('fs');

// App entry Point
exports.handler = (event, context, callback) => {
    try{
        //extract params
        const params = event.queryStringParameters;
        const HTML = event.body;

        //set up AWS to  wait till we complete and call callback
        const eventLoop = setInterval(function(){}, 1000);
        context.callbackWaitsForEmptyEventLoop = false;

        //run phantomjs
        const cmd = exec(
          `./lib/phantomjs ./src/screenshot.js`,// "${HTML}" ${params.width} ${params.height} ${params.zoom} "output"`,
          (error, stdout, stderr) => {
            if (error) {
              //failed
              callback(null, `500, ${error}, ${stderr}, ${stdout}`)
            }
            else {
              //suceeded
              try {
                fs.readdir('/tmp', function(err, items) {
                    callback(null, `200, ${err}, ${items.join(', ')}`);
                });
              }
              catch(err){
                  callback(null, `500, postprocessor: ${err}`)
              }
              //const fileBuffer = fs.readFileSync('./tmp/output.png');
              //callback(null, `200, ${error}, ${stderr}, ${stdout}`);//fileBuffer);
            }
          }
        );
    }
    catch(err){
        callback(null, `500, global: ${err}`)
    }
};
