import Badge from "../components/Badge.jsx";
import PageHeading from "../components/PageHeading.jsx";

const steps = [
  ["Pick a template", "Browse by type or department and preview what’s inside."],
  ["Pay once", "Add to cart and check out. No subscription."],
  ["Download", "Get Word, Google Docs and PDF versions instantly."],
  ["Make it yours", "Add your names, tools and rules, then share it with your team."],
];

const grid = "grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4.5";
const card = "flex flex-col gap-2 rounded-[10px] border-[1.5px] border-line bg-surface p-4.5";

export default function HowItWorks() {
  return (
    <>
      <PageHeading title="How it works" sub="From purchase to a working process in under an hour." />
      <div className={grid}>
        {steps.map(([title, text], i) => (
          <div className={card} key={title}>
            <Badge type="SOP">{`Step ${i + 1}`}</Badge>
            <h3 className="font-display text-lg leading-[1.1]">{title}</h3>
            <p className="text-sm text-muted">{text}</p>
          </div>
        ))}
      </div>

      <PageHeading className="mt-12" title="SOP or checklist?" />
      <div className={grid}>
        <div className={card}><h3 className="font-display text-lg">SOP</h3><p className="text-sm text-muted">Explains how to do a task and who owns it. Use it for work that needs judgement, like refunds or onboarding.</p></div>
        <div className={card}><h3 className="font-display text-lg">Checklist</h3><p className="text-sm text-muted">A tick-off list for routines you repeat. Use it when missing a step causes problems, like opening the shop.</p></div>
      </div>
    </>
  );
}
