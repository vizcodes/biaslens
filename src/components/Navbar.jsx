import React from 'react';
import LogoImage from '../assets/biaslens_logo_white.png';
const Navbar = () => {
    return (
    <div className="navbar bg-base-100 shadow-sm bg-neutral ">
    <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a href="/">What's Trending?</a></li>
      <li>
      <details>
      <summary>Topics</summary>
      <ul className="p-2">
      <li><a href="/">Technology</a></li>
      <li><a href="/">Health</a></li>
      <li><a href="/">Sports</a></li>
      <li><a href="/">Business</a></li>
      <li><a href="/">Entertainment</a></li>
      </ul>
      </details>
      </li>
      <li><a href="/">Contact Us</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost text-xl">
      <img src={LogoImage} alt="Hero" style={{ height: '160px', width: 'auto' }} />
    </a>
    </div>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="/">What's Trending?</a></li>
      <li>
      <details>
      <summary>Topics</summary>
      <ul className="p-2">
      <li><a href="/">Technology</a></li>
      <li><a href="/">Health</a></li>
      <li><a href="/">Sports</a></li>
      <li><a href="/">Business</a></li>
      <li><a href="/">Entertainment</a></li>
      </ul>
      </details>
      </li>
      <li><a href="/">Contact Us</a></li>
    </ul>
    </div>
    <div className="navbar-end">
    <a href="/" className="btn btn-secondary btn-soft">Contribute! 🙏🏽 </a>
    </div>
    </div>
    );
};

export default Navbar;