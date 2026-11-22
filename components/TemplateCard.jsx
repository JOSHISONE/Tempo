import { Link } from "react-router-dom";
import { useCart } from "../src/CartContext.jsx";
import Badge from "./Badge.jsx";
import Button from "./Button.jsx";

/** A small "page" preview shown on each card. */
function Thumb({ template: t }) {
  const edge = t.type === "SOP" ? "border-coral" : "border-teal-deep";
  return (
    <div
      aria-hidden="true"
      className={`flex aspect-[3/4] flex-col rounded-[3px] border-t-5 bg-white p-3.5 text-[#1d2433] shadow-[0_2px_10px_rgba(20,30,50,.18)] ${edge}`}
    >
      <small className="text-[10px] font-semibold text-[#566075]">{t.type}</small>
      <b className="mt-1 font-doc text-[15px] font-bold leading-tight">{t.title}</b>
      <div className="mt-2.5 flex-1 [background:repeating-linear-gradient(#fff_0_8px,#dde2e9_8px_10px)]" />
    </div>
  );
}

export default function TemplateCard({ template: t }) {
  const { add } = useCart();
  return (
    <div className="flex flex-col gap-2 rounded-[10px] border-[1.5px] border-line bg-surface p-3.5">
      <Link to={`/templates/${t.id}`} aria-label={`View ${t.title}`}><Thumb template={t} /></Link>
      <h3 className="font-display text-lg leading-[1.1]"><Link to={`/templates/${t.id}`}>{t.title}</Link></h3>
      <p className="flex-1 text-sm text-muted">{t.summary}</p>
      <div className="mt-1.5 flex items-center justify-between gap-2.5">
        <span className="font-display text-xl font-bold">${t.price}</span>
        <span className="flex gap-1.5">
          <Button to={`/templates/${t.id}`} variant="outline" size="sm">View</Button>
          <Button size="sm" onClick={() => add({ id: t.id, name: t.title, price: t.price })}>Add</Button>
        </span>
      </div>
    </div>
  );
}
