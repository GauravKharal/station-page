import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StationPage from "./components/StationPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/s/:url" element={<StationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
