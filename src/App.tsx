import { MovieDiaryProvider } from "./contexts/MovieDiaryContext";
import { MovieRatingsProvider } from "./contexts/MovieRatingsContext";
import { StatsProvider } from "./contexts/StatsContext";
import { AppWrapper, Footer, Header, SiteInfo } from "./components/app";
import Pages from "./pages";

function App() {
  return (
    <AppWrapper>
      <MovieDiaryProvider>
        <MovieRatingsProvider>
          <StatsProvider>
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
          </StatsProvider>
        </MovieRatingsProvider>
      </MovieDiaryProvider>
    </AppWrapper>
  );
}

export default App;
