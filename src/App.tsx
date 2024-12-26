import { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState<{ sender: string, text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    // Simulate a response from the chatbot
    const botResponse = { sender: 'bot', text: `You asked about: ${input}. Here is some advice...` };
    setMessages([...messages, userMessage, botResponse]);

    setInput('');
  };

  return (
    <div className="chat-container">
      <p>can you see me?</p>
      <h1>Course Advisor Chatbot</h1>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about your courses..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;
