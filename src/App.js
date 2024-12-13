import "./App.css";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/home";
import Movie from "./pages/movie";

function App() {
  return (
    <div className="App">
      <HomePage />
      {/* <Movie/> */}
    </div>
  );
}

export default App;
