export default function SectionTitles({title,textColor,active}) {
  return (
    <div>
       <div className="z-100 text-white w-full bg-[rgb(35,35,35)]">
<h1
id={title}
  className="text-center p-8 text-2xl tracking-[0.2rem] text-[1.8rem] font-medium"
  style={{  fontFamily: "var(--font-barlow)" }}
>
     <span style={{ color: textColor, fontFamily: "var(--font-barlow)" }}> {title}  </span>

  {active ? (<span>Jobs</span>): ("")}
</h1>

        </div>
    </div>
  );
}