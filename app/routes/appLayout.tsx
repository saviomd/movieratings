import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import { AppWrapper, Footer, Header, SiteInfo } from "~/components/app";
import { MovieDiaryProvider } from "~/contexts/MovieDiaryContext";
import { MovieRatingsProvider } from "~/contexts/MovieRatingsContext";
import { StatsProvider } from "~/contexts/StatsContext";
import { trackGaPageView } from "~/utils";

const queryClient = new QueryClient();

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    trackGaPageView();
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <MovieDiaryProvider>
        <MovieRatingsProvider>
          <StatsProvider>
            <AppWrapper>
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
            </AppWrapper>
          </StatsProvider>
        </MovieRatingsProvider>
      </MovieDiaryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
