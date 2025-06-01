import { useState, useEffect, useRef } from 'react';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'ai', text: 'Hello! How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null); // For auto-scrolling

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll whenever messages change

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Call our API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      const aiMessage = {
        id: Date.now() + 1, // Ensure unique ID
        sender: 'ai',
        text: data.reply,
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.messagesContainer}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              ...styles.message,
              ...(msg.sender === 'user' ? styles.userMessage : styles.aiMessage),
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <span style={styles.senderName}>{msg.sender === 'user' ? 'You' : 'AI'}: </span>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div style={{ ...styles.message, ...styles.aiMessage, fontStyle: 'italic' }}>
            AI is typing...
          </div>
        )}
        <div ref={messagesEndRef} /> {/* Invisible element for auto-scroll */}
      </div>
      <form onSubmit={handleSubmit} style={styles.inputForm}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={styles.inputField}
          disabled={isLoading}
        />
        <button type="submit" style={styles.sendButton} disabled={isLoading}>
          Send
        </button>
      </form>
    </div>
  );
}

// Basic inline styles (consider using CSS Modules or Tailwind CSS for larger projects)
const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '600px',
    height: '70vh',
    maxHeight: '500px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  messagesContainer: {
    flexGrow: 1,
    padding: '10px 20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#f9f9f9',
  },
  message: {
    padding: '10px 15px',
    borderRadius: '18px',
    maxWidth: '70%',
    wordWrap: 'break-word',
    fontSize: '0.9rem',
  },
  userMessage: {
    backgroundColor: '#007bff',
    color: 'white',
    borderBottomRightRadius: '5px',
  },
  aiMessage: {
    backgroundColor: '#e9ecef',
    color: '#333',
    borderBottomLeftRadius: '5px',
  },
  senderName: {
    fontWeight: 'bold',
    display: 'block',
    marginBottom: '3px',
    fontSize: '0.75rem',
  },
  inputForm: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc',
    backgroundColor: '#fff',
  },
  inputField: {
    flexGrow: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '20px',
    marginRight: '10px',
    fontSize: '0.9rem',
  },
  sendButton: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  },
};
