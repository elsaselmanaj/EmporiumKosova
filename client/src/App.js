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
import PrivateRouter from "./PrivateRouter";

import { IntlProvider } from "react-intl";
import { translate } from "./translation/translate";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Signup = lazy(() => import("./pages/Signup/Signup"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const ProductsCatalog = lazy(() =>
  import("./pages/ProductsCatalog/ProductsCatalog")
);
const ProductPage = lazy(() => import("./pages/ProductPage/ProductPage"));
const ShoppingCart = lazy(() => import("./pages/ShoppingCart/ShoppingCart"));
const Shipping = lazy(() => import("./pages/Shipping/Shipping"));
const Payment = lazy(() => import("./pages/Payment/Payment"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder/PlaceOrder"));
const Order = lazy(() => import("./pages/Order/Order"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Blog = lazy(() => import("./pages/Blog/Blog"));

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
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Profile" element={<PrivateRouter> <Profile /> </PrivateRouter>}/>
            <Route path="/ProductsCatalog" element={<ProductsCatalog />} />
            <Route path="/Search/:keyword" element={<ProductsCatalog />} />
            <Route path="/ProductPage/:id" element={<ProductPage />} />
            <Route path="/ShoppingCart/:id" element={<ShoppingCart />} />
            <Route path="/Shipping" element={<PrivateRouter> <Shipping /> </PrivateRouter>}/>
            <Route path="/Payment" element={<PrivateRouter> <Payment /> </PrivateRouter>}/>
            <Route path="/PlaceOrder" element={<PrivateRouter> <PlaceOrder /> </PrivateRouter>}/>
            <Route path="/Order/:id" element={<PrivateRouter> <Order /> </PrivateRouter>}/>
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Blog" element={<Blog />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </IntlProvider>
      </Suspense>
    </Router>
  );
}

export default App;
