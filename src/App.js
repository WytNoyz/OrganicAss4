import React from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./components/catalog/catalog";
import Todo from "./components/todo/todo";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <i className="fa fa-blind" aria-hidden="true"></i>

      <div className="container">
        <br />
        <br />
        <Catalog></Catalog> {/*comment to simplify*/}
        <hr></hr>
        <Todo>
          <li className="bg"></li>
        </Todo>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
