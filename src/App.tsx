import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { AppWrapper } from "./components/app";
import { LoadingHandler } from "./components/library";
import routes from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper>
        <Suspense fallback={<LoadingHandler dataStatus="pending" />}>
          <RouterProvider router={createHashRouter(routes)} />
        </Suspense>
      </AppWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
