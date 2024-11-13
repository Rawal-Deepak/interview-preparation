import article_logo from "../../assets/images/article.png";
import quiz_logo from "../../assets/images/quiz.png";
import problem_logo from "../../assets/images/problem.png";
import reward_logo from "../../assets/images/rewards.png";
import user_logo from "../../assets/images/users.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  useEffect(() => {
    const element = document.getElementById(props.name);
    if (element) {
      element.classList.add("bg-gray-700");
      element.classList.add("rounded-md");
    } else {
      console.warn(`Element with id "${props.name}" not found.`);
    }
  }, [props.name]);
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
                className="flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md"
                id="authentication"
              >
                <img src={user_logo} alt="user_logo" className="w-6 h-6" />
                Authentication
              </li>
            </Link>
            <Link to="/article">
              <li
                className="flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md"
                id="article"
              >
                <img
                  src={article_logo}
                  alt="article_logo"
                  className="w-6 h-6"
                />
                Article Content
              </li>
            </Link>
            <Link to="/quizzes">
              <li
                className="flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md"
                id="quizzes"
              >
                <img src={quiz_logo} alt="quiz_logo" className="w-6 h-6" />
                Quizzes
              </li>
            </Link>
            <Link to="/problems">
              <li
                className="flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md"
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
                className="flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md"
                id="users"
              >
                <img src={user_logo} alt="user_logo" className="w-6 h-6" />
                Users
              </li>
            </Link>
            <Link to="/rewards">
              <li
                className="flex gap-x-4 items-center hover:bg-gray-700 px-4 py-2 my-2 cursor-pointer hover:rounded-md"
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
