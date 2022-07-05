import React from 'react';

const Home = React.lazy(() => import('../pages/Home'));
const Signup = React.lazy(() => import('../pages/Signup'));
const Login = React.lazy(() => import('../pages/Login'));
const Signup_2 = React.lazy(() => import('../pages/Signup_2'));
const Signup_3 = React.lazy(() => import('../pages/Signup_3'));
const Signup_4 = React.lazy(() => import('../pages/Signup_4'));
const Signup_5 = React.lazy(() => import('../pages/Signup_5'));
const Signup_6 = React.lazy(() => import('../pages/Signup_6'));
const Signup_7 = React.lazy(() => import('../pages/Signup_7'));
const Signup_8 = React.lazy(() => import('../pages/Signup_8'));
const Admin_Login = React.lazy(() => import('../pages/Admin_Login'));
const Admin_Home = React.lazy(() => import('../pages/Admin_Home'));
const Admin_User = React.lazy(() => import('../pages/Admin_Users'));
const Add_User = React.lazy(() => import('../pages/Add_User'));
const Orders = React.lazy(() => import('../pages/Admin_Orders'));
const Edit_Order = React.lazy(() => import('../pages/Order_Edit'));
const Admin_Discount = React.lazy(() => import('../pages/Admin_Discount'));
const Admin_Discount_Management = React.lazy(() => import('../pages/Admin_Discount_Management'));
const Discount_Preview = React.lazy(() => import('../pages/Discount_Preview'));
const Package_Edit = React.lazy(() => import('../pages/Package_Edit'));
const Admin_Packages = React.lazy(() => import('../pages/Admin_Packages'));
const Package_Preview = React.lazy(() => import('../pages/Package_Preview'));
const Contact = React.lazy(() => import('../pages/Contact'));
const Cart = React.lazy(() => import('../pages/Cart'));
const Account = React.lazy(() => import('../pages/Account'));

const routes = [
  {
    path: '/',
    exact: false,
    element: Home,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup.js',
    exact: false,
    element: Signup,
    isAuthenticated: false,
  },
 
  {
    path: '/pages/Login.js',
    exact: false,
    element: Login,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup_2.js',
    exact: false,
    element: Signup_2,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup_3.js',
    exact: false,
    element: Signup_3,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup_4.js',
    exact: false,
    element: Signup_4,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup_5.js',
    exact: false,
    element: Signup_5,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup_6.js',
    exact: false,
    element: Signup_6,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup_7.js',
    exact: false,
    element: Signup_7,
    isAuthenticated: false,
  },
  {
    path: '/pages/Signup_8.js',
    exact: false,
    element: Signup_8,
    isAuthenticated: false,
  },
  {
    path: '/pages/Admin_Login.js',
    exact: false,
    element: Admin_Login,
    isAuthenticated: false,
  },
  {
    path: '/pages/Admin_Home.js',
    exact: false,
    element: Admin_Home,
    isAuthenticated: false,
  },
  {
    path: '/pages/Admin_Users.js',
    exact: false,
    element: Admin_User,
    isAuthenticated: false,
  },
  {
    path: '/pages/Add_User.js',
    exact: false,
    element: Add_User,
    isAuthenticated: false,
  },
  {
    path: '/pages/Admin_Orders.js',
    exact: false,
    element: Orders,
    isAuthenticated: false,
  },
  {
    path: '/pages/Order_Edit.js',
    exact: false,
    element: Edit_Order,
    isAuthenticated: false,
  },
  {
    path: '/pages/Admin_Discount.js',
    exact: false,
    element: Admin_Discount,
    isAuthenticated: false,
  },
  {
    path: '/pages/Admin_Discount_Management.js',
    exact: false,
    element: Admin_Discount_Management,
    isAuthenticated: false,
  },
  {
    path: '/pages/Discount_Preview.js',
    exact: false,
    element:Discount_Preview,
    isAuthenticated: false,
  },
  {
    path: '/pages/Admin_Packages.js',
    exact: false,
    element:Admin_Packages,
    isAuthenticated: false,
  },
  {
    path: '/pages/Package_Edit.js',
    exact: false,
    element:Package_Edit,
    isAuthenticated: false,
  },
  {
    path: '/pages/Package_Preview.js',
    exact: false,
    element:Package_Preview,
    isAuthenticated: false,
  },
  {
    path: '/pages/Contact.js',
    exact: false,
    element:Contact,
    isAuthenticated: false,
  },
  {
    path: '/pages/Cart.js',
    exact: false,
    element:Cart,
    isAuthenticated: false,
  },
  {
    path: '/pages/Account.js',
    exact: false,
    element:Account,
    isAuthenticated: false,
  },
]

export default routes;
