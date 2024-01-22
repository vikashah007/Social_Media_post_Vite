import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatPost";
import PostList from "./Components/PostList";
import { useState } from "react";
import PostListStore from "./Post/PostListStore";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListStore>
      <div className="appContainer">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer />
        </div>
      </div>
    </PostListStore>
  );
}

export default App;
