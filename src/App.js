import "./App.css";
import CreatePosts from "./components/CreatePosts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostsPage from "./Pages/PostsPage";
import CreatePP from "./Pages/CreatePP";
import SetTime from "./components/SetTime";
import Calendar from "./components/Calendar/SetCalendar";
import Categories from "./components/Categories";
function App() {
  return (
    <div className="App">
      <Header />
      <SetTime/>
      {/* <Categories/> */}
      {/* <Calendar/> */}
      <CreatePP/>
      
      <PostsPage/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
