import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/Navbar";

export default function Problem() {
  const name = "problems";
  return (
    <>
      <div className="flex grid-cols-2">
        <Sidebar name={name} />
        <div className="col-span-2 ml-[18rem]">
          <Navbar name="Coding Problems" />
        </div>
      </div>
    </>
  );
}
