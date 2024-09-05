import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Topbar from "./components/topBar/Topbar.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import "./app.css"
import UserList from "./pages/userlist/Userlist.js";
import User from "./pages/userPage/user.js";
import NewUser from "./pages/newUser/NewUser.js";
import ProductList from "./pages/productlist/Productlist.js";
import Product from "./pages/productPage/Product.js";
import NewProduct from "./pages/newProduct/NewProduct.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<UserList />}></Route>
            <Route path="/user/:id" element={<User />}></Route>
            <Route path="/newUser" element={<NewUser />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path="/product/:id" element={<Product />}></Route>
            <Route path="/newproduct" element={<NewProduct />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
