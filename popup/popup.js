let changeColor = document.getElementById("changeColor");
let start = document.getElementById("start");
let stop = document.getElementById("stop");

start.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startMe,
  });
});

stop.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: stopMe,
  });
});

function startMe() {
  console.log('Started Capturing HAR File');
  chrome.storage.sync.get(['color'], function(result) {
    console.log('Value currently is ' + result.color);
  });
}

function stopMe() {
  console.log('Stopped Capturing HAR File');
}

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(request, sender, senderResponse) {
  console.log(request)
  console.log("sender")
}