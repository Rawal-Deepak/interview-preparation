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
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Topics",
      selector: (row) => row.topics,
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
      title: "What is a React Hook?",
      description: "react_basics",
      topics: "Easy",
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
      {location.pathname === "/coding-questions" && (
        <div>
          <div className="flex justify-between items-center mt-3">
            <div className="font-medium text-xl">
              <p>Coding Questions For Practice</p>
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
              <Link to="modify-coding-question">
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
