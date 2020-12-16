import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import mainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div className="_component" data-name="app">
        <Wrapper>
          <Route exact path="/" component={mainPage} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;