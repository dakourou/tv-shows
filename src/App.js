import "./App.css";
import HomePage from "../src/pages/homePage/HomePage.component";
import ShowDetails from "../src/pages/showDetails/ShowDetails.component";
import SearchResults from "../src/pages/searchResults/SearchResults.component";
import Header from "../src/components/header/Header.component";
import Favorites from "../src/pages/favorites/Favorites.component";
import Footer from "../src/components/footer/Footer.component";
import { useHistory } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { store } from "../src/store/store";
import { Provider } from "react-redux";

function App() {
  const history = useHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        <div
          style={{ minHeight: "100vh", height: "100%", background: "black" }}
        >
          <Header></Header>
          <Switch>
            <Route path="/" render={() => <Redirect to="/home" />} exact />
            <Route path="/home" render={() => <HomePage />} />
            <Route path="/shows/:id" render={() => <ShowDetails />} />
            <Route path="/searchResults" render={() => <SearchResults />} />
            <Route path="/favorites" render={() => <Favorites />} />
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
