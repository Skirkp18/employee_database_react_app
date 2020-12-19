import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
// import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={MainPage}/>
          {/* <Route exact path="/*" component={ErrorPage}/> */}
          </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;