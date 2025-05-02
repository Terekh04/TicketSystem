import { useState } from 'react'
 
const apiUrl = import.meta.env.VITE_API_URL;

type Message = {
  text: string
  sender: 'user' | 'bot'
}

export default function ChatBot() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = { text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    try {
      const res = await fetch('https://ticketsystem-qfj9.onrender.com/chat', {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()
      const botMessage: Message = { text: data.reply, sender: 'bot' }
      setMessages(prev => [...prev, botMessage])
    } catch (err) {
      console.error('Ошибка запроса:', err)
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>🤖 Gemini Chat</h1>

      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        height: '300px',
        overflowY: 'auto',
        marginBottom: '1rem'
      }}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.sender === 'user' ? 'right' : 'left',
              margin: '0.5rem 0'
            }}
          >
            <span
              style={{
                background: msg.sender === 'user' ? '#aee1f9' : '#e1e1e1',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                display: 'inline-block',
                maxWidth: '80%'
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Напиши что-нибудь..."
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          style={{ width: '80%', padding: '0.5rem' }}
        />
        <button onClick={sendMessage} style={{ padding: '0.5rem 1rem', marginLeft: '0.5rem' }}>
          ➤
        </button>
      </div>
    </div>
  )
}
