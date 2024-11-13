import { useEffect, useState } from "react";
import authentication_logo from "../../assets/images/authenticated.svg";
import DataTable from "react-data-table-component";

export default function AdminUsers() {
  const [adminUsers, setAdminUsers] = useState([]);
  const [record, setRecord] = useState(adminUsers);
  const columns = [
    {
      name: "Sr.No",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Authentication",
      selector: (row) =>
        row.isAuthenticate ? (
          <p className="flex flex-row items-center">
            <img
              src={authentication_logo}
              alt="authenticated"
              className="w-5 h-5 mr-1"
            />
            Authenticated
          </p>
        ) : (
          <button
            className="w-32 h-8 bg-blue-500 rounded-md text-white hover:bg-blue-400"
            onClick={() => handleAuthenticate(row._id)}
          >
            Authenticate
          </button>
        ),
      sortable: true,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5002/api/get-admin-users"
        );
        const data = await response.json();
        setAdminUsers(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setRecord(adminUsers);
  }, [adminUsers]);

  const handleAuthenticate = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:5002/api/authenticate-user/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const updatedUser = await response.json();
        setAdminUsers((prevUsers) =>
          prevUsers.map((user) => (user._id === userId ? updatedUser : user))
        );
      } else {
        console.error("Failed to authenticate user");
      }
    } catch (error) {
      console.error("Error authenticating user: ", error);
    }
  };

  const handleFilter = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredData = adminUsers.filter((row) => {
      return (
        row.username.toLowerCase().includes(searchText) ||
        row.email.toLowerCase().includes(searchText) ||
        (row.authentication && "authenticated".includes(searchText)) ||
        (!row.authentication && "not authenticated".includes(searchText))
      );
    });
    setRecord(filteredData);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center my-2">
        <p className="text-xl font-medium ml-4">Admin Users</p>
        <p>
          <label htmlFor="search" className="text-lg mr-2">
            Search:
          </label>
          <input
            type="text"
            name="search"
            className="w-56 h-10 px-2 py-2 ring-2 text-base ring-gray-400 ring-inset focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md"
            onChange={handleFilter}
          />
        </p>
      </div>
      <DataTable
        columns={columns}
        data={record}
        customStyles={customStyles}
        pagination
        noDataComponent={
          <p className="text-lg text-gray-500">No data available</p>
        }
      />
    </>
  );
}
