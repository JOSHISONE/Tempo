export default function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-[1080px] px-5 ${className}`}>{children}</div>;
}
