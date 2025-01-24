import Card from "../Card/Card.tsx";
import CardImageContainer from "../Card/CardImageContainer.tsx";
import CardTextContainer from "../Card/CardTextContainer.tsx";
import projectsList from "./projectsList.ts";

export default function Projects() {
  return (
    <div className="h-auto py-10 mt-20 flex flex-col place-content-start" id="proj">
      <h1 className="mb-10 text-5xl text-center bg-gradient-to-bl from-slate-800 via-violet-500 to-zinc-400 text-transparent bg-clip-text">
        Projects
      </h1>
      <div className="flex flex-col xl:flex-row max-xl:self-center">
        {projectsList.map((proj) => {
          return (
            <Card cardType={"proj"} cardStyle="max-sm:h-1/3 max-sm:mb-5">
              <CardImageContainer cardType={"proj"}>
                <img
                  src={proj.img}
                  className="max-xl:w-4/5 self-center rounded-md shadow-lg mb-5"
                />
              </CardImageContainer>
              <CardTextContainer
                company={proj.company}
                about={proj.about}
                ghRepo={proj.ghRepo}
                link={proj.link}
                cardType={"proj"}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
}
