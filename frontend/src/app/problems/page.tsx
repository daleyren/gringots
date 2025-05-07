"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { NavBar } from "@/components/navbar"

type Difficulty = "Easy" | "Medium" | "Hard"

type Question = {
  id: number
  title: string
  difficulty: Difficulty
  starred: boolean
}

const sampleQuestions: Question[] = [
  { id: 1, title: "DCF Walkthrough", difficulty: "Medium", starred: false },
  { id: 2, title: "Accretion/Dilution", difficulty: "Hard", starred: true },
  { id: 3, title: "Enterprise Value vs Equity Value", difficulty: "Easy", starred: false },
  { id: 4, title: "LBO Assumptions", difficulty: "Medium", starred: false },
  { id: 5, title: "Walk Me Through a Merger Model", difficulty: "Hard", starred: false },
  { id: 6, title: "Why Use EV/EBITDA Over P/E?", difficulty: "Medium", starred: false },
  { id: 7, title: "Negative Enterprise Value", difficulty: "Easy", starred: false },
  { id: 8, title: "How to Value a Pre-Revenue Startup", difficulty: "Hard", starred: false },
  { id: 9, title: "Walk Me Through a DCF Terminal Value", difficulty: "Medium", starred: false },
  { id: 10, title: "How Depreciation Affects the Three Statements", difficulty: "Medium", starred: false },
  { id: 11, title: "What Happens When Inventory Goes Up?", difficulty: "Easy", starred: false },
  { id: 12, title: "Impact of Debt Repayment on Cash Flow", difficulty: "Medium", starred: false },
  { id: 13, title: "Leveraged vs Unleveraged Free Cash Flow", difficulty: "Hard", starred: false },
  { id: 14, title: "Working Capital Adjustments", difficulty: "Medium", starred: false },
  { id: 15, title: "Tax Shield in an LBO", difficulty: "Hard", starred: false },
  { id: 16, title: "Walk Me Through a $10 Depreciation", difficulty: "Easy", starred: false },
  { id: 17, title: "Why Use EV Instead of Market Cap?", difficulty: "Easy", starred: false },
  { id: 18, title: "How Would You Value a Bank?", difficulty: "Hard", starred: false },
  { id: 19, title: "Comparable Company Analysis Steps", difficulty: "Easy", starred: false },
  { id: 20, title: "Walk Me Through a Precedent Transaction", difficulty: "Medium", starred: false },
  { id: 21, title: "Sources and Uses of Funds in LBO", difficulty: "Medium", starred: false },
  { id: 22, title: "Bridge from EBIT to Net Income", difficulty: "Medium", starred: false },
  { id: 23, title: "How Goodwill Is Created", difficulty: "Easy", starred: false },
  { id: 24, title: "Diluted Shares Calculation", difficulty: "Hard", starred: false },
  { id: 25, title: "What Makes a Good LBO Candidate?", difficulty: "Easy", starred: false },
  { id: 26, title: "Walk Me Through an IPO Process", difficulty: "Medium", starred: false },
  { id: 27, title: "How Do Operating Leases Affect Valuation?", difficulty: "Hard", starred: false },
  { id: 28, title: "Impact of Stock Buybacks", difficulty: "Medium", starred: false },
  { id: 29, title: "Synergies in M&A", difficulty: "Medium", starred: false },
  { id: 30, title: "Why Use a Merger Instead of an Asset Purchase?", difficulty: "Hard", starred: false },
]


export default function QuestionListPage() {
  const [questions, setQuestions] = useState<Question[]>(sampleQuestions)

  const toggleStar = (id: number) => {
    setQuestions(prev =>
      prev.map(q =>
        q.id === id ? { ...q, starred: !q.starred } : q
      )
    )
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-800">
        <NavBar />
      </header>

      <main className="bg-zinc-800 min-h-screen pt-20 px-6 text-zinc-100">
        <div className="max-w-5xl mx-auto mt-16">
          <h1 className="text-3xl font-semibold text-white mb-6">Question Bank</h1>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr className="text-sm text-zinc-400">
                  <th className="px-2">#</th>
                  <th className="px-2">Title</th>
                  <th className="px-2">Difficulty</th>
                  <th className="px-2 text-center">Star</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q) => (
                  <tr
                    key={q.id}
                    className="bg-zinc-800 hover:bg-zinc-700 transition rounded-md text-sm"
                  >
                    <td className="px-2 py-3">{q.id}</td>
                    <td className="px-2 py-3 font-medium text-white">{q.title}</td>
                    <td className="px-2 py-3">
                      <span
                        className={
                          q.difficulty === "Easy"
                            ? "text-green-400"
                            : q.difficulty === "Medium"
                            ? "text-yellow-400"
                            : "text-red-400"
                        }
                      >
                        {q.difficulty}
                      </span>
                    </td>
                    <td className="px-2 py-3 text-center">
                      <button onClick={() => toggleStar(q.id)} aria-label="Toggle Star">
                        <Star
                          size={18}
                          className={`${
                            q.starred ? "fill-yellow-400 stroke-yellow-400" : "stroke-zinc-400"
                          } hover:scale-110 transition`}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}
