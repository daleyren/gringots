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
