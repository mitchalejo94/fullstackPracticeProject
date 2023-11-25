import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    //you want to run the logic here
    axios.get("http://localhost:3002/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Test test</h1>
      {postList.map((value, key) => {
        return <div>{value.title} </div>;
      })}
    </div>
  );
}

export default App;
