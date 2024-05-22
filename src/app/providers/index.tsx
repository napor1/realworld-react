import { Suspense } from "react";
import { QueryClientProvider } from "./QueryClientProvider";
import { BrowserRouter } from "./RouterProvider";
// import { withErrorBoundary } from 'react-error-boundary';

function Loader() {
  return <div className="fixed left-0 top-0 right-0 bottom-0 bg-slate-100">loading</div>
}
function Providers() {
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider>
        <BrowserRouter />
      </QueryClientProvider>
    </Suspense>
  );
}

// const SuspensedProvider = withSuspense(Providers, {
//   fallback: <Loader size="full" />,
// });
// export const Provider = withErrorBoundary(Providers, {
//   fallbackRender: ({ error }) => <FullPageError error={error} />,
// });

export const Provider = Providers;
