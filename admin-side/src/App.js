import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./components/Users/user.js";
import Article from "./components/Article/article.js";
import Quizzes from "./components/Quizzes/quizzes.js";
import Problem from "./components/Problem/problem.js";
import Rewards from "./components/Rewards/rewards.js";
import Login from "./components/Login/login.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<User />} />
        <Route path="/article" element={<Article />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/problems" element={<Problem />} />
        <Route path="/rewards" element={<Rewards />} />
      </Routes>
    </Router>
  );
}

export default App;
