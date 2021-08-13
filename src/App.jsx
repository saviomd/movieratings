import React from "react";

import { MovieDiaryStore } from "./contexts/MovieDiaryContext";
import { MovieRatingsStore } from "./contexts/MovieRatingsContext";
import AppWrapper from "./components/AppWrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SiteInfo from "./components/SiteInfo";
import Pages from "./pages";

const App = () => (
  <AppWrapper>
    <MovieDiaryStore>
      <MovieRatingsStore>
        <div className="container-fluid">
          <div className="justify-content-center row">
            <div className="col-12 col-md-10">
              <Header />
              <Pages />
              <SiteInfo />
              <Footer />
            </div>
          </div>
        </div>
      </MovieRatingsStore>
    </MovieDiaryStore>
  </AppWrapper>
);

export default App;
