import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup.js"
import Login from "./pages/Login.js"
import Signup_2 from "./pages/Signup_2.js"
import Signup_3 from "./pages/Signup_3.js"
import Signup_4 from "./pages/Signup_4.js"
import Signup_5 from "./pages/Signup_5.js"
import Signup_6 from "./pages/Signup_6.js"
import Signup_7 from "./pages/Signup_7.js"
import Signup_8 from "./pages/Signup_8.js"
import Admin_Login from "./pages/Admin_Login.js"
import Admin_Home from "./pages/Admin_Home.js"
import Admin_Users from "./pages/Admin_Users.js"
import Add_User from "./pages/Add_User.js"
import Admin_Orders from "./pages/Admin_Orders.js"
import Order_Edit from "./pages/Order_Edit.js"
import Admin_Discount from "./pages/Admin_Discount.js"
import Admin_Discount_Management from "./pages/Admin_Discount_Management.js"
import Discount_Preview from "./pages/Discount_Preview.js"
import Admin_Packages from "./pages/Admin_Packages.js"
import Package_Edit from "./pages/Package_Edit.js"
import Package_Preview from "./pages/Package_Preview.js"
import Contact from "./pages/Contact.js"
import Cart from "./pages/Cart.js"
import Account from "./pages/Account.js"

function App() {
  return (
    
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pages/Signup.js" element={<Signup />}></Route>
      <Route path="/pages/Login.js" element={<Login />}></Route>
      <Route path="/pages/Signup_2.js" element={<Signup_2 />}></Route>
      <Route path="/pages/Signup_3.js" element={<Signup_3 />}></Route>
      <Route path="/pages/Signup_4.js" element={<Signup_4 />}></Route>
      <Route path="/pages/Signup_5.js" element={<Signup_5 />}></Route>
      <Route path="/pages/Signup_6.js" element={<Signup_6 />}></Route>
      <Route path="/pages/Signup_7.js" element={<Signup_7 />}></Route>
      <Route path="/pages/Signup_8.js" element={<Signup_8 />}></Route>
      <Route path="/pages/Admin_Login.js" element={<Admin_Login />}></Route>
      <Route path="/pages/Admin_Home.js" element={<Admin_Home />}></Route>
      <Route path="/pages/Admin_Users.js" element={<Admin_Users />}></Route>
      <Route path="/pages/Add_User.js" element={<Add_User />}></Route>
      <Route path="/pages/Admin_Orders.js" element={<Admin_Orders />}></Route>
      <Route path="/pages/Order_Edit.js" element={<Order_Edit />}></Route>
      <Route path="/pages/Admin_Discount.js" element={<Admin_Discount />}></Route>
      <Route path="/pages/Admin_Discount_Management.js" element={<Admin_Discount_Management />}></Route>
      <Route path="/pages/Discount_Preview.js" element={<Discount_Preview />}></Route>
      <Route path="/pages/Admin_Packages.js" element={<Admin_Packages />}></Route>
      <Route path="/pages/Package_Edit.js" element={<Package_Edit />}></Route>
      <Route path="/pages/Package_Preview.js" element={<Package_Preview />}></Route>
      <Route path="/pages/Contact.js" element={<Contact />}></Route>
      <Route path="/pages/Cart.js" element={<Cart />}></Route>
      <Route path="/pages/Account.js" element={<Account />}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
