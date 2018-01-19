try{
  //read args
  //const system = require('system');
  //if (system.args.length !== 5) {
  //  phantom.exit(1);
  //}
  /*const html = system.args[1];
  const width = system.args[2];
  const height = system.args[3];
  const zoom = system.args[4];
  const name = system.atgs[5];
*/
  //config page
  const page = require('webpage').create();
  page.viewportSize = {width: 660, height: 480};
  page.clipRect = {top: 0, left: 0, width: 660, height: 480};
  //page.zoomFactor = zoom;

  page.open('http://google.com', function() {
    page.render('/tmp/output1.png');
    phantom.exit();
  });

/*
let pendingRequests = 0;
let hasEmbeds = false;
*/
/*page.onResourceRequested = (request) => {
  pendingRequests++;
  hasEmbeds = true;
}

page.onResourceReceived = (response) => {
  pendingRequests--;
}

const wait = window.setTimeout(() => {
  if (pendingRequests > 0) {
    wait();
  }
  else {
    //everything is loaded

    if (status !== 'success') {
      phantom.exit(1);
    }
    else {
      window.setTimeout(() => {
        page.render('screenshot.png');
        page.close();
        phantom.exit()
      }, hasEmbeds ? 200 : 1); //a little extra time to load all iframes
    }
  }
}, 100);


else {

  page.viewportSize = {width: width * zoom, height: height * zoon};
  page.clipRect = {top: 0, left: 0, width: page.viewportSize.width, height: page.viewportSize.height};
  page.zoomFactor = zoom;

  page.open("about:blank", status => {
    page.content = html;
    wait();
  });
}*/
}
catch {
  phantom.exit(1);
}
