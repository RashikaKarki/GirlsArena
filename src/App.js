import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Subscribe from "./components/subscribe";
import Bookmarks from "./components/Bookmarks";
import About from "./components/About";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/theme";

import axios from "axios";
//import logo from "./logo.svg";
import "./App.css";

export default function App() {
  var response;
  const [value, setValue] = useState(0);

  const [live, setLive] = useState();
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://geekygirls-api.herokuapp.com/opportunities")
      .then((res) => {
        console.log("response data", res.data);
        response = res.data;

        setLive(res.data);
        console.log("Set data", live);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, []);
  return (
    <div>
      {!live ? (
        <div>Loading</div>
      ) : (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header value={value} setValue={setValue} />
            <Switch>
              <Route exact path="/" component={Home} data={live} />
              <Route exact path="/about" component={About} index={1} />
              <Route exact path="/bookmark" component={Bookmarks} index={2} />
              <Route exact path="/subscribe" component={Subscribe} index={3} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      )}
    </div>
  );
}
