import Image from "next/image";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import JobDestination from "./Components/JobDestination";
import JobSpec from "./Components/JobSpec";
import JobSpecMalaga from "./Components/JobSpecMalaga";
import JobSpecSoto from "./Components/JobSpecSoto";
import About from "./Components/About";
import SectionTitles from "./Components/SectionTitles";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <div className="placeholder h-[100%] w-full bg-[rgb(35,35,35)] absolute top-0 left-0 z-50 flex flex-col items-center justify-center text-white text-4xl font-bold">
        <p> SORRY WE ARE CURRENTLY UPDATING OUR WEBSITE,</p>{" "}
        <p>PLEASE CHECK BACK SOON!</p>
        <br />
        <p>
          <span className="text-[var(--text-green)]">ROCK RECRU</span>
          <span className="text-[var(--text-purple)]">IT</span>
          <span className="text-[var(--text-green)]">ERS</span>
        </p>
      </div>
      {/* <Nav /> */}
      <Header />
      {/* <div className="z-100 text-white w-full bg-[rgb(35,35,35)]">
        <h1
          className="text-center p-8 text-2xl "
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          WELCOME TO{" "}
          <span className="text-[var(--text-green)]">ROCK RECRU</span>
          <span className="text-[var(--text-purple)]">IT</span>
          <span className="text-[var(--text-green)]">ERS</span>
        </h1>
      </div>
      <JobDestination />
      <SectionTitles
        active={true}
        title="Gibraltar"
        textColor="rgb(0, 206, 195)"
      />
      <JobSpec />
      <SectionTitles active={true} title="Malaga" textColor="#9b478a" />

      <JobSpecMalaga />
      <SectionTitles
        active={true}
        title="Sotogrande"
        textColor="rgb(0, 206, 195)"
      />
      <JobSpecSoto />
      <SectionTitles title="About Us" textColor="rgb(0, 206, 195)" />
      <About /> */}
    </div>
  );
}
