import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";
import PersonDetail from "./pages/PersonDetail";
import Paths from "./pages/Paths";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Login from "./pages/Login";
import PrivateRouter from "./pages/PrivateRouter";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="people/:id" element={<PersonDetail />} />

        {/* nested route */}
        <Route path="paths" element={<Paths />}>
          <Route path="frontend" element={<Frontend />} />
          <Route index element={<Backend />} />
        </Route>

        <Route path="contact" element={<PrivateRouter />}>
          <Route path="" element={<Contact />} />
        </Route>

        <Route path="login" element={<Login />} />

        {/* <Route path="*" element={<NotFound />} /> */}

        {/*  Redirect islemleri icin Navigate componenti kullanilabilir */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
