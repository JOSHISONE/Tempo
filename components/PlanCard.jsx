export default function PlanCard({ name, price, features, action, featured = false }) {
  return (
    <div className={`rounded-[10px] border-[1.5px] bg-surface p-5.5 ${featured ? "border-ink ring-3 ring-coral" : "border-line"}`}>
      <h3 className="font-display leading-[1.1]">{name}</h3>
      <div className="my-1.5 font-display text-4xl font-extrabold">{price}</div>
      <ul className="mb-4 list-disc pl-[18px] text-muted">
        {features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      {action}
    </div>
  );
}
