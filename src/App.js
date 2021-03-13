import React, { useEffect, useState, useReducer, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Subscribe from "./components/Subscribe";
import Bookmarks from "./components/Bookmarks";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";

import axios from "axios";
//import logo from "./logo.svg";
import "./App.css";

export const BookmarkContext = createContext();

function reducer(state, item) {
  return [...state, item];
}

export default function App() {
  const [bookmark, setBookmark] = useReducer(reducer, []);

  const [value, setValue] = useState(0);

  return (
    <div>
      <BookmarkContext.Provider value={{ bookmark, setBookmark }}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header value={value} setValue={setValue} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/bookmark" component={Bookmarks} index={1} />
              <Route exact path="/subscribe" component={Subscribe} index={2} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </BookmarkContext.Provider>
      )
    </div>
  );
}
