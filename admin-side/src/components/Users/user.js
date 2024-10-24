import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/sidebar";
import "datatables.net-responsive";

export default function User() {
  const name = "users";
  const $ = require("jquery");
  $(document).ready(function () {
    $("#userTable").DataTable();
  });
  return (
    <>
      <div className="flex grid-cols-2">
        <Sidebar name={name} />
        <div className="col-span-2 ml-[18rem]">
          <Navbar name="Users" />
          <div className="px-6 py-6 w-[77.4rem] mt-12">
            <table className="table table-auto" id="userTable">
              <thead className="border border-black">
                <tr>
                  <th className="border border-black">Sr.No</th>
                  <th className="border border-black">Name</th>
                  <th className="border border-black">Email</th>
                  <th className="border border-black">Mobile</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black">1</td>
                  <td className="border border-black">Deepak</td>
                  <td className="border border-black">deepak@gmail.com</td>
                  <td className="border border-black">+919979920290</td>
                </tr>
                <tr>
                  <td className="border border-black">2</td>
                  <td className="border border-black">Dhruv</td>
                  <td className="border border-black">dhruv@gmail.com</td>
                  <td className="border border-black">+919909137648</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
