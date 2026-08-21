import { type ReactNode, Suspense } from "react";
import { Await, type AwaitProps } from "react-router";

import { StatusMessage } from "~/components/library";

interface Props<T> {
  children: (data: Awaited<T>) => ReactNode;
  resolve: AwaitProps<T>["resolve"];
}

function Deferred<T>({ children, resolve }: Props<T>) {
  return (
    <Suspense fallback={<StatusMessage type="pending" />}>
      <Await errorElement={<StatusMessage type="error" />} resolve={resolve}>
        {children}
      </Await>
    </Suspense>
  );
}

export default Deferred;
