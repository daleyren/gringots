import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"      // your `className` helper

type NavItem = { href: string; label: string }

interface NavBarComponentProps
  extends React.ComponentPropsWithoutRef<"div"> {
  /** links to render, e.g. [{ href: "/problems", label: "Problems" }] */
  items: NavItem[]
}

export function NavBarComponent({
  items,
  className,
  ...props
}: NavBarComponentProps) {
  return (
    <div
      className={cn(
        "flex h-13 w-screen items-center gap-6 bg-zinc-900 px-4 text-gray-300",
        className
      )}
      {...props}
    >
      <div className="bg-red-500">
        logo
      </div>
      {items.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="whitespace-nowrap text-lg font-medium transition-colors hover:text-white"
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
