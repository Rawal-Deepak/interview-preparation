import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/Navbar";

function addArticle() {
  const name = "article";
  return (
    <>
      <div className="flex grid-cols-2">
        <Sidebar name={name} />
        <div className="col-span-2 ml-[18rem]">
          <Navbar name="Article" />
          <div className="flex mt-14 py-6 px-4"></div>
        </div>
      </div>
    </>
  );
}

export default addArticle;
