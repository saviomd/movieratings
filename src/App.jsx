import React from "react";

import { MovieDiaryProvider } from "./contexts/MovieDiaryContext";
import { MovieRatingsProvider } from "./contexts/MovieRatingsContext";
import AppWrapper from "./components/AppWrapper";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SiteInfo from "./components/SiteInfo";
import Pages from "./pages";

function App() {
  return (
    <AppWrapper>
      <MovieDiaryProvider>
        <MovieRatingsProvider>
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
        </MovieRatingsProvider>
      </MovieDiaryProvider>
    </AppWrapper>
  );
}

export default App;
