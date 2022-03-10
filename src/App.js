import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import TermsAndConditionPage from "pages/TermsAndConditionPage/TermsAndConditionPage";
import ScrollToTop from "components/ScrollToTop";
import MintPage from "pages/MintPage/MintPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mint" element={<MintPage />} />
        <Route
          path="/terms-and-conditions"
          element={<TermsAndConditionPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
