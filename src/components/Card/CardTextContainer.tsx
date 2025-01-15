import { Github, Link } from 'lucide-react';

interface CardTextContainerProps {
    company?: string;
    title?: string;
    about?: string;
    cardType?: 'exp' | 'proj';
    accomplishments?: string[];
    years?: string;
    ghRepo?: string;
    link?: string;
}

export default function CardTextContainer({ company, title, years, about, accomplishments, ghRepo, link, cardType }: CardTextContainerProps) {
    return (
        <div className={`text-left pt-5 pr-5 pl-5 scroll h-2/3 xl:h-full xl:w-3/5 xl:min-h-[300px] overflow-scroll sm:max-xl:mt-auto ${cardType === 'proj' && 'xl:w-full xl:h-1/3'}`}>
            <h1 className="md:max-xl:text-xl text-lg mb-5">
              {company}
            </h1>
            <div className="flex mb-5">
              {ghRepo && <a href={ghRepo} target="blank" className="text-green-300 mr-10"><Github strokeWidth={3} /></a>}
              {link && <a href={link} target="blank" className="text-green-300"><Link strokeWidth={3} /></a>}
            </div>
            <h2 className="md:max-xl:text-base mb-1">{title}</h2>
            {years && (
              <h2 className="md:max-xl:text-base mb-5">
                {years}
              </h2>
            )}
            <p className={`mb-5 md:max-xl:text-sm sm:max-md:hidden ${cardType === 'proj' && 'max-sm:hidden'}`}>{about}</p>
            {accomplishments && (
              <ul className="list-disc pl-10 sm:max-md:hidden md:max-lg:leading-loose">
                {accomplishments?.map((acc: string) => <li className="mb-2 sm:max-xl:text-sm">{acc}</li>)}
              </ul>
            )}
          </div>
    )
}