import { useState } from "react";
import { templates, categories } from "../src/templates.js";
import CategoryTabs from "../components/CategoryTabs.jsx";
import PageHeading from "../components/PageHeading.jsx";
import TemplateCard from "../components/TemplateCard.jsx";
import { gridCls } from "./Home.jsx";

const matches = (t, c) =>
  c === "All" || (c === "SOPs" && t.type === "SOP") || (c === "Checklists" && t.type === "Checklist") || t.category === c;

export default function Templates() {
  const [current, setCurrent] = useState("All");
  return (
    <>
      <PageHeading title="Template library" sub="Every template is editable in Word, Google Docs or PDF, and written in plain language." />
      <CategoryTabs categories={categories} current={current} onChange={setCurrent} />
      <div className={gridCls}>
        {templates.filter((t) => matches(t, current)).map((t) => <TemplateCard key={t.id} template={t} />)}
      </div>
    </>
  );
}
