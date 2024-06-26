import About from "./About/page";
import Contact from "./Contact/page";
import Service from "./Service/page";

export default function Home() {
  return (
    <>
      <div>
        <main className="container mx-auto p-4">
          <div className="relative">
            <img src="/hero1.jpg" alt="Hero Image" className="w-full h-[602px] object-cover brightness-75" />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white p-4 md:p-12 font-bold tracking-wider bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-5xl leading-tight">We are here! </h1>
              <h1 className="text-4xl md:text-5xl leading-tight">Now you can enjoy </h1>
              <p className="text-lg md:text-2xl pt-2 text-center">Experience high-speed satellite internet and Cable with ChannleConnectPRO. Enjoy speeds up to 3 Gigabit,</p>
              <p className="text-lg md:text-2xl text-center">unlimited data, and nationwide availability.</p>
              <button className="bg-cyan-600 text-white border rounded p-1 w-64 mt-3">Signup</button>
            </div>
          </div>
          <div className="pt-8 text-center">
            <h2 className="text-3xl md:text-4xl text-cyan-600 font-bold tracking-wid">Fast speeds. Unlimited data.</h2>
            <p className="text-lg md:text-xl mt-4">ChannelConnectPRO plans come with speeds up to 3 Gigabit</p>
            <p className="text-lg md:text-xl text-center">24X7 Customer Service Available For Any Concern</p>
            <a href="tel:+18008603891" className="text-blue-600 hover:underline">
  Call Us: 1-800-860-3891
</a>
            <p className="text-base md:text-lg mt-4">ChannelConnectPRO satellite home internet delivers broadband-level speeds and keeps you connected to who and what matters most, no matter where you live.</p>
          </div>
        </main>
      </div>
      <Service />
      <About />
      <Contact />
    </>
  );
}

