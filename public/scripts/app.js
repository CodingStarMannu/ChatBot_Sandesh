const socket = io();

function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message !== '') {
    appendMessage('You', message, true);
    socket.emit('userMessage', message);
    messageInput.value = '';
  }
}

function appendMessage(sender, text, isUser) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Socket.io event listeners
socket.on('botMessage', (message) => {
  appendMessage('Bot', message, false);
});
