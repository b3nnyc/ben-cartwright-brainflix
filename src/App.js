import "./styles/App.scss";
import "./styles/partials/_global.scss";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./pages/Upload/Upload";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/watch/:id"
          render={(routerProps) => {
            return <Home {...routerProps} />;
          }}
        />
        <Route path="/upload" component={Upload} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
