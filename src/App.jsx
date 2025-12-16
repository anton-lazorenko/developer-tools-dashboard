import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

import { GeneratorsPage } from './pages/GeneratorsPage';
import { EncodersPage } from './pages/EncodersPage';
import { ConvertersPage } from "./pages/ConvertersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="generators" element={<GeneratorsPage />} />
          <Route path="encoders" element={<EncodersPage />} />
          <Route path="converters" element={<ConvertersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;