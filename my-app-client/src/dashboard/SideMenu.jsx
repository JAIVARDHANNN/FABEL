import React, { useContext } from 'react'
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiSupport, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg"
import { AuthContext } from '../contects/AuthProider';

const SideMenu = () => {
  const {user} = useContext(AuthContext)
  return (
    <Sidebar aria-label="Dashboard navigation" className="bg-gradient-to-b from-gray-50 to-white min-h-screen relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-blue-500/10 -skew-y-6 transform origin-left"></div>
      
      {/* Profile Section */}
      <div className="relative px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-4 border border-blue-100">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-pulse opacity-20"></div>
              {/* <img 
                // src={user?.photoURL} 
                alt="User profile"
                className="w-14 h-14 rounded-full border-2 border-blue-500 p-0.5 relative z-10"
              /> */}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-0.5">
                {user?.displayName || "Demo User"}
              </h3>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <p className="text-sm font-semibold text-gray-600">Admin Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 px-4 py-6 overflow-y-auto">
        <Sidebar.Items>
          {/* Main Navigation */}
          <Sidebar.ItemGroup>
            {[
              { href: "/admin/dashboard", icon: HiChartPie, label: "Dashboard" },
              { href: "/admin/dashboard/upload", icon: HiOutlineCloudUpload, label: "Upload Book" },
              { href: "/admin/dashboard/manage", icon: HiInbox, label: "Manage Books" },
              { href: "/admin/dashboard/profile", icon: HiUser, label: "Profile" },
              { href: "/admin/dashboard/details", icon: HiShoppingBag, label: "Details" }
            ].map((item, index) => (
              <Sidebar.Item 
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                className="mb-2 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="relative overflow-hidden rounded-lg p-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600">
                  <p className="ml-2 font-medium text-gray-700 group-hover:text-white">{item.label}</p>
                </div>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>

          {/* Account Management */}
          <Sidebar.ItemGroup className="relative mt-8">
            <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-100 rounded-full"></div>
            <div className="px-4 mb-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Account</h4>
            </div>
            {[
              { href: "/login", icon: HiArrowSmRight, label: "Sign In" },
              { href: "/logout", icon: HiTable, label: "Log Out" }
            ].map((item) => (
              <Sidebar.Item 
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                className="mb-2 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="relative overflow-hidden rounded-lg p-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600">
                  <p className="ml-2 font-medium text-gray-700 group-hover:text-white">{item.label}</p>
                </div>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>

          {/* Support & Help */}
          <Sidebar.ItemGroup className="relative mt-8">
            <div className="absolute left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-100 rounded-full"></div>
            <div className="px-4 mb-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Support</h4>
            </div>
            {[
              { href: "#", icon: HiChartPie, label: "Upgrade to Pro" },
              { href: "#", icon: HiViewBoards, label: "Documentation" },
              { href: "/", icon: HiSupport, label: "Help Center" }
            ].map((item) => (
              <Sidebar.Item 
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                className="mb-2 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="relative overflow-hidden rounded-lg p-2 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-600">
                  <p className="ml-2 font-medium text-gray-700 group-hover:text-white">{item.label}</p>
                </div>
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </div>
    </Sidebar>
  )
}

export default SideMenu