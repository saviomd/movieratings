import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import { Footer, Header, SiteInfo } from "src/components/app";
import { MovieDiaryProvider } from "src/contexts/MovieDiaryContext";
import { MovieRatingsProvider } from "src/contexts/MovieRatingsContext";
import { StatsProvider } from "src/contexts/StatsContext";
import { trackGaPageView } from "src/utils";

function RootRoute() {
  const location = useLocation();

  useEffect(() => {
    trackGaPageView();
  }, [location]);

  return (
    <MovieDiaryProvider>
      <MovieRatingsProvider>
        <StatsProvider>
          <div className="container-fluid">
            <div className="justify-content-center row">
              <div className="col-12 col-md-10">
                <Header />
                <Outlet />
                <SiteInfo />
                <Footer />
              </div>
            </div>
          </div>
        </StatsProvider>
      </MovieRatingsProvider>
    </MovieDiaryProvider>
  );
}

export default RootRoute;
