import { useState } from "react"
import { CheckCircle, Circle } from "lucide-react"
import { useAuth0 } from "@auth0/auth0-react"


const DSA = () => {
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

  const dsaQuestions = [
  { id: 1, topic: "Arrays", question: "Find the missing number", link: "https://leetcode.com/problems/missing-number/" },
  { id: 2, topic: "Arrays", question: "Kadane's Algorithm", link: "https://leetcode.com/problems/maximum-subarray/" },
  { id: 3, topic: "Arrays", question: "Merge Sorted Arrays", link: "https://leetcode.com/problems/merge-sorted-array/" },
  { id: 4, topic: "Arrays", question: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
  { id: 5, topic: "Arrays", question: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { id: 6, topic: "Arrays", question: "Rotate Array", link: "https://leetcode.com/problems/rotate-array/" },
  { id: 7, topic: "Arrays", question: "Pascal's Triangle", link: "https://leetcode.com/problems/pascals-triangle/" },
  { id: 8, topic: "Arrays", question: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
  { id: 9, topic: "Arrays", question: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
  { id: 10, topic: "Arrays", question: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/" },
  { id: 11, topic: "Strings", question: "Check for Anagram", link: "https://leetcode.com/problems/valid-anagram/" },
  { id: 12, topic: "Strings", question: "Reverse Words in a String", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
  { id: 13, topic: "Strings", question: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
  { id: 14, topic: "Strings", question: "String Compression", link: "https://leetcode.com/problems/string-compression/" },
  { id: 15, topic: "Strings", question: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
  { id: 16, topic: "Strings", question: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/" },
  { id: 17, topic: "Strings", question: "Is Subsequence", link: "https://leetcode.com/problems/is-subsequence/" },
  { id: 18, topic: "Strings", question: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/" },
  { id: 19, topic: "Strings", question: "Implement strStr()", link: "https://leetcode.com/problems/implement-strstr/" },
  { id: 20, topic: "Strings", question: "Integer to Roman", link: "https://leetcode.com/problems/integer-to-roman/" }
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
        {dsaQuestions.map((item) => (
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

export default DSA