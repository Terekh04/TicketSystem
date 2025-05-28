import { useState, useRef, useEffect} from 'react'
import { User } from './auth';
import './ChatBot.css'
const apiUrl = import.meta.env.VITE_API_URL;

type Message = {
  text: string
  sender: 'user' | 'bot'
}
interface Props {
  user: User | null;
  onLogin: () => void;
}

export default function ChatBot({ user, onLogin }: Props) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  const updateChatPosition = () => {
    const leftWidth = 64
    const sidebarWidth = sidebarVisible ? 260 : 0
    const effectiveWidth = `calc(50% - ${(leftWidth + sidebarWidth) / 2}px)`
    if (chatContainerRef.current) {
      chatContainerRef.current.style.width = effectiveWidth
    }
  }

  window.addEventListener('resize', updateChatPosition)
  updateChatPosition()

  return () => window.removeEventListener('resize', updateChatPosition)
}, [sidebarVisible])

  const hasMessages = messages.length > 0


  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = { text: input, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    try {
      const res = await fetch(`${apiUrl}/chat`, {
        method: 'POST',
        credentials: 'include',
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
  <div className="layout">
    <aside className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
  <div className="aside-content">
    <div className="top">
      <button className="toggle toggle-open" >☰</button>
      <button id="slidebar-end" className="toggle toggle-close"  onClick={() => setSidebarVisible(false)}>☰</button>
    </div>

    <div className="chats"></div>

    <div className="bottom">
      <button className="toggle toggle-open">☰</button>
    </div>
  </div>
</aside>

    <main className="main">
        <div className="left">
          <div className="top">
            <button className="toggle toggle-open">☰</button>
            <button id="slidebar-start"className="toggle toggle-open" onClick={() => setSidebarVisible(true)}>☰</button>
          </div>
          <button className="toggle toggle-open">☰</button>
        </div>
        <div className="content">
            <div 
            className={`chat-container ${hasMessages ? 'bottom' : 'centered'}`}
            ref={chatContainerRef}>
              <div className="chat">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${msg.sender === 'user' ? 'user' : 'bot'}`}
                    >
                      <span
                      >
                    {msg.text}
                      </span>
                </div>
              ))}

              </div>
              <div className="input-container">
                <span className={`starting-text ${hasMessages ? 'hidden' : 'visible'}`}>Need some support?</span>
                <div className="input-wrapper">
                  <input type="text"
                    placeholder="Ask a question"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}/>
                  <button className="send-button" onClick={sendMessage}>➤</button>
                </div>
              </div>
            </div>
          </div>
    </main>
  </div>

  )
}