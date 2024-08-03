chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "reviewApplication") {
      // Add your logic here to review the application
      sendResponse({suggestions: "Here are your suggestions..."});
    }
});
  