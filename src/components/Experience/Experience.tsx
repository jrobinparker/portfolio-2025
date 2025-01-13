import { useState } from 'react';
import Card from '../Card/Card.tsx';
import CardImageContainer from '../Card/CardImageContainer.tsx';
import CardTextContainer from '../Card/CardTextContainer.tsx';
import NavigationBulletPoint from '../Card/NavigationBulletPoint.tsx';
import { debounce } from 'lodash';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import experienceList from './experienceList.ts';

export default function Experience() {
  const [ expIdx, setExpIdx ] = useState(0);
  const [ currentIdx, setCurrentIdx ] = useState(0);

  const expBulletPoints = Array.from({length: experienceList.length}, (_, idx) => <NavigationBulletPoint idx={idx} expIdx={expIdx} setExpIdx={() => setExpIdx(idx)} />);

  function handleForwardClick() {

    if (expIdx >= experienceList.length - 1)  {
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
    return debounce(() =>  direction === 'forward' ? handleForwardClick() : handleBackwardClick(), 300);
  }
  return (
    <div className="w-full h-full flex flex-col place-content-center">
      <h1 className="text-zinc-100 mb-10 text-5xl">Experience</h1>
        <div className="flex flex-row place-content-center">
          <ChevronLeft className="place-self-center text-zinc-100 ml-10 cursor-pointer hover:animate-pulse" size={42} strokeWidth={3} onClick={debouncedClick('backward')} />
          <Card expIdx={expIdx}>
            <CardImageContainer>
                <div className="place-items-center grid grid-rows-3 grid-flow-col gap-10">
                  {experienceList[expIdx].tech
                    .map(tech => <img src={tech} className="max-w-28" loading="lazy" />)}
                </div>
            </CardImageContainer>
            <CardTextContainer
              company={experienceList[expIdx].company}
              title={experienceList[expIdx].title}
              years={experienceList[expIdx].years}
              about={experienceList[expIdx].about}
              accomplishments={experienceList[expIdx].accomplishments}
            />
          </Card>
          <ChevronRight className="place-self-center text-zinc-100 ml-10 cursor-pointer hover:animate-pulse" size={42} strokeWidth={3} onClick={debouncedClick('forward')} />
        </div>
        <div className="flex flex-row w-40 mt-10 place-self-center justify-between">
          {expBulletPoints}
        </div>
    </div>
  )
}