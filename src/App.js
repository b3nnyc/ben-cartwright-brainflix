import "./styles/App.scss";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload/Upload";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
