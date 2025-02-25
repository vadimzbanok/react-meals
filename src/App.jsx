import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayoutComponent from "./components/NavLayoutComponent";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import MealsDetails from "./page/MealsDetails";
import MealsPage from "./page/MealsPage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <>
      <h1 className="text-blue-400">Nuevo Proyecto</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavLayoutComponent />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/meals" element={<MealsPage />} />
            {/*
          - TODO :Route mit Parameter Einstellung */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
