import { Route, Routes ,Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from './hooks/useAuthContext';
import Products from "./pages/Products";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element= { user ? <Navigate to='/' /> : <Login />} />
        <Route path="/register" element={ user ? <Navigate to='/' /> : <Signup/>} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
