import User from "./components/Users/user.jsx";
import Article from "./components/Article/article.jsx";
import Quizzes from "./components/Quizzes/quizzes.jsx";
import Problem from "./components/Problem/problem.jsx";
import Rewards from "./components/Rewards/rewards.jsx";
import Login from "./components/Authentication/login.jsx";
import Register from "./components/Authentication/Register.jsx";
import AdminUsers from "./components/Authentication/admin-side-users.jsx";
import AddArticle from "./components/Article/add_article.jsx";
import Sidebar from "./components/Sidebar/sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let sideBarName = window.location.pathname.replace(/^\//, "");
  return (
    <Router>
      <div className="flex grid-cols-2">
        {isAuthenticated ? <Sidebar name={sideBarName} /> : null}
        <div className={isAuthenticated ? "col-span-2 ml-[18rem]" : "w-full"}>
          {isAuthenticated && (
            <Navbar setIsAuthenticated={setIsAuthenticated} />
          )}
          <div
            className={
              isAuthenticated ? "px-6 py-6 w-[77.4rem] mt-12" : "w-full"
            }
          >
            <Routes>
              <Route
                path="/login"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              />
              <Route path="/register" element={<Register />} />

              {isAuthenticated ? (
                <>
                  <Route path="/authentication" element={<AdminUsers />} />
                  <Route path="/users" element={<User />} />
                  <Route path="/article" element={<Article />} />
                  <Route path="/add-article" element={<AddArticle />} />
                  <Route path="/quizzes" element={<Quizzes />} />
                  <Route path="/problems" element={<Problem />} />
                  <Route path="/rewards" element={<Rewards />} />
                </>
              ) : (
                <Route
                  path="*"
                  element={<Login setIsAuthenticated={setIsAuthenticated} />}
                />
              )}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
