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
    alert('Copied text to clipboard!\nSending text to API... \n' + allText);
    
    const apiUrl = 'http://127.0.0.1:8000/review';  
    alert('Sending text to API: ' + allText);
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: allText }) 
    })
    .then(response => {
        console.log('Response received:', response);
        return response.json();
    })
    .then(data => {
        console.log('Data received:', data);
        alert('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error:', error);
    });

    
}
