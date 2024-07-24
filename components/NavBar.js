// components/NavBar.js
import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-around">
        <li>
          <Link href="/" className="text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/explore" className="text-white">
            Explore
          </Link>
        </li>
        <li>
          <Link href="/generate" className="text-white">
            Generate
          </Link>
        </li>
        <li>
          <Link href="/profile" className="text-white">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
