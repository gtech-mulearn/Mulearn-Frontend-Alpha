import { useContext, useState } from "react";
import { TableContext } from "../../context/tableContext";
import { getTableData } from "../../services/api";
const Pagination = () => {
  // const pageNumbers = [1, 2, "...", 9, 10]; // Simplified for testing

  const [pageIndex, setpageIndex] = useState(1);

  const { paginationData, setpaginationData, settableData } = useContext<
    paginationProps | any
  >(TableContext);
  // console.log("paginationData", paginationData);

  const handelForward = async () => {
    if (paginationData.isNext) {
      const data = await getTableData({
        pageIndex: pageIndex + 1,
        perPage: 10,
      });
      //   console.log("data", data);
      settableData(data.data);
      setpaginationData(data.pagination);
      setpageIndex(pageIndex + 1);
    }
  };

  const handelBackward = async () => {
    // console.log("paginationData", paginationData.isPrev);
    if (paginationData.isPrev) {
      const data = await getTableData({
        pageIndex: pageIndex - 1,
        perPage: pageIndex === 2 ? 15 : 10,
      });
      console.log("data", data);
      settableData(pageIndex === 2 ? data.data.slice(3) : data.data);
      setpaginationData(data.pagination);
      setpageIndex(pageIndex - 1);
    }
  };

  const handelPageChange = async (pageNumber: number) => {
    const data = await getTableData({
      pageIndex: pageNumber,
      perPage: 10,
    });
    settableData(data.data);
    setpaginationData(data.pagination);
    setpageIndex(pageNumber);
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      <button
        onClick={handelBackward}
        className="w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-500 rounded-sm"
      >
        <span className="sr-only">Previous</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {paginationData.totalPages ? (
        Array(paginationData.totalPages)
          .fill(0)
          .map((_, index) => (
            <button
              onClick={() => handelPageChange(index + 1)}
              key={index}
              className={`w-8 h-8 flex items-center justify-center outline-1 rounded-sm
            ${
              index + 1 === pageIndex
                ? "text-orange-500 bg-white outline outline-orange-500"
                : "bg-white text-gray-700 hover:bg-orange-100 outline outline-grey-500"
            }`}
            >
              {index + 1}
            </button>
          ))
      ) : (
        <div>table data not found</div>
      )}

      <button
        onClick={handelForward}
        className="w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-500 rounded-sm"
      >
        <span className="sr-only">Next</span>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
