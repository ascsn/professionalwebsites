'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/blog': {
    name: 'blog',
    x: 127,
    y: 69,
    w: '56px',
  },
  // '/guestbook': {
  //   name: 'guestbook',
  //   x: 182,
  //   y: 104,
  //   w: '100px',
  // },
};

function Logo() {
  return (
    <Link aria-label="Kyle Godbey" href="/">
    <svg viewBox="0 0 500 500" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
      <path d="M 107.205 289.072 L 130.605 289.072 L 130.605 263.422 L 141.255 249.022 L 164.355 289.072 L 189.855 289.072 L 154.905 230.572 L 184.305 191.422 L 158.805 191.422 L 131.055 230.122 L 130.605 230.122 L 130.605 191.422 L 107.205 191.422 Z M 238.148 290.872 C 251.948 290.872 263.948 285.622 270.698 279.022 L 270.698 233.422 L 234.398 233.422 L 234.398 252.472 L 249.998 252.472 L 249.998 268.222 C 247.898 269.872 244.148 270.772 240.698 270.772 C 222.548 270.772 213.698 259.522 213.698 240.022 C 213.698 221.122 224.198 209.722 238.598 209.722 C 246.848 209.722 251.948 212.122 256.748 216.472 L 269.048 202.372 C 262.298 195.322 252.098 189.622 237.848 189.622 C 211.748 189.622 189.848 208.372 189.848 240.922 C 189.848 273.922 211.148 290.872 238.148 290.872 Z" transform="matrix(2.74336, 0, 0, 2.744734, -269.462585, -409.596527)" fill="rgb(51, 51, 51)" text-transform="capitalize" white-space="pre" className="svg-elem-1"></path>
      <rect x="18.154" y="19.306" width="462.656" height="58.091" paint-order="stroke" stroke-width="4px" fill="rgb(51, 51, 51)" stroke="rgb(51, 51, 51)" className="svg-elem-2"></rect>
      <rect x="16.597" y="422.833" width="465.249" height="58.091" paint-order="stroke" stroke-width="4px" fill="rgb(51, 51, 51)" stroke="rgb(51, 51, 51)" className="svg-elem-3"></rect>
    </svg>
      {/* <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 232 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M39 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M232 314.998H129.852L232 232.887V314.998Z"
          fill="currentColor"
        />
      </motion.svg> */}
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[1px] mb-2 px-4 md:px-0 md:mb-4 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItems[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                    {
                      'text-neutral-500': !isActive,
                      'font-bold': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
