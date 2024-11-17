import article_logo from "../../assets/images/article.png";
import quiz_logo from "../../assets/images/quiz.png";
import problem_logo from "../../assets/images/problem.png";
import reward_logo from "../../assets/images/rewards.png";
import user_logo from "../../assets/images/users.png";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname.split("/")[1]);
  }, [location]);
  return (
    <>
      <div className="bg-[#202329] min-w-[18rem] h-screen top-0 left-0 fixed">
        <div className="image flex flex-col justify-center gap-2 pt-8 pb-4 items-center">
          <div className="flex justify-center items-center gap-x-2">
            <p className="text-white text-2xl">EasyHustler</p>
          </div>
          <hr className="w-60 mt-4" />
        </div>
        <div className="flex flex-col mx-3">
          <ul className="text-white text-xl">
            <Link to="/authentication">
              <li
                className={`flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md ${
                  activeLink === "authentication"
                    ? "bg-gray-700 rounded-md"
                    : ""
                }`}
                id="authentication"
              >
                <img src={user_logo} alt="user_logo" className="w-6 h-6" />
                Authentication
              </li>
            </Link>
            <Link to="/learning">
              <li
                className={`flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md ${
                  activeLink === "learning" ? "bg-gray-700 rounded-md" : ""
                }`}
                id="learning"
              >
                <img
                  src={article_logo}
                  alt="article_logo"
                  className="w-6 h-6"
                />
                Learning Material
              </li>
            </Link>
            <Link to="/quizzes">
              <li
                className={`flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md ${
                  activeLink === "quizzes" ? "bg-gray-700 rounded-md" : ""
                }`}
                id="quizzes"
              >
                <img src={quiz_logo} alt="quiz_logo" className="w-6 h-6" />
                Quizzes
              </li>
            </Link>
            <Link to="/problems">
              <li
                className={`flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md ${
                  activeLink === "problems" ? "bg-gray-700 rounded-md" : ""
                }`}
                id="problems"
              >
                <img
                  src={problem_logo}
                  alt="problem_logo"
                  className="w-6 h-6"
                />
                Problems
              </li>
            </Link>
            <Link to="/users">
              <li
                className={`flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md ${
                  activeLink === "users" ? "bg-gray-700 rounded-md" : ""
                }`}
                id="users"
              >
                <img src={user_logo} alt="user_logo" className="w-6 h-6" />
                Users
              </li>
            </Link>
            <Link to="/rewards">
              <li
                className={`flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md ${
                  activeLink === "rewards" ? "bg-gray-700 rounded-md" : ""
                }`}
                id="rewards"
              >
                <img src={reward_logo} alt="reward_logo" className="w-6 h-6" />
                Rewards
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
