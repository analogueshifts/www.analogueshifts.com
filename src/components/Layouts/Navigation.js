import React, { useState } from 'react'
import { Link } from "gatsby"
import ApplicationLogo from '../ApplicationLogo'
import NavLink from '../NavLink'
import ResponsiveNavLink from '../ResponsiveNavLink'

const Navigation = () => {


    const [open, setOpen] = useState(false)

    return (
      <div className="flex justify-center pt-3 pb-20 px-3">
        <nav className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg border border-gray-100 w-full lg:rounded-full fixed z-30">
          {/* Primary Navigation Menu */}
          <div className="w-full mx-auto px-4 lg:px-6 xl:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                  </Link>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden space-x-8 lg:-my-px lg:ml-10 lg:flex">
                <NavLink to="/" 
                  // active={router.pathname === "/"}
                >
                  Home
                </NavLink>
                <NavLink to="/blog" 
                  // active={router.pathname === "/blog"}
                >
                  Blog
                </NavLink>
                <NavLink to="/jobs" 
                  // active={router.pathname === "/jobs"}
                >
                  Jobs
                </NavLink>
                <NavLink to="/about" 
                  // active={router.pathname === "/about"}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  
                    // active={router.pathname === "/contact"}
                >
                  Contact
                </NavLink>
              </div>

              {/* Settings Dropdown */}
              <div className="hidden lg:flex lg:items-center lg:ml-6">
                <Link
                  className="text-lg py-1.5 px-3 rounded-full bg-yellow-500 text-white hover:bg-transparent hover:text-yellow-500 hover:ring-2 ring-yellow-500"
                  href="https://app.analogueshifts.com"
                >
                  Get Started
                </Link>
              </div>

              {/* Hamburger */}
              <div className="-mr-2 flex items-center lg:hidden">
                <button
                  onClick={() => setOpen(open => !open)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    {open ? (
                      <path
                        className="inline-flex"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        className="inline-flex"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Responsive Navigation Menu */}
          {open && (
            <div className="bg-white block lg:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <ResponsiveNavLink to="/" 
                  // active={router.pathname === "/"}
                >
                  Home
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  to="/blog"
                  
                    // active={router.pathname === "/blog"}
                >
                  Blog
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  to="/jobs"
                  
                    // active={router.pathname === "/jobs"}
                >
                  Jobs
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  to="/about"
                  
                    // active={router.pathname === "/about"}
                >
                  About
                </ResponsiveNavLink>
                <ResponsiveNavLink
                  to="/contact"
                  
                    // active={router.pathname === "/contact"}
                >
                  Contact
                </ResponsiveNavLink>
                <ResponsiveNavLink href="https://app.analogueshifts.com">
                  Get Started
                </ResponsiveNavLink>
              </div>
            </div>
          )}
        </nav>
      </div>
    )
}

export default Navigation
