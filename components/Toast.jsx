import { useCart } from "../src/CartContext.jsx";

export default function Toast() {
  const { message } = useCart();
  return (
    <div
      role="status"
      className={`pointer-events-none fixed left-1/2 bottom-[calc(20px+env(safe-area-inset-bottom,0px))] -translate-x-1/2 rounded-lg bg-ink px-4.5 py-2.5 text-page transition-opacity duration-200 ${message ? "opacity-100" : "opacity-0"}`}
    >
      {message}
    </div>
  );
}
