import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-primary font-semibold" : "";

  return (
    <div className="navbar bg-white shadow-md px-4 sticky top-0 z-50">


      <div className="navbar-start">


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
            {user && (
              <li>
                <NavLink to="/profile" className={navLinkClass}>
                  My Profile
                </NavLink>
              </li>
            )}
          </ul>
        </div>



        <Link to="/" className="flex items-center gap-2 ml-2">
          <img
            className="h-12 w-12"
            src="https://imgs.search.brave.com/Ji8TEurvUojxmL6LYhomByZO-0jjLFn1plwCIsC4G9k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTQv/Mzk0Lzg2Ni9zbWFs/bC9wZXQtY2FyZS1z/aG9wLWFuaW1hbC1s/b2dvLXdpdGgtZG9n/LWFuZC1jYXQtc2ls/aG91ZXR0ZS1zeW1i/b2wtZm9yLXN0b3Jl/LXZldGVyaW5hcnkt/Y2xpbmljLWhvc3Bp/dGFsLXNoZWx0ZXIt/YnVzaW5lc3Mtc2Vy/dmljZXMtdmVjdG9y/LmpwZw"
            alt="Pet Care Logo"
          />
          <span className="text-xl font-bold hidden sm:block">PetCare</span>
        </Link>
      </div>



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
          {user && (
            <li>
              <NavLink to="/profile" className={navLinkClass}>
                My Profile
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                    }
                    alt="User Avatar"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="menu-title">
                  <span className="text-sm font-semibold">
                    {user.displayName || "User"}
                  </span>
                </li>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/auth/login" className="btn btn-sm btn-primary">
              Login
            </Link>
            <Link to="/auth/register" className="btn btn-sm btn-outline">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;