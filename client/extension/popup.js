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
        

        // Create the sidebar container if it doesn't exist
        if (!document.getElementById('sidebar-container')) {
            const sidebarContainer = document.createElement('div');
            sidebarContainer.id = 'sidebar-container';
            sidebarContainer.style.cssText = `
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

            // Load the sidebar content
            loadSidebarContent();
        } else {
            // If the sidebar already exists, just load the content
            loadSidebarContent();
        }
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
        dogClose = 'images/dog-close.svg';
        dogOpen = 'images/dog-open.svg';
        sidebarContainer.innerHTML = `
            <div id="sidebar-container">
                <div class="header">
                    <div class="logo-container">
                        <img src=${dogClose} alt="Scholar Pups Logo 1" class="logo logo1">
                        <img src=${dogOpen} alt="Scholar Pups Logo 2" class="logo logo2">
                    </div>
                    <h2>Your personal scholarship coach</h2>
                </div>
                <div id="sidebar-content">${content}</div>
                <button id="close-sidebar">Close</button>
            </div>
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
