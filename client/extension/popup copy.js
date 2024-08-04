document.getElementById('copyButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: copyAndSendTextareas
        });
    });
});

function copyAndSendTextareas() {
    const textareas = document.querySelectorAll('textarea');
    let allText = '';
    textareas.forEach(textarea => {
        allText += textarea.value + '\n';
    });

    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    textarea.value = allText;
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    // alert('Copied text to clipboard!\nSending text to API... \n' + allText);
    
    const apiUrl = 'http://127.0.0.1:8000/review';  // Ensure your FastAPI server is running on this URL
    // alert('Sending text to API:' + allText);

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: allText })  // Sending the text as the 'question' parameter
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // alert('response is coming');
        return response.json();
    })
    .then(data => {
        // alert(data);
        message = JSON.stringify(data)
        const responseContainer = document.getElementById('response-container');
        responseContainer.textContent = message;
        responseContainer.style.color = message.startsWith('Error:') ? 'red' : 'green';
    })
    .catch((error) => {
        // alert(error);
        message = error;
        const responseContainer = document.getElementById('response-container');
        responseContainer.textContent = message;
        responseContainer.style.color = message.startsWith('Error:') ? 'red' : 'green';
    });

    
}
