import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const SiteLayout = ({ children, menu = (c) => null }) => {
  return (
    <div className="site-container">
      <div>{menu}</div>
      <div>{children}</div>
    </div>
  );
};

const Menu = () => (
  <ErrorBoundary>
    <p style={{ color: "white" }}>TODO: Build Menu</p>
  </ErrorBoundary>
);

const Callout = ({ children }) => (
  <ErrorBoundary>
    <div className="callout">{children}</div>
  </ErrorBoundary>
);

export default function Main() {
  return (
    <SiteLayout menu={<Menu />}>
      <Callout>Witamy w witrynie internetowej</Callout>
      <ErrorBoundary>
        <h1>Do zrobienia: strona główna</h1>
        <p>
          Dokończyć treść przeznaczoną do umieszczenia na tej stronie głównej
        </p>
      </ErrorBoundary>
    </SiteLayout>
  );
}
