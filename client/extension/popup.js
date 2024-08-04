document.getElementById('copyButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: copyAndSendTextareasAndShowSidebar
        });
    });
});

function copyAndSendTextareasAndShowSidebar() {
    function showSidebar(content) {
        let sidebarContainer = document.getElementById('sidebar-container');
        if (!sidebarContainer) {
            sidebarContainer = document.createElement('div');
            sidebarContainer.id = 'sidebar-container';
            sidebarContainer.style = `
                position: fixed;
                top: 0;
                right: 0;
                width: 300px;
                height: 100%;
                background-color: white;
                box-shadow: -2px 0 5px rgba(0,0,0,0.5);
                overflow-y: auto;
                z-index: 1000;
                padding: 20px;
            `;
            document.body.appendChild(sidebarContainer);
        }
        
        sidebarContainer.innerHTML = `
            <h2>API Response</h2>
            <div id="sidebar-content">${content}</div>
            <button id="close-sidebar">Close</button>
        `;
        
        document.getElementById('close-sidebar').addEventListener('click', () => {
            sidebarContainer.style.display = 'none';
        });

        sidebarContainer.style.display = 'block';
    }

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
    // document.body.removeChild(textarea);
    alert('Copied text to clipboard!\nSending text to API... \n' + allText);
    
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
        const message = JSON.stringify(data);
        showSidebar(message);
    })
    .catch((error) => {
        // alert(error);
        const message = error.toString();
        showSidebar(message);
    });
}
