import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Circle } from "./CircleLayout.jsx";
import { Square } from "./SquareLayout.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/circle" element={<Circle />} />
          <Route path="/square" element={<Square />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
