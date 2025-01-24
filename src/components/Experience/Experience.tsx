import { useState } from "react";
import Card from "../Card/Card.tsx";
import CardImageContainer from "../Card/CardImageContainer.tsx";
import CardTextContainer from "../Card/CardTextContainer.tsx";
import NavigationBulletPoint from "../Card/NavigationBulletPoint.tsx";
import { debounce } from "lodash";
import { ChevronLeft, ChevronRight } from "lucide-react";
import experienceList from "./experienceList.ts";

export default function Experience() {
  const [expIdx, setExpIdx] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);

  const expBulletPoints = Array.from(
    { length: experienceList.length },
    (_, idx) => (
      <NavigationBulletPoint
        idx={idx}
        expIdx={expIdx}
        setExpIdx={() => setExpIdx(idx)}
      />
    ),
  );

  function handleForwardClick() {
    if (expIdx >= experienceList.length - 1) {
      setExpIdx(0);
      setCurrentIdx(0);
      return;
    }
    setExpIdx(expIdx + 1);
    setCurrentIdx(currentIdx + 1);
  }

  function handleBackwardClick() {
    if (expIdx <= 0) {
      setExpIdx(experienceList.length - 1);
      setCurrentIdx(0);
      return;
    }
    setExpIdx(expIdx - 1);
    setCurrentIdx(currentIdx + 1);
  }

  function debouncedClick(direction: string) {
    return debounce(
      () =>
        direction === "forward" ? handleForwardClick() : handleBackwardClick(),
      300,
    );
  }

  return (
    <div
      className="h-screen py-10 my-20 flex flex-col place-items-center place-content-center max-md:place-content-center"
      id="exp"
    >
      <h1 className="mb-10 text-5xl text-center bg-gradient-to-bl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent">
        Experience
      </h1>
      <div className="flex place-items-center place-content-center h-auto">
        <ChevronLeft
          className="place-self-center cursor-pointer hover:animate-pulse"
          size={64}
          strokeWidth={3}
          onClick={debouncedClick("backward")}
        />
        <Card cardType="exp" cardStyle="max-xl:h-auto max-xl:mx-5" expIdx={expIdx}>
          <CardImageContainer>
            <div className="grid grid-rows-2 xl:grid-rows-3 grid-flow-col gap-10 xl:gap-1 w-4/5 h-4/5 place-self-center place-items-center">
              {experienceList[expIdx].tech.map((tech) => (
                <img
                  src={tech}
                  className="min-w-12 max-w-20 max-md:w-12 place-self-center"
                  loading="lazy"
                />
              ))}
            </div>
          </CardImageContainer>
          <CardTextContainer
            cardType={"exp"}
            company={experienceList[expIdx].company}
            title={experienceList[expIdx].title}
            years={experienceList[expIdx].years}
            about={experienceList[expIdx].about}
            accomplishments={experienceList[expIdx].accomplishments}
          />
        </Card>
        <ChevronRight
          className="place-self-center cursor-pointer hover:animate-pulse"
          size={64}
          strokeWidth={3}
          onClick={debouncedClick("forward")}
        />
      </div>
      <div
        className="flex flex-row w-40 mt-5 place-self-center justify-between"
        id="exp"
      >
        {expBulletPoints}
      </div>
    </div>
  );
}
