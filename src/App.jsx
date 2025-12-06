import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Layout from "./Layout/Layout";       // импорт Layout 

import { GeneratorsPage } from './pages/GeneratorsPage'

function App() {
  return (
    <Router>
      <Routes>
        {/* Общий Layout с Header/Sidebar */}
        <Route path="/" element={<Layout />}>
          {/* Вложенные страницы рендерятся через Outlet */}
          <Route index element={<GeneratorsPage />} /> 
          {/* Добавляй остальные категории */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;