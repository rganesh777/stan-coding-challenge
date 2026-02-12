import "./App.css";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import NotFound from "./pages/NotFound";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter basename="/stan-coding-challenge/">
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => {
            const Component = route.Component;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
