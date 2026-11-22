export default function CategoryTabs({ categories, current, onChange }) {
  return (
    <div className="mb-5.5 flex flex-wrap gap-2">
      {categories.map((c) => (
        <button
          key={c}
          aria-pressed={c === current}
          onClick={() => onChange(c)}
          className={`rounded-full border-[1.5px] px-4 py-1.5 ${c === current ? "border-ink bg-ink text-page" : "border-line bg-surface text-ink"}`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
