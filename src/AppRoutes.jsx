import { Routes, Route } from "react-router";
import Home from "./components/Home";
import Users from "./components/Users";
import Posts from "./components/Posts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}

export default AppRoutes