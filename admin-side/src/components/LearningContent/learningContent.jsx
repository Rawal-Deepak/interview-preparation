import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DataTable from "react-data-table-component";

export default function Article() {
  const location = useLocation();
  const columns = [
    {
      name: "Sr.No",
      selector: (row) => row.srNo,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Sub-Category",
      selector: (row) => row.subCategory,
      sortable: true,
    },
    {
      name: "Section",
      selector: (row) => row.section,
      sortable: true,
    },
    {
      name: "Sub-Section",
      selector: (row) => row.subSection,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
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
      category: "Frameworks & Libraries",
      subCategory: "React",
      section: "Hooks",
      subSection: "useState",
      description: "Maintain State of page",
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
      {location.pathname === "/learning" && (
        <div>
          <div className="flex justify-between items-center mt-3">
            <div className="font-medium text-xl">
              <p>Learning Content Material</p>
            </div>
            <div className="flex items-center gap-x-6">
              <label htmlFor="search" className="text-lg mr-2">
                Search:
              </label>
              <input
                type="text"
                name="search"
                className="w-56 h-10 px-2 py-2 ring-2 text-base ring-gray-400 ring-inset focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md"
                // onChange={handleFilter}
              />
              <Link to="modify-content">
                <button className="w-32 h-10  bg-[#5652B7] rounded-md text-white hover:bg-[#6461BD] shadow-md">
                  Add Content
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
