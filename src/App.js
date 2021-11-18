import { Component } from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
        <Routes>
          <Route path="/room" element={<HomePage/>}>
          </Route>
          <Route path="/" exact>
          </Route>
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;
