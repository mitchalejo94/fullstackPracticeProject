import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Posts/Home</Link>
        <Link to="/createpost">Create a Post</Link>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createpost" element={<CreatePost />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
