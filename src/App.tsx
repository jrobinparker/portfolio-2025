import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Hand from "./components/Hand/Hand";
import { Helmet } from "react-helmet";
import "@fontsource/inter/600.css";
import "@fontsource/inter/300.css";
import "./App.css";
import "./index.css";

import inter300 from "@fontsource/inter/files/inter-latin-300-normal.woff2";
import inter600 from "@fontsource/inter/files/inter-latin-600-normal.woff2";

export default function App() {
  return (
    <div>
      <Helmet>
        <link rel="preload" as="font" href={inter300} type="font/woff2" />
        <link rel="preload" as="font" href={inter600} type="font/woff2" />
      </Helmet>
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Hand />
    </div>
  );
}
