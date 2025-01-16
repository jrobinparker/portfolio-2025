import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Hand from './components/Hand/Hand';
import './App.css'
import './index.css'

export default function App() {
  return (
    <>
        <Home />
        <AboutMe />
        <Experience />
        <Projects />
        <Hand />
    </>
  )
}