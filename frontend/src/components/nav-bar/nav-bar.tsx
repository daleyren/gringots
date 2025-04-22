import { NavBarComponent } from "./nav-bar-component"

export function NavBar({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className="bg-orange-500 w-screen h-13" {...props}>
      <NavBarComponent
        items={[
          { href: "/explore", label: "Explore" },
          { href: "/problems", label: "Problems" },
          { href: "/opportunities", label: "Opportunities" },
          { href: "/network", label: "Network" },
        ]}
      />
    </div>
  )
}