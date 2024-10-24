import Sidebar from "../Sidebar/sidebar";
import Navbar from "../Navbar/Navbar";

export default function Quizzes() {
  const name = "quizzes";
  return (
    <>
      <div className="flex grid-cols-2">
        <Sidebar name={name} />
        <div className="col-span-2 ml-[18rem]">
          <Navbar name="Quizzes" />
        </div>
      </div>
    </>
  );
}
