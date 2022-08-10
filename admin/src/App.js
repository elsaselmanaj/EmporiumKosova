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
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "./store/actions/productAction";
import { listOrders } from "./store/actions/orderAction";

const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import ("./pages/Login/Login"))
const Users = lazy(() => import("./pages/Users/Users"))
const Products = lazy(() => import("./pages/Products/Products"))
const NewProduct = lazy(() => import("./pages/NewProduct/NewProduct"))
const UpdateProduct = lazy(() => import("./pages/UpdateProduct/UpdateProduct"))
const Orders = lazy(() => import("./pages/Orders/Orders"))
const OrderDetails = lazy(() => import("./pages/OrderDetails/OrderDetails"))

function App() {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if(userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
      dispatch(listOrders())
    }
  }, [dispatch, userInfo]);
  
  return (
    <Router>
    <Suspense fallback={<Loading />}>
        <ScrollToTop />

        <Routes>
         
         <Route exact path="/" element={<PrivateRouter> <Home /> </PrivateRouter>}/>
         <Route  path="/Users" element={<PrivateRouter> <Users /> </PrivateRouter>}/>
         <Route  path="/Products" element={<PrivateRouter> <Products /> </PrivateRouter>}/>
         <Route  path="/NewProduct" element={<PrivateRouter> <NewProduct /> </PrivateRouter>}/>
         <Route  path="/UpdateProduct/:id/edit" element={<PrivateRouter> <UpdateProduct /> </PrivateRouter>}/>
         <Route  path="/Orders" element={<PrivateRouter> <Orders /> </PrivateRouter>}/>
         <Route  path="/OrderDetails/:id" element={<PrivateRouter> <OrderDetails /> </PrivateRouter>}/>
         <Route path="/Login" element={<Login />}/>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Suspense>
  </Router>
  );
}

export default App;
