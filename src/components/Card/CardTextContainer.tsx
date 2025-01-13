export default function CardTextContainer({ company, title, years, accomplishments }) {
    return (
        <div className="text-left w-3/5 h-full p-5 pl-10 text-bg">
            <h1 className="2xl:text-xl text-lg font-weight-bold mb-5">{company}</h1>
            <h2 className="2xl:text-xl text-lg font-weight-semibold">{title}</h2>
            <p className="2xl:text-xl text-md mb-5">
              {years}
            </p>
            <ul className="list-disc pl-10 md:text-base">
              {accomplishments.map((acc) => <li>{acc}</li>)}
            </ul>
          </div>
    )
}