chrome.devtools.panels.create("vManage", null, "/devtool/panel.html", null);

function startMe() {
  console.log('Started Capturing HAR File');
  var a = chrome.devtools.network.getHAR();
}
debugger
function stopMe() {
  console.log('Stopped Capturing HAR File');
}