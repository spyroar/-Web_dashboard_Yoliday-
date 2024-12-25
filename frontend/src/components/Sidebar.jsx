import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiDashboardLine,
  RiFolder2Line,
  RiInputMethodLine,
  RiUser3Line,
} from "react-icons/ri";
import clsx from "clsx";

const navigation = [
  { name: "Dashboard", icon: RiDashboardLine, href: "/" },
  { name: "Portfolio", icon: RiFolder2Line, href: "/portfolio" },
  { name: "Inputs", icon: RiInputMethodLine, href: "/inputs" },
  { name: "Profile", icon: RiUser3Line, href: "/profile" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={clsx(
        "bg-primary text-white transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="p-4">
        <img
          src="https://pixabay.com/illustrations/icon-user-male-avatar-business-5359553/"
          alt="Logo"
          // className="h-8"
          className="w-10 h-8 rounded-full"
        />
      </div>

      <nav className="mt-8">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              clsx(
                "flex items-center px-4 py-3 text-sm",
                isActive ? "bg-white/10" : "hover:bg-white/5"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {!collapsed && <span className="ml-3">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
