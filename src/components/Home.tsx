export default function Home() {
  return (
    <div className="h-dvh flex flex-col place-content-center">
      <h1 className="text-zinc-100 text-2xl">Jeremy Parker</h1>
      <div className="grid grid-cols-2 gap-x-0 gap-y-4 self-center place-items-center mt-20">
        <span className="home-grid-link">about</span>
        <span className="home-grid-link">experience</span>
        <span className="home-grid-link">projects</span>
        <a href="https://www.linkedin.com/in/jrobinparker" target="blank" className="home-grid-link">linkedin</a>
      </div>
    </div>
  )
}