import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.tsx'
import AboutMe from './components/AboutMe.tsx'
import Experience from './components/Experience/Experience.tsx'
import Projects from './components/Projects.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  </BrowserRouter>,
)
