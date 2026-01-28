import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const handleLogout = () => {
    logOut().then(() => {
      alert('log out successful')
    }).catch((error) => {
      console.log(error)
    });

  }
  const navLinkClass = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "";

  return (
    <div className="navbar bg-white shadow-md px-4 sticky top-0 z-50">
      {/* Left: Logo + Mobile Dropdown */}
      <div className="navbar-start">
        {/* Hamburger menu for mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={navLinkClass}>
                My Profile
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 ml-2">
          <span className="text-xl font-bold"><img className="h-12 w-12" src="https://imgs.search.brave.com/Ji8TEurvUojxmL6LYhomByZO-0jjLFn1plwCIsC4G9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTQv/Mzk0Lzg2Ni9zbWFs/bC9wZXQtY2FyZS1z/aG9wLWFuaW1hbC1s/b2dvLXdpdGgtZG9n/LWFuZC1jYXQtc2ls/aG91ZXR0ZS1zeW1i/b2wtZm9yLXN0b3Jl/LXZldGVyaW5hcnkt/Y2xpbmljLWhvc3Bp/dGFsLXNoZWx0ZXIt/YnVzaW5lc3Mtc2Vy/dmljZXMtdmVjdG9y/LmpwZw" alt="" /></span>
        </Link>
      </div>

      {/* Center: Desktop nav links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={navLinkClass}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right: Static Login Button */}
      <div className="navbar-end">
        {
          user ? <Link onClick={handleLogout} to="/auth/login" className="btn btn-sm btn-primary">
            LogOut
          </Link>
            :
            <Link to="/auth/login" className="btn btn-sm btn-primary">
              Login
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
