import Image from "next/image";

const HomePage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 xs:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="lg:h-full lg:w-1/2 relative" style={{ height: "500px" }}>
        <Image src="/hero.png" alt="hero" fill className="object-contain" />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 lg:mt-16 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Code Composer: Crafting Full Stack Wonders!
        </h1>
        <p className="md:text-xl">
          Welcome to my digital playground where creativity meets functionality!
          As a full stack developer, I specialize in bringing ideas to life
          across the web. Explore my portfolio and witness the art of seamless
          integration from front-end to back-end.
        </p>
        <div className="w-full flex gap-4">
          <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-2 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
