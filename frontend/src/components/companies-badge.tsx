"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

const companies = [
  { name: "Goldman Sachs", count: 250 },
  { name: "Morgan Stanley", count: 310 },
  { name: "J.P. Morgan", count: 290 },
  { name: "Evercore", count: 180 },
  { name: "Lazard", count: 165 },
  { name: "Houlihan Lokey", count: 140 },
  { name: "Centerview Partners", count: 130 },
  { name: "PJT Partners", count: 110 },
  { name: "Moelis & Company", count: 125 },
  { name: "Guggenheim Partners", count: 100 },
  { name: "Greenhill & Co.", count: 90 },
  { name: "Rothschild & Co.", count: 85 },
  { name: "Blackstone", count: 275 },
  { name: "KKR", count: 220 },
  { name: "Carlyle Group", count: 210 },
  { name: "TPG", count: 190 },
  { name: "Apollo", count: 170 },
  { name: "Bain Capital", count: 160 },
  { name: "Vista Equity Partners", count: 150 }
]

export default function CompanyBadgePanel() {
  const [search, setSearch] = useState("")

  const filteredCompanies = companies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-zinc-900 rounded-xl p-4 text-white w-full max-w-xs">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Trending Companies</h2>
        <div className="flex space-x-2">
          <ChevronLeft className="w-5 h-5 text-zinc-400" />
          <ChevronRight className="w-5 h-5 text-zinc-400" />
        </div>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Search for a company..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-8 pr-2 py-2 rounded bg-zinc-800 text-sm text-white placeholder-zinc-500"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {filteredCompanies.map(c => (
          <div
            key={c.name}
            className="flex items-center space-x-2 px-3 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
          >
            <span className="text-sm font-medium text-white">{c.name}</span>
            <span className="text-xs bg-blue-200 text-black font-bold px-2 py-0.5 rounded-full">
              {c.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
