import Image from "next/image";
import Nav from "./Components/Nav"
import Header from "./Components/Header"
import JobDestination from "./Components/JobDestination"
import JobSpec from "./Components/JobSpec"
import SectionTitles from "./Components/SectionTitles"
import './globals.css'

export default function Home() {
  return (
   
      <div>
        <Nav/>
        <Header/>
         <div className="z-100 text-white w-full bg-[rgb(35,35,35)]">
        <h1 className="text-center p-8 text-2xl "style={{ fontFamily: "var(--font-barlow)" }} >WELCOME TO <span className="text-[var(--text-green)]">ROCK RECRU</span><span className="text-[var(--text-purple)]">IT</span><span className="text-[var(--text-green)]">ERS</span></h1>
        </div>
        <JobDestination/>
        <SectionTitles title="Gibraltar" textColor="rgb(0, 206, 195)"/>
        <JobSpec/>
    </div>
  );
}
