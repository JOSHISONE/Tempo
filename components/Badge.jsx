export default function Badge({ type, children, className = "" }) {
  const tone = type === "SOP" ? "bg-coral text-coral-ink" : "bg-teal text-white";
  return (
    <span className={`self-start rounded-full px-2.5 py-0.5 text-[13px] font-semibold ${tone} ${className}`}>
      {children ?? type}
    </span>
  );
}
