import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useAuthContext } from './hooks/useAuthContext';
import Products from "./pages/Products";
import Footer from "./components/Footer";
import UserSettings from "./pages/UserSettings";
import Settings from "./components/User settings/Settings";
import Insert from "./pages/Insert";
import Listing from "./pages/Listing";

function App() {
  const { user } = useAuthContext();

  // Wait for user data to be available
  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/account/*" element={user ? <UserSettings /> : <Navigate to="/login" />} />
          <Route path="/account/:tab" element={user ? <UserSettings /> : <Navigate to="/login" />} />
          <Route path="/account" element={<Navigate to="/account/listings" />} />
          <Route path="/insert" element={<Insert />} />
          <Route path='/account/settings/:tab' element={user ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/Listing/:id" element={<Listing />} />
        </Routes>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
