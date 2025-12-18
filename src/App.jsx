import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./Layout/Layout";

// Ленивый импорт страниц
const GeneratorsPage = lazy(() => import('./pages/GeneratorsPage/GeneratorsPage'));
const EncodersPage = lazy(() => import('./pages/EncodersPage/EncodersPage'));
const ConvertersPage = lazy(() => import('./pages/ConvertersPage/ConvertersPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="generators" element={<GeneratorsPage />} />
            <Route path="encoders" element={<EncodersPage />} />
            <Route path="converters" element={<ConvertersPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
