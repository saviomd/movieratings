import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

import { AppWrapper, Footer, Header, SiteInfo } from "~/components/app";
import { trackGaPageView } from "~/utils";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export default function AppLayout() {
  const location = useLocation();

  useEffect(() => {
    trackGaPageView();
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
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
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
