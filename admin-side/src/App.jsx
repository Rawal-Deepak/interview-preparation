import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import User from "./components/Users/user.jsx";
import Article from "./components/Article/article.jsx";
import Quizzes from "./components/Quizzes/quizzes.jsx";
import Problem from "./components/Problem/problem.jsx";
import Rewards from "./components/Rewards/rewards.jsx";
import Login from "./components/Login/login.jsx";
import Register from "./components/Register/Register.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
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
