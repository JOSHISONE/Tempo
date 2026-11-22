import { useState } from "react";
import { useCart } from "../src/CartContext.jsx";
import { FaCircleCheck } from "react-icons/fa6";
import Button from "../components/Button.jsx";
import PageHeading from "../components/PageHeading.jsx";


function CheckoutButton() {
  const [done, setDone] = useState(false);
  const click = () => {
    if (done) return;
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  };
  return (
    <Button
      variant={done ? "success" : "primary"}
      onClick={click}
      aria-label={done ? "Checkout complete" : undefined}
      className={done ? "min-w-[120px] py-[10.5px]! leading-none" : ""}
    >
      {done ? (
        <FaCircleCheck className="mx-auto block text-[22px] text-success" aria-hidden="true" />
      ) : "Check out"}
    </Button>
  );
}

export default function Cart() {
  const { items, remove, total } = useCart();

  if (!items.length) return (
    <>
      <PageHeading title="Your cart" sub="Your cart is empty. Add a template to get started." />
      <Button to="/templates">Browse templates</Button>
    </>
  );

  const line = "flex items-center justify-between gap-3 border-t border-line py-3.5";
  return (
    <>
      <PageHeading title="Your cart" />
      <div className="mt-4.5 rounded-xl border-[1.5px] border-line bg-surface p-5.5">
        {items.map((c, i) => (
          <div className={line} key={i}>
            <span>{c.name}</span>
            <span>
              <b>${c.price}</b>{" "}
              <button className="border-0 bg-transparent text-muted underline" onClick={() => remove(i)}>Remove</button>
            </span>
          </div>
        ))}
        <div className={line}><b>Total</b><span className="font-display text-xl font-bold">${total}</span></div>
        <CheckoutButton />
      </div>
    </>
  );
}
