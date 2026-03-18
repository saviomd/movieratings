import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";

import { AppWrapper, Footer, Header, SiteInfo } from "~/components/app";
import { Grid, LoadingHandler } from "~/components/library";
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
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  useEffect(() => {
    trackGaPageView();
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <div className="container-fluid">
          <Grid justifyContent="center">
            <Grid.Col width={12} widthMd={10}>
              <Header />
              {isNavigating ? (
                <LoadingHandler dataStatus="pending" />
              ) : (
                <Outlet />
              )}
              <SiteInfo />
              <Footer />
            </Grid.Col>
          </Grid>
        </div>
      </AppWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
