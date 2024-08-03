chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "reviewApplication") {
      // Add your logic here to review the application
      sendResponse({suggestions: "Here are your suggestions..."});
    }
});
// content.js

function getTextBoxContents() {
    // Use a CSS selector to identify the textboxes
    const textboxes = document.querySelectorAll('input[type="text"], textarea');
    let contents = [];
  
    // Iterate over the textboxes and collect their content
    textboxes.forEach((textbox) => {
      contents.push(textbox.value);
    });
  
    return contents;
  }
  
  // Listen for messages from the popup or background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTextBoxContents") {
      const contents = getTextBoxContents();
      sendResponse({contents: contents});
    }
  });
  