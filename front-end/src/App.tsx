import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import ViewTvShows from "./containers/ViewTvShows/ViewTvShows";
import CreateTvShow from "./containers/CreateTvShow/CreateTvShow";
import EditTvShow from "./containers/EditTVShow/EditTvShow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tvShows" element={<ViewTvShows />} />
        <Route path="/tvShow/create" element={<CreateTvShow />} />
        <Route path="/tvShow/edit/:id" element={<EditTvShow />} />
      </Routes>
    </Router>
  );
}

export default App;
