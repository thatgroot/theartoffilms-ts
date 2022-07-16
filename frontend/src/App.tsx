import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
