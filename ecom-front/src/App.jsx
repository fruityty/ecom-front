import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import theme from './theme';
// import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
