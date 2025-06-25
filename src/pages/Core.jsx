import { useEffect, useState } from "react"
import { CheckCircle, Circle } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"
import { fetchProgress, updateProgress } from "../lib/progress"

const Core = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0()
  const [completed, setCompleted] = useState([])

  const coreTopics = [
  { id: 1, topic: "Operating Systems", question: "Process vs Thread", link: "https://takeuforward.org/operating-system/process-vs-thread/" },
  { id: 2, topic: "Operating Systems", question: "CPU Scheduling Algorithms", link: "https://takeuforward.org/operating-system/cpu-scheduling-algorithms/" },
  { id: 3, topic: "DBMS", question: "Normalization in DBMS", link: "https://takeuforward.org/dbms/normalization-in-dbms/" },
  { id: 4, topic: "DBMS", question: "Transactions and Concurrency", link: "https://takeuforward.org/dbms/transactions-in-dbms/" },
  { id: 5, topic: "Computer Networks", question: "OSI vs TCP/IP Model", link: "https://takeuforward.org/computer-network/osi-vs-tcp-ip-model/" },
  { id: 6, topic: "Computer Networks", question: "IP Addressing", link: "https://takeuforward.org/computer-network/ip-addressing/" },
  { id: 7, topic: "Computer Architecture", question: "Pipelining Concepts", link: "https://takeuforward.org/computer-architecture/pipelining-in-computer-architecture/" },
  { id: 8, topic: "Computer Architecture", question: "Cache Memory", link: "https://takeuforward.org/computer-architecture/cache-memory/" },
  { id: 9, topic: "Operating Systems", question: "Deadlock Handling", link: "https://takeuforward.org/operating-system/deadlock-handling/" },
  { id: 10, topic: "DBMS", question: "ER Diagrams", link: "https://takeuforward.org/dbms/er-diagrams-in-dbms/" },
  { id: 11, topic: "Computer Networks", question: "Subnetting", link: "https://takeuforward.org/computer-network/subnetting-in-cn/" },
  { id: 12, topic: "Computer Architecture", question: "Instruction Set Architecture", link: "https://takeuforward.org/computer-architecture/isa-in-ca/" },
  { id: 13, topic: "Operating Systems", question: "Memory Management", link: "https://takeuforward.org/operating-system/memory-management-os/" },
  { id: 14, topic: "DBMS", question: "Indexing", link: "https://takeuforward.org/dbms/indexing-in-dbms/" },
  { id: 15, topic: "Computer Networks", question: "Routing Algorithms", link: "https://takeuforward.org/computer-network/routing-algorithms/" },
  { id: 16, topic: "Computer Architecture", question: "Hardwired vs Microprogrammed Control", link: "https://takeuforward.org/computer-architecture/control-units/" },
  { id: 17, topic: "Operating Systems", question: "Paging vs Segmentation", link: "https://takeuforward.org/operating-system/paging-vs-segmentation/" },
  { id: 18, topic: "DBMS", question: "SQL vs NoSQL", link: "https://takeuforward.org/dbms/sql-vs-nosql/" },
  { id: 19, topic: "Computer Networks", question: "UDP vs TCP", link: "https://takeuforward.org/computer-network/udp-vs-tcp/" },
  { id: 20, topic: "Computer Architecture", question: "RISC vs CISC", link: "https://takeuforward.org/computer-architecture/risc-vs-cisc/" },
]


  useEffect(() => {
    const loadProgress = async () => {
      if (isAuthenticated && user?.email) {
        const saved = await fetchProgress(user.email)
        setCompleted(saved)
      }
    }
    loadProgress()
  }, [isAuthenticated, user])

  const toggleComplete = async (e, id) => {
    e.preventDefault()
    if (!isAuthenticated) {
      loginWithRedirect()
      return
    }

    const updated = completed.includes(id)
      ? completed.filter((item) => item !== id)
      : [...completed, id]

    setCompleted(updated)

    // Save to Supabase
    await updateProgress(user.email, updated)
  }

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-violet-600 dark:text-violet-400">
        Core CS Subjects Tracker
      </h1>

      {!isAuthenticated && (
        <div className="text-center text-red-500 font-semibold mb-6">
        Please log in to mark questions as completed.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {coreTopics.map((item) => (
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
              title={isAuthenticated ? "Mark as complete" : "Login to mark complete"}
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

export default Core