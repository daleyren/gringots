"use client"

const progress = [
  { name: "Easy", completed: 6, total: 20 },
  { name: "Medium", completed: 10, total: 40 },
  { name: "Hard", completed: 4, total: 20 }
]

export default function ProgressBadgePanel() {
  return (
    <div className="bg-zinc-900 rounded-xl p-4 text-white w-full max-w-xs">
      <h2 className="text-lg font-semibold mb-4">Progress</h2>

      <div className="space-y-4">
        {progress.map(p => {
          const percent = (p.completed / p.total) * 100
          const color = p.name === "Easy" ? "bg-green-400" : p.name === "Medium" ? "bg-yellow-400" : "bg-red-400"

          return (
            <div key={p.name}>
              <div className="flex justify-between text-sm mb-1">
                <span>{p.name}</span>
                <span className="text-zinc-400">{p.completed}/{p.total}</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-700">
                <div
                  className={`h-full rounded-full ${color}`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}