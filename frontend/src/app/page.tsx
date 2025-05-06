import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavBar } from "@/components/navbar"

export default function LandingPage() {
  return (
    <>
      {/* Fixed NavBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-zinc-300">
        <NavBar />
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-zinc-100 px-4 pt-20 scroll-smooth">
        {/* Hero */}
        <div className="flex flex-row items-center justify-center h-screen">
          <section className="text-center animate-fade-up duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto text-white">
              Crack Investment Banking Interviews
            </h1>
            <p className="text-zinc-400 mt-6 text-lg md:text-xl max-w-xl mx-auto">
              Real questions from top firms. Expert explanations. Built by UChicago students who’ve been there.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link href="/questions">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-200 transition">
                  Start Practicing
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="secondary" size="lg" className="bg-zinc-600 text-zinc-200 hover:text-white hover:bg-zinc-700 transition">
                  See Features
                </Button>
              </Link>
            </div>

            {/* Scroll hint */}
            <div className="mt-16 animate-bounce text-zinc-500">
              <Link href="#features" aria-label="Scroll down">
                ↓
              </Link>
            </div>
          </section>
        </div>

        {/* Features */}
        <section id="features" className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 text-center animate-fade-up duration-1000 delay-200">
          <div>
            <h3 className="text-xl font-semibold text-white">By Firm</h3>
            <p className="text-zinc-400 mt-2">Filter real questions by firm — Goldman Sachs, PJT, Evercore, and more.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Questions + Answers</h3>
            <p className="text-zinc-400 mt-2">Detailed explanations written by past candidates who got the offer.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">UChicago Founded</h3>
            <p className="text-zinc-400 mt-2">Created by UChicago students to help you stand out where it matters most.</p>
          </div>
        </section>

        {/* How it works */}
        <section className="mt-32 text-center max-w-2xl animate-fade-up duration-1000 delay-300">
          <h2 className="text-2xl font-semibold mb-6 text-white">How it works</h2>
          <ol className="text-zinc-400 text-lg space-y-4 list-decimal list-inside">
            <li>Choose a firm or category.</li>
            <li>Practice with real questions.</li>
            <li>Read explanations written by successful candidates.</li>
            <li>Go in confident and ready to impress.</li>
          </ol>
        </section>

        {/* Footer */}
        <footer className="mt-32 text-sm text-zinc-500 pb-12 animate-fade-up duration-1000 delay-500">
          Built by UChicago students •{" "}
          <Link href="mailto:contact@ibprep.com" className="underline hover:text-white transition">
            Contact
          </Link>
        </footer>
      </main>
    </>
  )
}
