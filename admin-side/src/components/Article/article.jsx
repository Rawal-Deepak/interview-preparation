import { Link } from "react-router-dom";

export default function Article() {
  return (
    <>
      <div className="flex justify-end mt-3">
        <Link to="/add-article">
          <button className="w-32 h-10 bg-blue-500 text-white rounded-md">
            Add Articles
          </button>
        </Link>
      </div>
    </>
  );
}
