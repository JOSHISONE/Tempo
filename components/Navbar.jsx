import { Link, NavLink } from "react-router-dom";
import { useCart } from "../src/CartContext.jsx";
import Logo from "./Logo.jsx";

export default function Navbar() {
  const { items } = useCart();
  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/templates", label: "Templates" },
    { to: "/pricing", label: "Pricing" },
    { to: "/how", label: "How it works" },
    { to: "/cart", label: `Cart (${items.length})` },
  ];
  return (
    <header className="border-b-[1.5px] border-line bg-surface">
      <div className="px-5 md:px-6">
        <nav className="flex flex-col items-center gap-1 py-2.5 md:flex-row md:items-center md:justify-between md:gap-3.5">
          <Link to="/" aria-label="Tempo home" className="my-1.5 flex flex-col items-center leading-none no-underline md:ml-4">
            <Logo />
          </Link>
          <div className="flex w-full justify-between overflow-x-auto md:ml-auto md:w-auto md:justify-end md:gap-1.5 md:overflow-visible">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) =>
                  `shrink-0 whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm font-medium no-underline md:px-3 md:text-base ${isActive ? "bg-ink text-page" : "text-ink"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

