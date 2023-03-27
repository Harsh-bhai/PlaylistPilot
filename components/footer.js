import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div><footer className=" body-font ">
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-300">  
          
          <img src="/logo.svg" alt="" />
        </a>
      </div>
      <div className="flex-grow justify-evenly flex  md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/dailyneeds'} className="text-gray-300 hover:text-gray-300">Daily Needs</Link>
            </li>
            <li>
              <Link href={'/fruits'} className="text-gray-300 hover:text-gray-300">Fruits</Link>
            </li>
            <li>
              <Link href={'/vegetables'} className="text-gray-300 hover:text-gray-300">Vegetables</Link>
            </li>
            <li>
              <Link href={'/pottery'} className="text-gray-300 hover:text-gray-300">Potteries</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/dairyproducts'} className="text-gray-300 hover:text-gray-300">Diary Products</Link>
            </li>
            <li>
              <Link href={'/groceries'} className="text-gray-300 hover:text-gray-300">Groceries</Link>
            </li>
            {/* <li>
              <Link href={'/dailyneeds'} className="text-gray-300 hover:text-gray-300">Third Link</Link>
            </li>
            <li>
              <Link href={'/dailyneeds'} className="text-gray-300 hover:text-gray-300">Fourth Link</Link>
            </li> */}
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">ABOUT</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/about'} className="text-gray-300 hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href={'/about'} className="text-gray-300 hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link href={'/feedback'} className="text-gray-300 hover:text-gray-300">Feedback</Link>
            </li>
            <li>
              <Link href={'/seller'} className="text-gray-300 hover:text-gray-300">Become A Seller</Link>
            </li>
          </nav>
        </div>
        {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href={'/dailyneeds'} className="text-gray-300 hover:text-gray-300">First Link</Link>
            </li>
            <li>
              <Link href={'/dailyneeds'} className="text-gray-300 hover:text-gray-300">Second Link</Link>
            </li>
            <li>
              <Link href={'/dailyneeds'} className="text-gray-300 hover:text-gray-300">Third Link</Link>
            </li>
            <li>
              <Link href={'/dailyneeds'} className="text-gray-300 hover:text-gray-300">Fourth Link</Link>
            </li>
          </nav>
        </div> */}
      </div>
    </div>
    <div className="bg-gray-800">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-300 text-sm text-center sm:text-left">Playlist Pilot —
          <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-300 ml-1" target="_blank">All Rights Reserved</a>
        </p>
        <span className="flex space-x-4 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Link href={'https://www.facebook.com/profile.php?id=100014142857134  '} className="text-gray-300">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link href={'https://twitter.com/Pankajj_08'} className="ml-3 text-gray-300">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link href={'https://www.instagram.com/harshdew.12/'} className="ml-3 text-gray-300">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link href={'https://www.linkedin.com/in/harsh-dewangan-3a44b5232/'} className="ml-3 text-gray-300">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  </footer></div>
  )
}

export default Footer