'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  console.log('location', pathname);

  return (
    <header className="header">
      <Link href='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MC</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link href="/about" className={pathname === '/about' ? 'text-blue-500' : 'text-black'}>
         About
        </Link>
        <Link href="/projects" className={pathname === '/projects' ? 'text-blue-500' : 'text-black'}>
         Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
