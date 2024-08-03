document.getElementById('reviewButton').addEventListener('click', () => {
    // Get the active tab
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      // Send a message to the content script to get the text box contents
      chrome.tabs.sendMessage(tabs[0].id, {action: "getTextBoxContents"}, (response) => {
        if (response && response.contents) {
          displayContents(response.contents);
        }
      });
    });
  });
  
function displayContents(contents) {
    const suggestionsDiv = document.getElementById('suggestions');
    suggestionsDiv.innerHTML = ""; // Clear previous contents
    contents.forEach((content, index) => {
    const paragraph = document.createElement('p');
      paragraph.textContent = `Textbox ${index + 1}: ${content}`;
      suggestionsDiv.appendChild(paragraph);
    });
}
  