export default function SectionTitles({title,textColor}) {
  return (
    <div>
       <div className="z-100 text-white w-full bg-[rgb(35,35,35)]">
<h1
  className="text-center p-8 text-2xl"
  style={{  fontFamily: "var(--font-barlow)" }}
>
     <span style={{ color: textColor, fontFamily: "var(--font-barlow)" }}> {title}  </span>
  Jobs
</h1>

        </div>
    </div>
  );
}