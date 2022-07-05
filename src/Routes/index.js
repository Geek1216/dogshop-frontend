import * as React from "react";
import routes from "./routesConstants";
import PrivateRoute from "../Routes/praivateRoute";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import CommonRoute from "./CommonRoute";

function Router() {
  return (
    <Suspense
      fallback={<div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}>
      <Routes>
        {routes.map(({ element: Component, path, isAuthenticated, isCommon, ...rest }, i) => {
          return <Route {...rest} path={path} element={
          isAuthenticated ?
              <PrivateRoute>
                <Component />
              </PrivateRoute>
              : <CommonRoute> <Component /></CommonRoute>
          }
          />
        })}
      </Routes>
    </Suspense>

  );
}

export default Router;

