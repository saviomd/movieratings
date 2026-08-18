import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";

import { Footer, Header, SiteInfo } from "~/components/app";
import { Grid, StatusMessage } from "~/components/library";
import { queryClient, trackGaPageView } from "~/utils";

export default function AppLayout() {
  const location = useLocation();
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  useEffect(() => {
    trackGaPageView();
  }, [location]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="container-fluid">
        <Grid justifyContent="center">
          <Grid.Col width={12} widthMd={10}>
            <Header />
            {isNavigating ? <StatusMessage type="pending" /> : <Outlet />}
            <SiteInfo />
            <Footer />
          </Grid.Col>
        </Grid>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
