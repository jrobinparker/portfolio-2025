export default function Home() {
  function handleClick(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="h-screen flex flex-col place-content-center">
      <h1 className="text-7xl text-center">Jeremy Parker</h1>
      <div className="grid grid-cols-2 gap-10 self-center place-items-center mt-20">
        <span className="text-4xl cursor-pointer hover:animate-pulse" onClick={() => handleClick('about')}>about me</span>
        <span className="text-4xl cursor-pointer hover:animate-pulse" onClick={() => handleClick('exp')}>experience</span>
        <span className="text-4xl cursor-pointer hover:animate-pulse" onClick={() => handleClick('proj')}>projects</span>
        <a href="https://www.linkedin.com/in/jrobinparker" target="blank" className="text-4xl cursor-pointer">linkedin</a>
      </div>
    </div>
  )
}