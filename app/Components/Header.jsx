
export default function Header() {
  return (
    <header className=" mt-4 relative h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover" src="/videos/header-video.mp4" autoPlay loop muted playsInline />
       
    </header>
  );
}