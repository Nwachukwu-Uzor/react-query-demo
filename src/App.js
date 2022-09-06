import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";
import HomePage from "./components/Home.page";
import RQSuperHerosPage from "./components/RQSuperHeros.page";
import SuperHerosPage from "./components/SuperHeros.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heros</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heros</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="super-heroes" element={<SuperHerosPage />} />
            <Route path="rq-parallel" element={<ParallelQueriesPage />} />
            <Route path="rq-super-heroes">
              <Route index element={<RQSuperHerosPage />} />
              <Route path=":superHeroId" element={<RQSuperHeroPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
