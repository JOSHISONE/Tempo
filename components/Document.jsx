// A full-length, print-style document. It stays a white sheet whatever the site colours are.
const cell = "border border-[#c5cdd8] px-2.5 py-[7px] text-left align-top";
const th = `${cell} bg-[#eef2f6] font-body text-[13px] font-semibold`;
const td = cell;
const center = "w-14 text-center";
const table = "w-full border-collapse text-sm";
const label = "font-body text-xs font-medium text-[#566075]";

const Section = ({ n, title, children }) => (
  <>
    <Heading>{n ? <><span className="mr-1">{n}.</span> {title}</> : title}</Heading>
    {children}
  </>
);

const Heading = ({ children }) => (
  <h4 className="mb-2.5 mt-7 border-b-[1.5px] border-[#0f5c63] pb-[3px] font-doc text-base font-bold text-[#0f5c63]">
    {children}
  </h4>
);

const lc = (s) => s.charAt(0).toLowerCase() + s.slice(1);

export default function Document({ template: t }) {
  const sop = t.type === "SOP";
  const no = `${sop ? "SOP" : "CL"}-${String(t.id + 1).padStart(3, "0")}`;

  const steps = (
    <table className={table}>
      <thead>
        <tr>
          <th className={`${th} ${center}`}>No.</th>
          <th className={th}>{sop ? "Action" : "Task"}</th>
          <th className={`${th} ${center}`}>Done</th>
          {!sop && <><th className={th}>Initials</th><th className={th}>Notes</th></>}
        </tr>
      </thead>
      <tbody>
        {t.steps.map((s, i) => (
          <tr key={i}>
            <td className={`${td} ${center}`}>{i + 1}</td>
            <td className={td}>{s}</td>
            <td className={`${td} ${center}`}>
              <input type="checkbox" aria-label={`Step ${i + 1} done`} className="h-[18px] w-[18px] accent-[#0f6b6f]" />
            </td>
            {!sop && <><td className={td}></td><td className={td}></td></>}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const info = sop
    ? [["Document no.", no, "Version", "1.0"], ["Owner", t.owner, "Time needed", t.time], ["Effective date", "", "Next review", ""]]
    : [["Date", "", "Completed by", ""], ["Shift or place", "", "Owner", t.owner], ["Document no.", no, "Time needed", t.time]];

  return (
    <article
      aria-label={`${t.title} document`}
      className={`rounded-xs border-t-[7px] bg-white px-5 pb-9 pt-7 font-doc text-[15px] leading-[1.55] text-[#1d2433] shadow-[0_4px_24px_rgba(20,30,50,.22)] md:px-12 md:pb-13 md:pt-11 ${sop ? "border-coral" : "border-teal-deep"}`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <small className="font-body text-xs font-semibold text-[#566075]">[Your company name]</small>
          <h2 className="mt-0.5 font-doc text-[28px] font-bold leading-[1.15]">{t.title}</h2>
        </div>
        <span className="whitespace-nowrap rounded-[3px] border-[1.5px] border-[#1d2433] px-2.5 py-[3px] font-body text-xs font-semibold">
          {sop ? "Standard Operating Procedure" : "Checklist"}
        </span>
      </div>

      <table className={table}>
        <tbody>
          {info.map((row, i) => (
            <tr key={i}>
              <th className={`${th} w-[19%]`}>{row[0]}</th><td className={td}>{row[1]}</td>
              <th className={`${th} w-[19%]`}>{row[2]}</th><td className={td}>{row[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {sop ? (
        <>
          <Section n={1} title="Purpose">
            <p className="mb-2">{t.summary} This document makes sure everyone follows the same steps, so the result does not depend on who is on shift.</p>
          </Section>
          <Section n={2} title="Scope">
            <p className="mb-2">Use this procedure when: {lc(t.usedWhen)}. It applies to every person who takes part in this task.</p>
          </Section>
          <Section n={3} title="Responsibilities">
            <table className={table}>
              <thead><tr><th className={th}>Role</th><th className={th}>Responsibility</th></tr></thead>
              <tbody>
                <tr><td className={td}>{t.owner}</td><td className={td}>Carries out the steps and keeps the records.</td></tr>
                <tr><td className={td}>Manager</td><td className={td}>Reviews this document every six months and approves exceptions.</td></tr>
                <tr><td className={td}>All staff</td><td className={td}>Report anything in these steps that is unclear or out of date.</td></tr>
              </tbody>
            </table>
          </Section>
          <Section n={4} title="Procedure">{steps}</Section>
          <Section n={5} title="Completion criteria"><p className="mb-2">{t.doneWhen}</p></Section>
          <Section n={6} title="Records">
            <p className="mb-2">Keep the completed record for 12 months in [shared folder or system name].</p>
          </Section>
          <Section n={7} title="Revision history">
            <table className={table}>
              <thead><tr><th className={th}>Version</th><th className={th}>Date</th><th className={th}>Change</th><th className={th}>Author</th></tr></thead>
              <tbody>
                <tr><td className={td}>1.0</td><td className={td}></td><td className={td}>First issue</td><td className={td}></td></tr>
                <tr><td className={td}>&nbsp;</td><td className={td}></td><td className={td}></td><td className={td}></td></tr>
              </tbody>
            </table>
          </Section>
        </>
      ) : (
        <>
          <Section title="Checklist">{steps}</Section>
          <Section title="Issues found">
            {[0, 1, 2].map((i) => <div key={i} className="h-7 border-b border-[#aeb8c6]" />)}
          </Section>
        </>
      )}

      <Section title="Approval">
        <div className="mt-9 grid gap-9 md:grid-cols-2">
          <div><div className="h-[34px] border-b-[1.5px] border-[#1d2433]" /><small className={label}>{sop ? "Prepared by (name and date)" : "Completed by (name and date)"}</small></div>
          <div><div className="h-[34px] border-b-[1.5px] border-[#1d2433]" /><small className={label}>{sop ? "Approved by (name and date)" : "Checked by (name and date)"}</small></div>
        </div>
      </Section>
    </article>
  );
}
