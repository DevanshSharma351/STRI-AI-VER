import { useState } from "react"
import { CheckCircle, Circle } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"


const CP = () => {
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

  const cpTopics = [
    { id: 1, topic: "Two Pointers", question: "Two Sum Problem", link: "https://leetcode.com/problems/two-sum/" },
    { id: 2, topic: "Sliding Window", question: "Maximum Sum Subarray of Size K", link: "https://www.geeksforgeeks.org/find-maximum-average-subarray-of-k-length/" },
    { id: 3, topic: "Binary Search", question: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
    { id: 4, topic: "Bit Manipulation", question: "Single Number II", link: "https://leetcode.com/problems/single-number-ii/" },
    { id: 5, topic: "Greedy", question: "Fractional Knapsack", link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/" },
    { id: 6, topic: "Recursion", question: "Subsets of a Set", link: "https://leetcode.com/problems/subsets/" },
    { id: 7, topic: "Backtracking", question: "N-Queens Problem", link: "https://leetcode.com/problems/n-queens/" },
    { id: 8, topic: "DP", question: "0/1 Knapsack Problem", link: "https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/" },
    { id: 9, topic: "DP", question: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/" },
    { id: 10, topic: "Graphs", question: "Detect Cycle in Directed Graph", link: "https://www.geeksforgeeks.org/detect-cycle-in-a-graph/" },
    { id: 11, topic: "Graphs", question: "Shortest Path using Dijkstra's Algorithm", link: "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/" },
    { id: 12, topic: "Trees", question: "Lowest Common Ancestor in BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
    { id: 13, topic: "Heaps", question: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/" },
    { id: 14, topic: "Tries", question: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
    { id: 15, topic: "Union Find", question: "Number of Islands II", link: "https://leetcode.com/problems/number-of-islands-ii/" },
    { id: 16, topic: "Segment Tree", question: "Range Minimum Query", link: "https://www.geeksforgeeks.org/segment-tree-set-1-range-minimum-query/" },
    { id: 17, topic: "Binary Lifting", question: "LCA in Tree using Binary Lifting", link: "https://codeforces.com/blog/entry/102103" },
    { id: 18, topic: "Maths", question: "Sieve of Eratosthenes", link: "https://www.geeksforgeeks.org/sieve-of-eratosthenes/" },
    { id: 19, topic: "Geometry", question: "Convex Hull", link: "https://www.geeksforgeeks.org/convex-hull-set-1-importance-geometric-algorithms/" },
    { id: 20, topic: "Advanced Graphs", question: "Tarjan’s Strongly Connected Components", link: "https://leetcode.com/problems/critical-connections-in-a-network/" }
  ]

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-900 dark:to-zinc-800">
      <h1 className="text-4xl font-bold text-center mb-10 text-violet-600 dark:text-violet-400">
        Competitive Programming Tracker
      </h1>

      {!isAuthenticated && (
        <div className="text-center text-red-500 font-semibold mb-6">
          🔒 Please log in to mark questions as completed.
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {cpTopics.map((item) => (
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

export default CP