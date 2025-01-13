import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundry";

import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

const HomePage = lazy(() => import("./pages/HomePage"));
const FavoriteLaunchesPage = lazy(() => import("./pages/FavoriteLaunchesPage"));

function App() {
  return (
    <main className="h-screen flex flex-col">
      <Header />
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <section className="container mx-auto flex-grow mb-8">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/favorite-launches"
              element={
                <Suspense fallback={<Spinner />}>
                  <FavoriteLaunchesPage />
                </Suspense>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </section>
      </ErrorBoundary>
      <Footer />
    </main>
  );
}

export default App;
