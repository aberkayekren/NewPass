//Background.js ile bir işimiz olmadığından şimdilik rastegele bir mesaj yazdıralım
chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
  chrome.tabs.sendMessage(tabId, "some-random-message")
})