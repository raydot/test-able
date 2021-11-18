import { Component } from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage";
import IndexPage from "./pages/homepage/indexpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
        <Routes>
          <Route path="/room" element={<HomePage/>} />
          <Route path="/" element={<IndexPage/>} />
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;
