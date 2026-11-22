import { Link, useParams } from "react-router-dom";
import { templates } from "../src/templates.js";
import { useCart } from "../src/CartContext.jsx";
import Badge from "../components/Badge.jsx";
import Button from "../components/Button.jsx";
import Document from "../components/Document.jsx";

export default function TemplateDetail() {
  const { id } = useParams();
  const { add } = useCart();
  const t = templates[Number(id)];

  if (!t) return (
    <>
      <h2 className="mb-4 font-display text-4xl font-bold">Template not found</h2>
      <Button to="/templates">Back to templates</Button>
    </>
  );

  return (
    <>
      <div className="mb-4 text-sm"><Link to="/templates">Templates</Link> / {t.title}</div>
      <div className="grid items-start gap-9 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
        <div className="flex flex-col items-start md:sticky md:top-5">
          <Badge type={t.type} />
          <h2 className="mt-2.5 font-display text-[clamp(28px,4vw,40px)] font-bold leading-[1.1]">{t.title}</h2>
          <p className="mb-6.5 mt-4.5 max-w-[48ch] text-lg text-muted">{t.summary}</p>
          <div className="mb-3.5 font-display text-3xl font-bold">${t.price}</div>
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => add({ id: t.id, name: t.title, price: t.price })}>Add to cart</Button>
            <Button to="/cart" variant="outline">View cart</Button>
          </div>
          <p className="mt-4.5 text-muted">Includes Word, Google Docs and PDF versions. The preview is the full document.</p>
        </div>
        <Document template={t} />
      </div>
    </>
  );
}
