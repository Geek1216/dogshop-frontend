import React from 'react';
import * as RiIcons from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'

export const Sidebar_Data =  [
  
       
    {
            title : 'Home',
            path  : '/pages/Admin_Home.js',
            icons : <AiIcons.AiFillHome />,
            
    },


    {
        title : 'Users',
        path  : '/pages/Admin_Users.js',
        icons : <FaIcons.FaUserFriends />,
        
},



{
    title : 'Orders',
    path  : '/pages/Admin_Orders.js',
    icons : <MdIcons.MdOutlineBorderColor />,    
},


{
    title : 'Packages',
    path  : '/pages/Admin_Packages.js',
    icons : <BiIcons.BiPackage />,    
},



{
    title : 'Discounts',
    path  : '/pages/Admin_Discount.js',
    icons : <TbIcons.TbShoppingCartDiscount />,    

    
},

{
    title : 'Discounts Management',
    path  : '/pages/Admin_Discount_Management.js',
    icons : <MdIcons.MdManageAccounts />,    

    
},

{
    title : 'Logout',
    path  : '/pages/Admin_Login.js',
    icons : <BiIcons.BiLogOut />,    
},

  

];

