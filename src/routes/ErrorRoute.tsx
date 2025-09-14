import { useRouteError } from "react-router";

import { Message } from "src/components/library";

interface IError {
  data: string;
  status: number;
}

function ErrorRoute() {
  const error = useRouteError() as IError;
  return (
    <>
      <Message type={error.status === 404 ? "pageNotFound" : "error"} />
      <div className="small text-center">{error.data}</div>
    </>
  );
}

export default ErrorRoute;
