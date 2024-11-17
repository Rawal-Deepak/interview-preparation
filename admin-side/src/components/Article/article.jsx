import { Link, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Article() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/article" && (
        <div className="flex justify-end mt-3">
          <Link to="modify-article">
            <button className="w-32 h-10 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-500">
              Add Articles
            </button>
          </Link>
        </div>
      )}
      <Outlet />
    </>
  );
}
