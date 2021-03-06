import React from "react";
import GlobalContextProvider from "./context/GlobalContext";

import { Switch, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { TotalItems } from "./components/TotalItems";
import { BookList } from "./components/BookList";
import { FilmList } from "./components/FilmList";
import { MusicList } from "./components/MusicList";
import { SwitchList } from "./components/SwitchList";
import { Form } from "./components/Form";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <Header />
        <SwitchList />
        <Switch>
          <Route exact path="/books" component={BookList} />
          <Route exact path="/films" component={FilmList} />
          <Route exact path="/music" component={MusicList} />
        </Switch>
        <Form />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
