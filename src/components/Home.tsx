import { NavLink } from 'react-router';
import '../App.css'

export default function Home() {
  return (
    <>
      <h1>Jeremy Parker</h1>
      <div className="home-grid">
        <NavLink to="/about" className="home-grid-link">about</NavLink>
        <NavLink to="/experience" className="home-grid-link">experience</NavLink>
        <NavLink to="/projects" className="home-grid-link">projects</NavLink>
        <a href="https://www.linkedin.com/in/jrobinparker" target="blank" className="home-grid-link">linkedin</a>
      </div>
    </>
  )
}