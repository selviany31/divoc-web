'use client';
import Image from 'next/image';
import HeaderBackground from './background';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  // const [bgColor, setBgColor] = useState("")

  useEffect(() => {
    const checkScroll = () => {
      setIsPageScrolled(window.scrollY !== 0);
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', checkScroll);

    // NEW: cleanup function
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isPageScrolled]);
  console.log(isPageScrolled);

  return (
    <div className=''>
      <HeaderBackground />
      <div className='relative mb-6'>
        <div
          className={`fixed z-10 w-full px-[150px] py-6 ${
            isPageScrolled ? 'bg-white shadow-md' : ''
          }`}
        >
          <div className='flex justify-between items-center'>
            <Image
              aria-hidden
              src='/logo-white.png'
              alt='File icon'
              width={150}
              height={150}
            />
            <div className='flex items-center'>
              <ul className='flex space-x-5 text-lg font-semibold'>
                <li>
                  <a href='#'>Home</a>
                </li>
                <li>
                  <a href='#feature-section'>Fitur</a>
                </li>
                <li>
                  <a href='#pricing-section'>Harga</a>
                </li>
                <li>
                  <a href='#footer'>Kontak</a>
                </li>
              </ul>
            </div>
            <div className='flex space-x-3 mr-3'>
              <button className='border-2 border-[#0f4768] rounded-lg px-3 py-1 text-sm font-semibold text-[#0f4768]'>
                Login
              </button>
              <button className='border-2 border-[#0f4768] rounded-lg px-3 py-1 text-sm font-semibold text-white bg-[#0f4768]'>
                Signup
              </button>
            </div>
          </div>
        </div>
        <div className='px-[150px] pt-10'>
          <div className='flex flex-col justify-center h-[350px] w-[40%] space-y-5'>
            <div>
              <p className='text-3xl font-bold'>Divoc,</p>
              <p className='text-lg font-semibold'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='flex justify-start space-x-3'>
              <button className='border-2 border-[#0f4768] rounded-2xl px-4 py-2 text-sm font-semibold text-white bg-[#0f4768]'>
                Coba Gratis Sekarang
              </button>
              <button className='border-2 border-[#0f4768] rounded-2xl px-4 py-2 text-sm font-semibold text-[#0f4768]'>
                Konsultasi Gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
