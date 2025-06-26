import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const Chat = () => {
  const { isAuthenticated, loginWithRedirect, isLoading, user } = useAuth0()
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true)
    setError("")

    try {
      const key = import.meta.env.VITE_GEMINI_API_KEY;
      const link = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`
      const res = await fetch(
        link,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: input }],
              },
            ],
          }),
        }
      )

      const data = await res.json()
      console.log("Gemini Response:", data)

      const aiText = data?.candidates?.[0]?.content?.parts?.[0]?.text
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: aiText || "⚠️ No response from Gemini.",
        },
      ])
    } catch (err) {
      console.error("Gemini API Error:", err)
      setError("❌ Gemini API Error: " + err.message)
    }

    setLoading(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-2xl font-semibold mb-4">
          🔒 Please log in to use the AI Assistant
        </h1>
        <button
          onClick={loginWithRedirect}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Login with Auth0
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-4 py-6 bg-white dark:bg-zinc-900 text-black dark:text-white">
      <div className="text-sm text-center mb-2">
        Logged in as: <span className="font-semibold">{user.name}</span>
      </div>
      <h1 className="text-3xl font-bold text-center mb-6">💬 AI Chat Assistant</h1>

      {error && (
        <div className="text-center text-red-500 font-medium mb-4">{error}</div>
      )}

      <div className="max-w-2xl mx-auto space-y-4 mb-20">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl whitespace-pre-wrap ${
              msg.role === "user"
                ? "bg-violet-100 dark:bg-violet-700 text-right"
                : "bg-gray-200 dark:bg-zinc-700 text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 px-4 py-4 border-t dark:border-zinc-700">
        <div className="max-w-2xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 rounded-lg border dark:border-zinc-700 bg-white dark:bg-zinc-800 text-black dark:text-white"
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat