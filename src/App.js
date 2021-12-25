// import HomePage from "./pages/homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutPage";
import ArticlePage from "./pages/articlePage";
import ArticlesListPage from "./pages/articleListPage";
import NavBar from "./navBar";
import NotFoundPage from "./pages/notFoundPage";

import './App.css';

function App() {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesListPage} />
            <Route path="/article/:name" component={ArticlePage} />
            <Route component={NotFoundPage} />
          </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
