import Card from '../Card/Card.tsx';
import CardImageContainer from '../Card/CardImageContainer.tsx';
import CardTextContainer from '../Card/CardTextContainer.tsx';
import projectsList from './projectsList.ts';

export default function Projects() {
  return (
    <div className="h-screen flex flex-col" id="proj">
      <h1 className="mb-10 text-4xl sm:max-md:text-2xl">Projects</h1>
        <div className="flex flex-col xl:flex-row max-xl:self-center">
          {projectsList.map(proj => {
            return (
              <Card cardType={"proj"}>
              <CardImageContainer cardType={"proj"}>
                  <img src={proj.img} className="max-xl:w-4/5 self-center rounded-md shadow-lg mb-5" />
              </CardImageContainer>
              <CardTextContainer
                company={proj.company}
                about={proj.about}
                ghRepo={proj.ghRepo}
                link={proj.link}
                cardType={'proj'}
              />
            </Card>
            )
          })}
        </div>
    </div>
  )
}