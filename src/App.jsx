// =========================================================
// FILE: src/App.jsx
// FULLY OPTIMIZED APP ROUTER WITH LAZY LOADING
// =========================================================

import React, {
  Suspense,
  lazy,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import GuruPage from "./pages/GuruPage";
import GalleryPage from "./pages/GalleryPage";
import AchievementsPage from "./pages/AchievementsPage";
import ContactPage from "./pages/ContactPage";
import CourseDetailPage from "./pages/CourseDetailPage";

// import MainLayout from "./layout/MainLayout";

/* =========================================================
   LAZY LOADING PAGES
========================================================= */

const Home = lazy(() =>
  import("./pages/Home")
);

const CoursesPage = lazy(() =>
  import("./pages/CoursesPage")
);

/* =========================================================
   PREMIUM PAGE LOADER
========================================================= */

const PageLoader = () => {
  return (
    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-[#050816]
      "
    >
      <div className="flex flex-col items-center gap-5">
        <div
          className="
            h-14
            w-14
            animate-spin
            rounded-full
            border-2
            border-yellow-400/20
            border-t-yellow-400
          "
        />

        <p
          className="
            text-sm
            tracking-[0.3em]
            text-zinc-400
          "
        >
          LOADING EXPERIENCE
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   APP
========================================================= */

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ================================================= */}
          {/* MAIN LAYOUT */}
          {/* ================================================= */}

          <Route element={<MainLayout />}>
            {/* HOME */}

            <Route
              path="/"
              element={<Home />}
            />

            {/* COURSES */}

            <Route
              path="/courses"
              element={<CoursesPage />}
            />

             <Route
              path="/guru"
              element={<GuruPage />}
            />


            <Route
              path="/gallery"
              element={<GalleryPage />}
            />
            <Route
              path="/achievements"
              element={<AchievementsPage />}
            />

            <Route
              path="/contact"
              element={<ContactPage />}
            />

            <Route path="/courses/:slug" element={<CourseDetailPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;