interface CardTextContainerProps {
    company: string;
    title: string;
    years: string;
    about: string;
    accomplishments: string[];
}

export default function CardTextContainer({ company, title, years, about, accomplishments }: CardTextContainerProps) {
    return (
        <div className="text-left pt-5 pr-5 pl-5 scroll h-2/3 xl:h-full xl:w-3/5 xl:min-h-[300px] overflow-scroll sm:max-xl:mt-auto">
            <h1 className="md:max-xl:text-xl text-lg mb-5">{company}</h1>
            <h2 className="md:max-xl:text-base mb-1">{title}</h2>
            <h2 className="md:max-xl:text-base mb-5">
              {years}
            </h2>
            <p className="mb-5 md:max-xl:text-sm sm:max-md:hidden">{about}</p>
            <ul className="list-disc pl-10 sm:max-md:hidden md:max-lg:leading-loose">
              {accomplishments.map((acc: string) => <li className="mb-2 sm:max-xl:text-sm">{acc}</li>)}
            </ul>
          </div>
    )
}