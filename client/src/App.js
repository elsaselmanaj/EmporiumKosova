import { lazy, Suspense, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Loading from "./components/shared/Loading/Loading";
import ScrollToTop from "./ScrollToTop";
import "./App.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import { IntlProvider } from "react-intl";
import { translate } from "./translation/translate";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy (() => import("./pages/Login/Login"))
const Signup = lazy (() => import("./pages/Signup/Signup"))
const ProductsCatalog = lazy (() => import("./pages/ProductsCatalog/ProductsCatalog"))

const ShoppingCart = lazy (() => import("./pages/ShoppingCart/ShoppingCart"))
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"))
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"))
const Blog = lazy(() => import("./pages/Blog/Blog"))

function App() {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({
      duration: 1250,
      once: true,
    });
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <IntlProvider
          locale={language}
          formats={{ number: "en" }}
          messages={translate[language]}
        >
          <ScrollToTop />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Login" element={<Login />}/>
            <Route path="/Signup" element={<Signup />}/>
            <Route path="/ProductsCatalog" element={<ProductsCatalog />}/>

            <Route path="/ShoppingCart" element={<ShoppingCart />}/>
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/ContactUs" element={<ContactUs />}/>
            <Route path="/Blog" element={<Blog />}/>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </IntlProvider>
      </Suspense>
    </Router>
  );
}

export default App;
