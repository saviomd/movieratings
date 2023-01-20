import { Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { AppWrapper } from "./components/app";
import { LoadingHandler } from "./components/library";
import routes from "./routes";

function App() {
  return (
    <AppWrapper>
      <Suspense fallback={<LoadingHandler dataStatus="loading" />}>
        <RouterProvider router={createHashRouter(routes)} />
      </Suspense>
    </AppWrapper>
  );
}

export default App;
