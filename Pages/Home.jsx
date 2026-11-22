import { templates } from "../src/templates.js";
import Button from "../components/Button.jsx";
import Document from "../components/Document.jsx";
import PageHeading from "../components/PageHeading.jsx";
import TemplateCard from "../components/TemplateCard.jsx";

export const gridCls = "grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5.5";

export default function Home() {
  const demo = templates[4];
  const popular = [0, 4, 2].map((i) => templates[i]);
  return (
    <>
      <div className="grid items-start gap-11 md:grid-cols-2">
        <div>
          <h1 className="font-display text-[clamp(34px,6vw,56px)] font-extrabold leading-[1.1] tracking-tight">
            Write down how work gets done. Then stop explaining it twice.
          </h1>
          <p className="mb-6.5 mt-4.5 max-w-[48ch] text-lg text-muted">
            Ready-made SOP and checklist templates for small businesses. Download, fill in your details, and hand them to your team today.
          </p>
          <div className="flex flex-wrap gap-2">
            <Button to="/templates">Browse templates</Button>
            <Button to="/how" variant="outline">How it works</Button>
          </div>
        </div>
        {/* a long document, faded out at the bottom */}
        <div className="relative max-h-[470px] overflow-hidden after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-36 after:bg-linear-to-b after:from-transparent after:to-page after:content-['']">
          <Document template={demo} />
        </div>
      </div>

      <PageHeading className="mt-14" title="Popular templates" sub="Start with the ones most shops and teams need first." />
      <div className={gridCls}>{popular.map((t) => <TemplateCard key={t.id} template={t} />)}</div>
    </>
  );
}
