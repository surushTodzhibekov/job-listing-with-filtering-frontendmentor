import { CategoryType } from "../type";

function Card({
  card,
  selectedLanguages,
  handleLanguageClick,
}: {
  card: CategoryType;
  selectedLanguages: string[];
  handleLanguageClick: (value: string) => void;
}) {
  return (
    <li
      className={`relative flex flex-col rounded-[0.25rem] bg-c-neutral-lightest p-4 shadow-lg md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-6 lg:px-8 lg:py-4`}
    >
      <div className="flex flex-row items-center gap-4 border-b border-b-c-neutral-dark md:basis-3/4 md:border-none">
        <div className="absolute -top-6 md:static">
          <img className="h-12 w-12 md:h-24 md:w-24" src={card.logo} alt={""} />
        </div>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex flex-row flex-wrap gap-4">
            <p className="font-bold">{card.company}</p>
            <div className="flex flex-row items-center justify-center gap-2">
              {card.new && (
                <p className="rounded-xl bg-c-primary px-2 text-c-neutral-light">
                  NEW!
                </p>
              )}
              {card.featured && (
                <p className="rounded-xl bg-c-neutral-darker px-2 text-c-neutral-light">
                  FEATURED
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-4">
            <h2 className=" text-lg font-bold text-c-neutral-darker hover:cursor-pointer hover:text-c-primary">
              {card.position}
            </h2>
            <ul className="flex flex-row flex-wrap items-center gap-x-6 text-c-neutral-dark">
              <li>{card.postedAt}</li>
              <li className="list-disc">{card.contract}</li>
              <li className="list-disc">{card.location}</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="flex basis-2/4 flex-row flex-wrap gap-4 pt-4 font-bold md:justify-end">
        {card.languages.map((lang, i) => (
          <li key={i}>
            <button
              className={`rounded-[0.25rem] bg-c-neutral-light px-2 transition-colors hover:bg-c-primary hover:text-c-neutral-light ${
                selectedLanguages.includes(lang) ? "active:bg-c-primary" : ""
              }`}
              onClick={() => handleLanguageClick(lang)}
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Card;
