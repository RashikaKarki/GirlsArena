import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Home from "./components/Home";
import Subscribe from "./components/subscribe";
import Bookmarks from "./components/Bookmarks";
import About from "./components/About";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";

//import logo from './logo.svg';
import './App.css';

export default function App(){
  const [value,setValue] = React.useState(0);
  return(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header
        value={value}
        setValue={setValue}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} index={1} />
        <Route exact path="/bookmark" component={Bookmarks} index={2} />
        <Route exact path="/subscribe" component={Subscribe} index={3} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)
}