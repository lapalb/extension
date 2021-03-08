let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
  chrome.action.setBadgeText({ text: "4" });
  chrome.action.onClicked.addListener(buttonClicked)
  function buttonClicked(tab) {
    console.log('button Clicked')
  
    chrome.tabs.sendMessage(tab.id,"hello")
  }
});



