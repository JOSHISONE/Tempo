import { PiShrimp } from "react-icons/pi";

export default function Logo() {
  return (
    <>
      <PiShrimp aria-hidden="true" className="text-[34px] text-coral" />
      <b className="font-logo text-[28px] font-normal leading-none">Tempo</b>
    </>
  );
}