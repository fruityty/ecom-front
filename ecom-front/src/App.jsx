import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import theme from './theme';
// import { ThemeProvider, CssBaseline } from '@mui/material';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList"
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
       
        </Routes>
    </Router>
  );
}

export default App;
