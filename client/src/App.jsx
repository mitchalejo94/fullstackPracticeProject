import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Posts/Home</Link>
        <Link to="/createpost">Create a Post</Link>
        <Link to="/login">Login</Link>
        <Link to="/registration">Registration</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
