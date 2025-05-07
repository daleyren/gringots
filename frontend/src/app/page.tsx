import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NavBar } from "@/components/navbar"

export default function LandingPage() {
  return (
    <>
      {/* Fixed NavBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <NavBar />
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen text-zinc-100 px-4 pt-20 bg-zinc-800">
      {/* Hero */}
        <div className="flex flex-row items-center justify-center min-h-[calc(100vh-100px)]">
          <section className="text-center animate-fade-up duration-1000">
            <h1 className="text-4xl md:text-6xl font-bold max-w-3xl mx-auto text-white text-shadow-md">
              Crack Investment Banking Interviews
            </h1>
            <p className="text-white mt-6 text-lg md:text-xl max-w-xl mx-auto">
              Real questions from top firms. Expert explanations. <br/> Built by UChicago students who’ve been there.
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <Link href="/problems">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-200 transition">
                  Start Practicing
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="secondary" size="lg" className="bg-zinc-900 text-zinc-200 hover:text-white hover:bg-zinc-950 transition">
                  See Features
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
