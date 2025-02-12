import React from 'react'

function Navbar() {
  const NavItems=(<>
  <li><a href="/">HOME</a></li>
      <li><a href="/Course">COURSES</a></li>
      <li><a>CONTACT US </a></li>
      <li><a>ABOUT US</a></li>   
  </>)
  return (
    <>
    <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {NavItems}
        {/* <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li> */}
      </ul>
    </div>
    <a className="text-xl">daisyUI</a>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NavItems}
      {/* <li><a>HOME</a></li>
      <li><a>COURSES</a></li>
      <li><a>CONTACT US </a></li>
      <li><a>ABOUT US</a></li> */}
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}
    </ul>
  </div>
  <div className="hidden md:block">
  <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
  </div>
  <div className="">
    <a className="btn">Login</a>
  </div>
</div>
</div>
    </div>
    
    </>
  )
}

export default Navbar