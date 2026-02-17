import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { ThePlanter } from "./pages/ThePlanter";
import { Collection } from "./pages/TheCollection";
import { ProductDetail } from "./pages/ProductDetail";
import { TheContours } from "./pages/TheContours";
import { Sustainability } from "./pages/Sustainability";
import { BrewGuide } from "./pages/BrewGuide";
import { Contact } from "./pages/Contact";
import { Traceability } from "./pages/Traceability";
import { SiteProvider } from "./context/SiteContext";
import { AdminPage } from "./pages/AdminPage";
import { LoginPage } from "./pages/LoginPage";
import { ThemeManager } from "./components/ThemeManager";

// ScrollToTop component to handle scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <SiteProvider>
      <ThemeManager />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="planter" element={<ThePlanter />} />
            <Route path="collection" element={<Collection />} />
            <Route
              path="collection/:id"
              element={<ProductDetail />}
            />
            <Route path="contours" element={<TheContours />} />
            <Route
              path="sustainability"
              element={<Sustainability />}
            />
            <Route path="brew-guide" element={<BrewGuide />} />
            <Route
              path="traceability"
              element={<Traceability />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </SiteProvider>
  );
};

export default App;