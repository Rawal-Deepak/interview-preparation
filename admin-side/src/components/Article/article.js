import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/Navbar";

export default function Article() {
  const name = "article";
  return (
    <>
      <div className="flex grid-cols-2">
        <Sidebar name={name} />
        <div className="col-span-2 ml-[18rem]">
          <Navbar name="Article" />
        </div>
      </div>
    </>
  );
}
