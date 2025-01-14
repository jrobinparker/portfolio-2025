import { NavLink } from 'react-router';

export default function Home() {
  return (
    <div className="flex flex-col mb-auto h-full">
      <h1 className="text-zinc-100 text-2xl">Jeremy Parker</h1>
      <div className="grid grid-cols-2 gap-x-0 gap-y-4 self-center place-items-center mt-20">
        <NavLink to="/about" className="home-grid-link">about</NavLink>
        <NavLink to="/experience" className="home-grid-link">experience</NavLink>
        <NavLink to="/projects" className="home-grid-link">projects</NavLink>
        <a href="https://www.linkedin.com/in/jrobinparker" target="blank" className="home-grid-link">linkedin</a>
      </div>
    </div>
  )
}