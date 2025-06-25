import { useRef } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const cardSectionRef = useRef(null)

  const scrollToCards = () => {
    cardSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const cards = [
    {
      title: "Striver DSA Sheet",
      emoji: "📊",
      link: "/dsa",
    },
    {
      title: "Competitive Programming",
      emoji: "⚔️",
      link: "/cp",
    },
    {
      title: "System Design",
      emoji: "🛠️",
      link: "/design",
    },
    {
      title: "Core CS Subjects",
      emoji: "📚",
      link: "/core",
    },
  ]

  return (
    <div className="min-h-screen px-4 py-10 flex flex-col items-center text-center transition-colors duration-300">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Supercharge Learning with{" "}
        <span className="text-violet-600 dark:text-violet-400">AI</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        Str-ai-ver helps you learn faster, smarter, and deeper using generative AI.
      </p>
      <button
        onClick={scrollToCards}
        className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all"
      >
        Get Started
      </button>

      <div ref={cardSectionRef} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            to={card.link}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="text-4xl mb-3">{card.emoji}</div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{card.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home