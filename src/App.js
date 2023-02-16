import "./App.css";
import CreatePosts from "./components/CreatePosts";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <CreatePosts />
      {/* <PostsPage/> */}
      <Footer />
    </div>
  );
}

export default App;
