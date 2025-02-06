import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import books from "./Books/fantasy.json";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <BookList books={books} />
      <MyFooter />
    </div>
  );
}

export default App;
