interface CardTextContainerProps {
    company: string;
    title: string;
    years: string;
    about: string;
    accomplishments: string[];
}

export default function CardTextContainer({ company, title, years, about, accomplishments }: CardTextContainerProps) {
    return (
        <div className="text-left w-3/5 h-full p-5 pl-10 text-bg">
            <h1 className="2xl:text-2xl text-lg font-weight-bold mb-5">{company}</h1>
            <h2 className="2xl:text-xl text-lg font-weight-semibold mb-1">{title}</h2>
            <h2 className="2xl:text-xl text-md mb-5">
              {years}
            </h2>
            <p className="mb-5">{about}</p>
            <ul className="list-disc pl-10 md:text-base leading-loose">
              {accomplishments.map((acc: string) => <li className="mb-2">{acc}</li>)}
            </ul>
          </div>
    )
}