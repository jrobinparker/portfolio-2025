import Card from "./Card/Card";
import profileImg from "../assets/profile-img.jpg";
import "../App.css";

export default function AboutMe() {
  return (
    <div className="h-auto pt-5 pr-10 my-10 inline-block place-content-center" id="about">
      <h1 className="mb-10 text-5xl text-center bg-gradient-to-b from-slate-800 via-violet-500 to-zinc-400 text-transparent bg-clip-text">
        About Me
      </h1>
      <Card cardType="about" cardStyle="h-auto max-xl:mx-5">
        <div className="flex max-xl:flex-col max-xl:h-auto place-items-center max-xl:overflow-hidden">
          <div className="w-1/3 max-xl:mb-5 flex flex-col place-items-center">
            <img
              src={profileImg}
              className="rounded-full place-items-center shadow-lg"
            />
          </div>
          <div className="w-2/3 text-left xl:ml-10 leading-loose max-xl:!w-full place-self-start max-xl:overflow-scroll">
            <h2 className="mb-5">
              Hey there, I'm Jeremy. I'm a software engineer with 3 and a half
              years of professional experience building data-driven UIs for
              software that helps support critical operations for large-scale
              organizations.
            </h2>
            <p className="mb-5">
              I've always had a deep interest in computers and technology and
              was intersted in programming, but didn't start until 2017. Before
              transitioning into software engineering, I worked as a member of
              the Learning and Development team at Analysis Group, the largest
              privately-held consulting firm in the US. One day, I thought I'd
              try making one of our training courses more engaging. I found that
              with a bit of custom HTML, CSS, and JavaScript, I was able to
              drastically improve the quality of the course. From there, I was
              hooked.
            </p>
            <p className="mb-5">
              I taught myself JavaScript, React, and Python and used those new
              skills to develop internal business solutions using data science
              libraries, build collaboration sites using Microsoft SharePoint
              and developed email templates and new styling in our learning
              management system. I also developed a full-stack training portal
              for a martial arts school in New Jersey using the MERN stack.
            </p>
            <p className="mb-5">
              In 2021, I joined Telus Agronomy as a frontend software engineer,
              where I developed data-driven user interfaces for one of the
              largest agricultural software platforms in the world.
            </p>
            <p>
              Currently, I work at Apple on the Global Security Tools team,
              where I develop web and iOS features used by Apple employees
              worldwide to support strict product secrecy and maintenance of
              critical US government compliance.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
