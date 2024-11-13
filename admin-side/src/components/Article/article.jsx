import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

export default function Article() {
  const name = "article";
  return (
    <>
      <div className="flex grid-cols-2">
        <Sidebar name={name} />
        <div className="col-span-2 ml-[18rem]">
          <Navbar name="Article" />
          <div className="px-6 py-6 w-[77.4rem] mt-12">
            <div className="flex justify-end mt-3">
              <Link to="/add-article">
                <button className="w-32 h-10 bg-blue-500 text-white rounded-md">
                  Add Articles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
