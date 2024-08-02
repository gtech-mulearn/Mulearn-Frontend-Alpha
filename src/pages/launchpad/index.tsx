import { useEffect, useState } from "react";
import Card from "./components/card";
import Table from "./components/table";
import mulogo from "./assets/mulogo.svg";
import { getTableData } from "./services/api";
import { TableContext } from "./context/tableContext";
import Pagination from "./components/pagination/Pagination";

function Launchpad() {
  const [tableData, settableData] = useState([]);
  const [paginationData, setpaginationData] = useState<paginationProps | {}>(
    {}
  );
  // const [inputValue, setInputValue] = useState("");
  const [topThree, settopThree] = useState<CardProps[] | []>([]);
  const [searchTearm, setsearchTearm] = useState("");
  useEffect(() => {
    getTableData().then((data) => {
      settableData(data.data);
      setpaginationData(data.pagination);
      settopThree(data.data.slice(0, 3));
    });
  }, []);
  console.log("tableData", tableData);
  console.log("top three", topThree);

  const handleSearch = async () => {
    const data = await getTableData({ search: searchTearm });
    settableData(data.data);
    setpaginationData(data.pagination);
  };

  return (
    <TableContext.Provider
      value={{
        tableData,
        settableData,
        paginationData,
        setpaginationData,
      }}
    >
      <div
        className={`p-5 lg:p-20 py-5 flex flex-col justify-center items-center gap-5 bg-white`}
      >
        <div className="w-full flex justify-center">
          <h1 className="font-extrabold text-[#EF7E28] flex justify-center items-center md:gap-12 sm:gap-5 pb-6 uppercase md:text-[5vw] font-plus-jakarta-sans text-wrap">
            <img className="h-[9vw] max-sm:h-20" src={mulogo} alt="" />
            Launchpad Leaderboard
          </h1>
        </div>
        <div className="flex max-w-md mx-auto">
          <input
            value={searchTearm}
            type="text"
            onChange={(e) => setsearchTearm(e.target.value)}
            placeholder="search"
            className="flex-grow px-4 py-2 md:text-base text-sm md:min-w-64 font-plus-jakarta-sans border border-gray-300 rounded-l-md focus:outline-none ring-1 ring-orange-500 focus:border-transparent bg-white"
          />
          <button
            onClick={handleSearch}
            className="md:px-6 px-4 py-2 md:text-base md:font-medium text-sm text-white bg-orange-500 rounded-r-md outline-none ring-1 ring-orange-500"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-5 py-6">
          {topThree.map((user, index) => (
            <Card
              key={index}
              full_name={user.full_name}
              email={user.muid}
              karma={user.karma}
              rank={index + 1}
              org={user.org}
              district_name={user.district_name}
              muid={user.muid}
              is_public={user.is_public}
            />
          ))}
        </div>
        <div className="w-full">
          {tableData ? <Table data={tableData} /> : <h1>Loading...</h1>}
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </TableContext.Provider>
  );
}

export default Launchpad;
