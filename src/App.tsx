import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import AddMovie from "./components/movies/AddMovie";
import {ListProvider} from "./context/AppContext";
import PopularShows from "./components/movies/Popular";

const App = () => {
  return (
      <ListProvider>
          <Router>
            <div className="container-fluid">
                <Header />
                    <Routes>
                        <Route path="/watchlist" element={<Watchlist />} />
                        <Route path="/watched" element={<Watched />} />
                        <Route path="/search"  element={<AddMovie />} />
                        <Route path="/popular" element={<PopularShows />} />
                    </Routes>

            </div>
          </Router>
      </ListProvider>
  );
}

export default App;
