import React from "react";
import { useRouteError } from "react-router-dom";

import { Message } from "src/components/library";

function ErrorRoute() {
  const error = useRouteError();
  return (
    <>
      <Message
        type={error.statusText === "Not Found" ? "pageNotFound" : "error"}
      />
      <div className="small text-center">
        ({error.statusText || error.message})
      </div>
    </>
  );
}

export default ErrorRoute;
