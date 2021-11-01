import { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage";
import TitlePage from "./pages/titlepage/titlepage";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <h1>testABLE</h1>
        <span>   Online code testing for everyone. </span> */}
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={TitlePage} />
            <Route exact path={"/visual-impairment"} component={HomePage} />
            <Route exact path={"/hearing-impairment"} component={HomePage} />
            <Route exact path={"/physical-impairment"} component={HomePage} />
            <Route exact path={"/visual-hearing-impairment"} component={HomePage} />
            <Route exact path={"/hearing-physical-impairment"} component={HomePage} />
            <Route exact path={"/visual-physical-impairment"} component={HomePage} />
            <Route exact path={"/visual-hearing-physical-impairment"} component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    )

  }
}

export default App;
