import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default class App extends Component {
  render() {
    const pageSize=6
    const country="in"
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pageSize={pageSize}
                  country={country}
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={pageSize}
                  country={country}
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={pageSize}
                  country={country}
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={pageSize}
                  country={country}
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={pageSize}
                  country={country}
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={pageSize}
                  country={country}
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={pageSize}
                  country={country}
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={pageSize}
                  country={country}
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
