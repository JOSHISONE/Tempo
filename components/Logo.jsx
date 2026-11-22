import { PiShrimp } from "react-icons/pi";

export default function Logo() {
  return (
    <span className="flex flex-row items-center gap-2">
      <PiShrimp aria-hidden="true" className="text-[36px] text-coral" />
      <b className="font-logo hidden text-[28px] font-normal leading-none md:block">Tempo</b>
    </span>
  );
}