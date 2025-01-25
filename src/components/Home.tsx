export default function Home() {
  function handleClick(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="h-screen flex flex-col place-content-center">
      <h1 className="text-7xl text-center bg-gradient-to-b from-slate-800 via-violet-500 to-zinc-400 text-transparent bg-clip-text">
        Jeremy Parker
      </h1>
      <div className="grid grid-cols-2 gap-10 self-center place-items-center mt-20">
        <h1
          className="text-4xl cursor-pointer hover:animate-pulse"
          onClick={() => handleClick("about")}
        >
          about me
        </h1>
        <h1
          className="text-4xl cursor-pointer hover:animate-pulse"
          onClick={() => handleClick("exp")}
        >
          experience
        </h1>
        <h1
          className="text-4xl cursor-pointer hover:animate-pulse"
          onClick={() => handleClick("proj")}
        >
          projects
        </h1>
        <a
          href="https://www.linkedin.com/in/jrobinparker"
          target="blank"
          className="text-4xl tracking-tight font-semibold hover:animate-pulse"
        >
          linkedin
        </a>
        <a
          href="https://www.github.com/jrobinparker"
          target="blank"
          className="text-4xl tracking-tight font-semibold col-span-2 hover:animate-pulse"
        >
          github
        </a>
      </div>
    </div>
  );
}
