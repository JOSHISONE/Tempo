import { Link } from "react-router-dom";

const base = "inline-block rounded-lg font-semibold no-underline";
const variants = {
  primary: "border-0 bg-ink text-page",
  outline: "border-[1.5px] border-ink bg-transparent text-ink",
  success: "border-[1.5px] border-success bg-transparent text-ink",
};
const sizes = { md: "px-5 py-3", sm: "px-3.5 py-2 text-sm" };

/** Renders a <Link> when `to` is given, otherwise a <button>. */
export default function Button({ to, variant = "primary", size = "md", className = "", ...rest }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  return to ? <Link to={to} className={cls} {...rest} /> : <button className={cls} {...rest} />;
}
