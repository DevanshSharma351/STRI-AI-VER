import { useState } from "react"
import { CheckCircle, Circle } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"

const SystemDesign = () => {
  const [completed, setCompleted] = useState([])
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  const toggleComplete = (e, id) => {
  e.preventDefault()
  if (!isAuthenticated) {
    loginWithRedirect()
    return
  }
  setCompleted((prev) =>
    prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
  )
}

  const designTopics = [
    { id: 1, topic: "System Design", question: "Design URL Shortener", link: "https://takeuforward.org/system-design/url-shortener-system-design/" },
    { id: 2, topic: "System Design", question: "Design Instagram", link: "https://takeuforward.org/system-design/instagram-system-design/" },
    { id: 3, topic: "System Design", question: "Design YouTube", link: "https://takeuforward.org/system-design/youtube-system-design/" },
    { id: 4, topic: "System Design", question: "Design WhatsApp", link: "https://takeuforward.org/system-design/whatsapp-system-design/" },
    { id: 5, topic: "System Design", question: "Design Cache System", link: "https://takeuforward.org/system-design/cache-system-design/" },
    { id: 6, topic: "Low Level Design", question: "LLD of Elevator System", link: "https://takeuforward.org/system-design/elevator-low-level-design/" },
    { id: 7, topic: "Low Level Design", question: "LLD of Tic Tac Toe", link: "https://takeuforward.org/system-design/tic-tac-toe-low-level-design/" },
    { id: 8, topic: "Low Level Design", question: "LLD of Parking Lot", link: "https://takeuforward.org/system-design/parking-lot-low-level-design/" },
    { id: 9, topic: "Low Level Design", question: "LLD of Splitwise", link: "https://takeuforward.org/system-design/splitwise-low-level-design/" },
    { id: 10, topic: "Low Level Design", question: "LLD of Snake and Ladders", link: "https://takeuforward.org/system-design/snake-and-ladder-low-level-design/" },
    { id: 11, topic: "System Design", question: "Design Ticket Booking System", link: "https://takeuforward.org/system-design/ticket-booking-system-design/" },
    { id: 12, topic: "System Design", question: "Design Payment Gateway", link: "https://takeuforward.org/system-design/payment-gateway-system-design/" },
    { id: 13, topic: "System Design", question: "Design Uber/Ride Sharing", link: "https://takeuforward.org/system-design/uber-system-design/" },
    { id: 14, topic: "System Design", question: "Design Food Delivery Platform", link: "https://takeuforward.org/system-design/zomato-swiggy-system-design/" },
    { id: 15, topic: "System Design", question: "Design Live Location Sharing", link: "https://takeuforward.org/system-design/live-location-sharing-system-design/" },
    { id: 16, topic: "System Design", question: "Design Analytics Dashboard", link: "https://takeuforward.org/system-design/analytics-dashboard-system-design/" },
    { id: 17, topic: "System Design", question: "Design ChatGPT-like System", link: "https://takeuforward.org/system-design/chatgpt-system-design/" },
    { id: 18, topic: "System Design", question: "Design Social Media Feed", link: "https://takeuforward.org/system-design/social-media-feed-system-design/" },
    { id: 19, topic: "System Design", question: "Design Dropbox", link: "https://takeuforward.org/system-design/dropbox-system-design/" },
    { id: 20, topic: "System Design", question: "Design Ticket Booking v2", link: "https://takeuforward.org/system-design/ticket-booking-system-design/" }
  ]

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-4xl font-bold text-center mb-10 text-violet-600 dark:text-violet-400">
        System Design Tracker
      </h1>

      {!isAuthenticated && (
        <div className="text-center text-red-500 font-semibold mb-6">
          🔒 Please log in to mark questions as completed.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {designTopics.map((item) => (
          <a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-start gap-4 p-5 border rounded-2xl shadow-md transition-all ${
              completed.includes(item.id)
                ? "bg-violet-100 dark:bg-violet-800 border-violet-300 dark:border-violet-700"
                : "bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700"
            }`}
          >
            <div
              onClick={(e) => toggleComplete(e, item.id)}
              className="pt-1 cursor-pointer"
              title="Mark as complete"
            >
              {completed.includes(item.id) ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <Circle className="text-gray-400 dark:text-gray-500" />
              )}
            </div>
            <div>
              <h3 className="text-sm text-gray-500 dark:text-gray-300 font-semibold mb-1">
                {item.topic}
              </h3>
              <p className="text-lg font-medium text-black dark:text-white">
                {item.question}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SystemDesign