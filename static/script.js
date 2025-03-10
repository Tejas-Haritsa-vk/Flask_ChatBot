function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.trim();
    if (!message) return;

    // Add user message to chat
    let chatBox = document.getElementById("chat-box");
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.textContent = "You: " + message;
    chatBox.appendChild(userDiv);
    
    // Send message to server
    fetch("/chat", {
        method: "POST",
        body: JSON.stringify({ message: message }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        // Add bot response to chat
        let botDiv = document.createElement("div");
        botDiv.classList.add("bot");
        botDiv.textContent = data.response;
        chatBox.appendChild(botDiv);
        
        // Auto-scroll to latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    });

    // Clear input field
    inputField.value = "";
}
