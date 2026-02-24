export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2
        className="
          text-center 
          font-barlow 
          font-bold 
          text-[40px] 
          md:text-[40px] 
          text-[28px]
        "
      >
        RECRUITMENT SPECIALISTS <span className="font-normal">IN</span>{" "}
        <span className="text-[#00CEC3] font-bold">GIBRALTAR</span>{" "}
        <span className="font-normal">AND</span>{" "}
        <span className="text-[#9B478A] font-bold">MALAGA</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
        <div>
          <p>
            Specialists in IT and Online gaming in Gibraltar and Spain. Our team
            have over 20 years experience between them in recruitment, industry
            expertise and local knowledge.
          </p>
          <p>
            With Rock Recruiters you can benefit from big agency backgrounds
            mixed with a small consultancy feel. With us you can expect a
            personal, professional and first class service.
          </p>
          <button
            src="#Contact"
            className="bg-[#00CEC3] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#009e97] transition-colors"
          >
            {" "}
            Contact
          </button>
        </div>

        <div className="image-wrapper">
          <img src="/images/open-laptop-59e5eb65-55ca6df5-1920w.webp" />
        </div>
      </div>
    </div>
  );
}
