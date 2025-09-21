// "use client"
// import React, { useState } from 'react'
// import logo from '../../public/images/svg/rapkology-logo.svg';
// import search from '../../public/images/svg/search.svg';
// import Image from 'next/image';
// import { navigation } from '@/data/navigation';
// import Link from 'next/link';
// import LoginButton from '../elements/LoginButton';
// import hamburger from '../../public/images/svg/header-hamburger.svg';
// import { IoMdClose } from "react-icons/io";

// const Header = () => {

//     const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <div className='fixed z-50 inset-x-0 top-0 border-b border-[#2A2A2A] backdrop-blur-[24px] bg-[var(--header)]'>
//         <div className='w-[90%] py-4 mx-auto flex items-center justify-between'>
//             <div className='flex items-center w-1/2 justify-between gap-8'>
//                 <Image width={235} height={60} src={logo} alt="Logo" className='lg:w-[235px] lg:h-[60px] w-[180px] h-[45px]' />
//                 <nav className='hidden lg:flex items-center gap-4'>
//                     {navigation.map((item) => (
//                         <Link key={item.name} href={item.href} className='text-sm font-normal text-white'>
//                             {item.name}
//                         </Link>
//                     ))}
//                 </nav>
//             </div>
//             <div className='hidden lg:flex items-center gap-6'>
//                 <Image width={20} height={20} src={search} alt="Search" />

//                 <LoginButton />
//             </div>

//             <div onClick={() => setMenuOpen(true)} className='lg:hidden'>
//                 <Image src={hamburger} alt='Hamburger Menu' />
//             </div>
//         </div>

//         {menuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col h-screen w-full">
//           <div className="flex items-center justify-between w-[90%] mx-auto py-4">
//             <Image
//               width={180}
//               height={45}
//               src={logo}
//               alt="Logo"
//               className="w-[180px] h-[45px]"
//             />
//             <button onClick={() => setMenuOpen(false)}>
//               <IoMdClose alt="Close Menu" color='#f0e74d' size={30}/>
//             </button>
//           </div>

//           <nav className="mt-10 flex flex-col gap-6 w-[90%] mx-auto py-4">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`text-white font-bold text-xl ${
//                   item.name === 'İletişim'
//                     ? 'bg-white text-black px-4 py-2 w-fit transform -rotate-2'
//                     : ''
//                 }`}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Header

"use client"
import React, { useState } from 'react'
import logo from '../../public/images/svg/rapkology-logo.svg'
import search from '../../public/images/svg/search.svg'
import Image from 'next/image'
import { navigation } from '@/data/navigation'
import Link from 'next/link'
import LoginButton from '../elements/buttons/LoginButton'
import hamburger from '../../public/images/svg/header-hamburger.svg'
import { IoMdClose } from 'react-icons/io'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="fixed z-50 inset-x-0 top-0 border-b border-[#2A2A2A] backdrop-blur-[24px] bg-[var(--header)]">
      <div className="w-[90%] py-4 mx-auto flex items-center justify-between">
        <div className="flex items-center w-1/2 justify-between gap-8">
          <Image
            width={235}
            height={60}
            src={logo}
            alt="Logo"
            className="lg:w-[235px] lg:h-[60px] w-[180px] h-[45px]"
          />
          <nav className="hidden lg:flex items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-normal text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <Image width={20} height={20} src={search} alt="Search" />
          <LoginButton />
        </div>

        {/* Hamburger butonu */}
        <div onClick={() => setMenuOpen(true)} className="lg:hidden">
          <Image src={hamburger} alt="Hamburger Menu" />
        </div>
      </div>

      {/* //! Mobil overlay menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col h-screen w-full transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between w-[90%] mx-auto py-4">
          <Image
            width={180}
            height={45}
            src={logo}
            alt="Logo"
            className="w-[180px] h-[45px]"
          />
          <button onClick={() => setMenuOpen(false)}>
            <IoMdClose color="#f0e74d" size={30} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-6 w-[90%] mx-auto py-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-white font-bold text-xl ${
                item.name === 'İletişim'
                  ? 'bg-white text-black px-4 py-2 w-fit transform -rotate-2'
                  : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Header
