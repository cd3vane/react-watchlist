import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Watchlist from "./components/Watchlist";
import Watched from "./components/Watched";
import AddMovie from "./components/movies/AddMovie";
import {WatchlistContext, sampleAppContext} from "./context/AppContext";

const App = () => {
  return (
      <WatchlistContext.Provider value={sampleAppContext}>
          <Router>
            <div className="container-fluid">
                <Header />
                    <Routes>
                        <Route path="/" element={<Watchlist />} />
                        <Route path="/watched" element={<Watched />} />
                        <Route path="/search"  element={<AddMovie />} />
                    </Routes>

            </div>
          </Router>
      </WatchlistContext.Provider>
  );
}

export default App;
