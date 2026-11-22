import { bundles } from "../src/templates.js";
import { useCart } from "../src/CartContext.jsx";
import Button from "../components/Button.jsx";
import PageHeading from "../components/PageHeading.jsx";
import PlanCard from "../components/PlanCard.jsx";

export default function Pricing() {
  const { add } = useCart();
  const [starter, full] = bundles;
  return (
    <>
      <PageHeading title="Pricing" sub="Buy one template, or save with a bundle. One payment, yours to keep." />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4.5">
        <PlanCard
          name="Single template"
          price="$9–19"
          features={["One SOP or checklist", "Word, Docs and PDF"]}
          action={<Button to="/templates" variant="outline">Pick a template</Button>}
        />
        <PlanCard
          featured
          name={starter.name}
          price={`$${starter.price}`}
          features={["10 templates of your choice", "Free updates for a year"]}
          action={<Button onClick={() => add(starter)}>Add to cart</Button>}
        />
        <PlanCard
          name={full.name}
          price={`$${full.price}`}
          features={["Every template, 60+", "New ones each month"]}
          action={<Button variant="outline" onClick={() => add(full)}>Add to cart</Button>}
        />
      </div>
    </>
  );
}
