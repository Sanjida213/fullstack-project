import './App.scss'
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>  
    </Router>
  )
}

export default App
