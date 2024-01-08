import { useEffect, useState } from "react";
import Card from "./components/card";
import { CategoryType } from "./type";
import data from "./data/data.json";
import removeIcon from "../public/assets/icon-remove.svg";

function App() {
  const [list, setList] = useState<CategoryType[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  useEffect(() => {
    setList(data);

    return () => {
      setList([]);
    };
  }, []);

  const handleLanguageClick = (language: string) => {
    // Toggle the selected language
    setSelectedLanguages((prevLanguages) => {
      if (prevLanguages.includes(language)) {
        // Remove language if already selected
        return prevLanguages.filter((lang) => lang !== language);
      } else {
        // Add language if not selected
        return [...prevLanguages, language];
      }
    });
  };

  const handleClearClick = () => {
    setSelectedLanguages([]);
  };

  // Filter the list based on the selected language
  const filteredList = selectedLanguages.length
    ? list.filter((item) =>
        item.languages.some((lang) => selectedLanguages.includes(lang))
      )
    : list;

  //---------------------------------------------------------------------------
  return (
    <div className="flex flex-col">
      <header className="h-fit w-full bg-c-primary header"></header>
      <main className="transition-padding px-8 pb-8 lg:px-32">
        {/*-------- Start Filter by category --------*/}
        {selectedLanguages.length > 0 && (
          <div
            className={`flex w-full -translate-y-6 flex-row items-center justify-between rounded-[0.25rem] bg-c-neutral-lighter px-4 py-2 shadow-lg transition-opacity`}
          >
            <ul className="flex flex-row flex-wrap items-center gap-4">
              {selectedLanguages.map((language, index) => (
                <li
                  key={index}
                  className="flex flex-row gap-1 overflow-hidden rounded-[0.25rem] bg-c-neutral-light"
                >
                  <p className="px-2">{language}</p>
                  <button
                    className="bg-c-primary p-1 hover:bg-c-neutral-darker"
                    onClick={() => handleLanguageClick(language)}
                  >
                    <img width={16} height={16} src={removeIcon} alt="" />
                  </button>
                </li>
              ))}
            </ul>
            <button className="p-2 hover:underline" onClick={handleClearClick}>
              Clear
            </button>
          </div>
        )}
        {/*-------- End of Filter by category --------*/}
        {/*-------- Start List Card --------*/}
        <ul className="mt-8 flex flex-col gap-12 md:gap-6">
          {filteredList.map((list, index) => (
            <Card
              key={index}
              card={list}
              selectedLanguages={selectedLanguages}
              handleLanguageClick={handleLanguageClick}
            />
          ))}
        </ul>
        {/*-------- End List Card --------*/}
      </main>
    </div>
  );
}

export default App;
