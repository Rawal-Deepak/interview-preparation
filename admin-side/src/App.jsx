import User from "./components/Users/user.jsx";
import LearningContent from "./components/LearningContent/learningContent.jsx";
import ModifyLearningContent from "./components/LearningContent/modifyContent.jsx";
import Assignments from "./components/Assignments/assignments.jsx";
import ModifyAssignments from "./components/Assignments/modifyAssignment.jsx";
import CodingQuestion from "./components/CodingQuestions/codingQuestion.jsx";
import ModifyCodingQuestion from "./components/CodingQuestions/modifyCodingQuestions.jsx";
import Rewards from "./components/Rewards/rewards.jsx";
import Login from "./components/Authentication/login.jsx";
import Register from "./components/Authentication/Register.jsx";
import AdminUsers from "./components/Authentication/admin-side-users.jsx";
import Sidebar from "./components/Sidebar/sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let sideBarName = window.location.pathname.replace(/^\//, "");
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
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
                  <Route path="/learning" element={<LearningContent />}>
                    <Route
                      path="modify-content"
                      element={<ModifyLearningContent />}
                    />
                  </Route>
                  <Route path="/assignments" element={<Assignments />}>
                    <Route
                      path="modify-assignments"
                      element={<ModifyAssignments />}
                    />
                  </Route>
                  <Route path="/coding-questions" element={<CodingQuestion />}>
                    <Route
                      path="modify-coding-question"
                      element={<ModifyCodingQuestion />}
                    />
                  </Route>
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
