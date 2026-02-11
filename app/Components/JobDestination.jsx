"use client"

export default function JobDestination() {

  const data = [
    {
      id: 1,
      title: 'Malaga',
      url: "#malaga",
      image: "/images/malaga.webp",
      gradient: "linear-gradient(45deg, rgba(155,71,138,0.8), rgba(0,0,0,0.8))"
    },
    {
      id: 2,
      title: "Gibraltar",
      url: "#gibraltar",
      image: "/images/gib.webp",
      gradient: "linear-gradient(135deg, rgba(0, 0, 0, 1) 0, rgba(0, 206, 195, .8) 100%)"
    },
    {
      id: 3,
      title: "SotoGrande",
      url: "#sotogrande",
      image: "/images/soto.webp",
      gradient: "linear-gradient(45deg,rgba(155,71,138,1) 0,rgba(0,0,0,1) 100%)"
    }
  ]

  return (
    <article>
      <div className="box-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-20">

        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-[3px_3px_14px_1px_black] border-4 border-[#F4F4F4] h-[23rem] m-4 bg-cover bg-center p-6 text-white bg-opacity-80 flex flex-col justify-between items-center"
            style={{
              backgroundImage: `${item.gradient}, url(${item.image})`
            }}
          >

            <h3
              className="text-4xl font-bold uppercase"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              {item.title}
            </h3>

            <p
              className="text-lg text-center"
              style={{ fontFamily: "var(--font-comfortaa)" }}
            >
              Looking for a job in {item.title}
            </p>

            <p
              className="text-lg text-center"
              style={{ fontFamily: "var(--font-comfortaa)" }}
            >
              Rock Recruiters are proud to source jobs in {item.title}
            </p>

            <a href={item.url} className="mt-4 underline">
              Find Jobs
            </a>
          </div>
        ))}

      </div>
    </article>
  )
}
