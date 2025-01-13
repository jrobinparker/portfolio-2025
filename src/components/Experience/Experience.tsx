import { useState, useMemo } from 'react';
import Card from '../Card/Card.tsx';
import CardImageContainer from '../Card/CardImageContainer.tsx';
import CardTextContainer from '../Card/CardTextContainer.tsx';
import experienceList from './experienceList.ts';

export default function Experience() {
  const [ expIdx, setExpIdx ] = useState(0);

  const expBulletPoints = Array.from({length: experienceList.length}, (_, idx) => {
    return (
      <span
        className="text-zinc-100 text-5xl cursor-pointer"
        onClick={() => setExpIdx(idx)}>
        &bull;
      </span>
    );
  });

  function handleForwardClick() {
    if (expIdx >= experienceList.length - 1)  {
      setExpIdx(0);
      return;
    }
    setExpIdx(expIdx + 1);
  }

  function handleBackwardClick() {
    if (expIdx <= 0) {
      setExpIdx(experienceList.length - 1);
      return;
    }
    setExpIdx(expIdx - 1);
  }

  return (
    <div className="w-full h-full flex flex-col place-content-center">
      <h1 className="text-zinc-100 mb-10">Experience</h1>
        <div className="flex flex-row place-content-center">
        <span className="place-self-center text-zinc-100 mr-10 text-2xl cursor-pointer" onClick={handleBackwardClick}>
            &lt;
          </span>
          <Card>
            <CardImageContainer>
                <div className="place-items-center grid grid-rows-3 grid-flow-col gap-10">
                  {experienceList[expIdx].tech
                    .map(tech => <img src={tech} />)}
                </div>
            </CardImageContainer>
            <CardTextContainer
              company={experienceList[expIdx].company}
              title={experienceList[expIdx].title}
              years={experienceList[expIdx].years}
              accomplishments={experienceList[expIdx].accomplishments}
            />
          </Card>
          <span className="place-self-center text-zinc-100 ml-10 text-2xl cursor-pointer" onClick={handleForwardClick}>
            &gt;
          </span>
        </div>
        <div className="flex flex-row w-40 mt-10 place-self-center justify-between">
          {expBulletPoints}
        </div>
    </div>
  )
}