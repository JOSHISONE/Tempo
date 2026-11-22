export default function PageHeading({ title, sub, className = "" }) {
  return (
    <div className={className}>
      <h2 className="mb-2 font-display text-[clamp(28px,4vw,40px)] font-bold leading-[1.1]">{title}</h2>
      {sub && <p className="mb-6.5 max-w-[60ch] text-muted">{sub}</p>}
    </div>
  );
}
