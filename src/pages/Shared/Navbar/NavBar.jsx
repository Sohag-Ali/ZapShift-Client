import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../../components/Logo/Logo";
import { ArrowUpRight } from "lucide-react";
import useAuth from "../../../Hooks/useAuth";

const NavBar = () => {

  const { user, signOutUser } = useAuth();

  const handleSignOut = () => {
    signOutUser()
    .then(() => { })
    .catch(error => console.log(error))
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/parcel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>

      {
        user && <li>
          <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
        </li>
      }
    </>
  );
  return (
    <div className="py-4">
      <div className="px-4">
        <div className="flex items-center justify-between bg-base-100 rounded-2xl px-6 py-3 shadow-sm">
          {/* Logo */}
          <div className="flex items-center">
            <Logo></Logo>
          </div>

          {/* Center Menu */}
          <div className="hidden lg:flex">
            <ul className="flex gap-6 text-sm font-medium text-neutral">
              {links}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Sign In */}
            {user ? 
            <button onClick={handleSignOut} className="btn btn-outline rounded-xl px-5">
              LogOut
              </button>
              : <Link to="/login" className="btn btn-outline rounded-xl px-5">
              Sign In
              </Link>
            }

            {/* Be a Rider */}
            <Link to="/rider" className="btn btn-primary rounded-xl px-5 flex items-center gap-2">
              Be a rider
            </Link>
            <span className="bg-black text-primary rounded-full p-1">
              <ArrowUpRight size={20} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
