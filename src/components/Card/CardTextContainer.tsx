import { Github, Link } from "lucide-react";

interface CardTextContainerProps {
  company?: string;
  title?: string;
  about?: string;
  cardType?: "about" | "exp" | "proj";
  accomplishments?: string[];
  years?: string;
  ghRepo?: string;
  link?: string;
}

export default function CardTextContainer({
  company,
  title,
  years,
  about,
  accomplishments,
  ghRepo,
  link,
  cardType,
}: CardTextContainerProps) {
  return (
    <div
      className={`text-left pt-5 pr-5 pl-5 h-2/3 xl:h-full xl:w-3/5 xl:min-h-[300px] sm:max-xl:mt-auto ${cardType === "proj" && "xl:w-full xl:h-1/3"} ${cardType === "exp" && "sm:max-xl:mb-auto md:max-xl:h-[450px]"}`}
    >
      <h1 className="max-xl:text-xl text-lg mb-3">{company}</h1>
      {(ghRepo || link) && (
        <div className="flex mb-3 max-xl:place-content-center">
          {ghRepo && (
            <a href={ghRepo} target="blank" className="text-green-300 mr-10">
              <Github strokeWidth={3} />
            </a>
          )}
          {link && (
            <a href={link} target="blank" className="text-green-300">
              <Link strokeWidth={3} />
            </a>
          )}
        </div>
      )}
      <h2 className="max-xl:text-base mb-1">{title}</h2>
      {years && <h2 className="max-xl:text-base mb-3">{years}</h2>}
      <p
        className={`mb-5 max-xl:text-sm max-xl:hidden ${cardType === "proj" && "max-lg:hidden"}`}
      >
        {about}
      </p>
      {accomplishments && (
        <ul className="list-disc pl-10 max-md:hidden max-lg:leading-loose">
          {accomplishments?.map((acc: string, i: number) => (
            <li className="mb-2 sm:max-xl:text-sm" key={i}>{acc}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
