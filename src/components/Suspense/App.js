import React, { useState, Suspense, lazy } from "react";
import Agreement from "./Agreement";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ErrorBoundary from "./ErrorBoundary";

const Main = lazy(() => import("./Main"));

function  ErrorScreen({ error }) {
  return (
    <div className="error">
      <h3>Przepraszamy, ale wystąpił problem</h3>
      <p>W tym momencie nie możemy przetworzyć Twojego żądania</p>
      <p>BŁĄD: {error.message}</p>
    </div>
  );
}

export default function App() {
  const [agree, setAgree] = useState(false);

  if (!agree) return <Agreement onAgree={() => setAgree(true)} />;

  return (
    <ErrorBoundary fallback={ErrorScreen}>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <Main />
      </Suspense>
    </ErrorBoundary>
  );
}
