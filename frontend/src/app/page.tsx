import { NavBar } from "@/components/nav-bar/nav-bar";

export default function MainPage() {
  return (
    <>
      {/* Top‑of‑screen navbar */}
      <NavBar
        className="fixed top-0 left-0 z-50 w-full
                   bg-primary text-primary-foreground
                   shadow"
      />

      {/* Push page content below the bar (assumes 2.5‑rem ≈ h-10) */}
      <main className="pt-10 flex flex-col items-center justify-center min-h-screen">
        {/* …your page… */}
        what?
      </main>
    </>
  );
}
