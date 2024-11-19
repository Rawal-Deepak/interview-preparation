import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DataTable from "react-data-table-component";

export default function Assignments() {
  const location = useLocation();
  const columns = [
    {
      name: "Sr.No",
      selector: (row) => row.srNo,
      sortable: true,
    },
    {
      name: "Question",
      selector: (row) => row.question,
      sortable: true,
    },
    {
      name: "Topic",
      selector: (row) => row.topic,
      sortable: true,
    },
    {
      name: "Difficulty",
      selector: (row) => row.difficulty,
      sortable: true,
    },
    {
      name: "Choice",
      selector: (row) => row.choice,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => row.action,
      sortable: true,
    },
  ];

  const data = [
    {
      srNo: 1,
      question: "What is a React Hook?",
      topic: "react_basics",
      difficulty: "Easy",
      choice: "Single",
      action: "Edit Delete",
    },
  ];

  const customStyles = {
    rows: {
      style: {
        fontSize: "18px",
      },
    },
    headCells: {
      style: {
        fontSize: "17px",
        fontWeight: "bold",
      },
    },
    cells: {
      style: {
        fontSize: "16px",
      },
    },
  };

  return (
    <>
      {location.pathname === "/assignments" && (
        <div>
          <div className="flex justify-between items-center mt-3">
            <div className="font-medium text-xl">
              <p>Topic wise Assignments</p>
            </div>
            <div className="flex items-center gap-x-6">
              <div>
                <label htmlFor="search" className="text-lg mr-2">
                  Search:
                </label>
                <input
                  type="text"
                  name="search"
                  className="w-56 h-10 px-2 py-2 ring-2 text-base ring-gray-400 ring-inset focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md"
                  // onChange={handleFilter}
                />
              </div>
              <Link to="modify-assignments">
                <button className="w-40 h-10 bg-[#5652B7] rounded-md text-white hover:bg-[#6461BD] shadow-md">
                  Add Question
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <DataTable
              columns={columns}
              data={data}
              customStyles={customStyles}
              pagination
              responsive
              highlightOnHover
              pointerOnHover
              noDataComponent={
                <p className="text-lg text-gray-500">No data available</p>
              }
            />
          </div>
        </div>
      )}
      <Outlet />
    </>
  );
}
