import { Link, NavLink } from "react-router-dom";
import { PiHouse, PiFiles, PiTag, PiQuestion, PiShoppingCart } from "react-icons/pi";
import { useCart } from "../src/CartContext.jsx";
import Logo from "./Logo.jsx";

const links = [
  { to: "/", label: "Home", icon: PiHouse, end: true },
  { to: "/templates", label: "Templates", icon: PiFiles },
  { to: "/pricing", label: "Pricing", icon: PiTag },
  { to: "/how", label: "How it works", icon: PiQuestion },
  { to: "/cart", label: "Cart", icon: PiShoppingCart },
];

export default function Navbar() {
  const { items } = useCart();
  return (
    <header className="border-b-[1.5px] border-line bg-surface">
      <div className="px-5 md:px-6">
        <nav className="flex flex-row items-center justify-between gap-2 py-2.5 md:gap-3.5">
          <Link to="/" aria-label="Tempo home" className="my-1.5 flex items-center leading-none no-underline md:ml-4">
            <Logo />
          </Link>
          <div className="flex gap-0.5 md:gap-1.5">
            {links.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                title={label}
                aria-label={label}
                className={({ isActive }) =>
                  `relative shrink-0 rounded-full p-2 no-underline md:p-2.5 ${isActive ? "bg-ink text-page" : "text-ink"}`
                }
              >
                <Icon className="text-[22px]" aria-hidden="true" />
                {to === "/cart" && items.length > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-coral px-1 text-[11px] font-semibold leading-none text-coral-ink">
                    {items.length}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}