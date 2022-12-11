import Image from 'next/image'
import logo from '../public/logo.svg'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {

  const [active, setActive] = useState(false);

  return (
    <header className='bg-black py-6 flex px-4 md:px-24 text-white items-center relative'>
      <div className='flex gap-4 flex-1 items-center'>
        <Image src={logo} alt="abstract logo" width={125}/>
        <p className='pl-3 border-l-2 text-xl md:text-2xl'>Help Center</p>
      </div>
      <div className={`absolute flex w-full items-center flex-col gap-4 text-3xl xl:text-2xl xl:flex-row xl:relative xl:w-auto xl:py-0 py-14 left-0 z-10 bg-black border-t-1 border-white xl:border-t-none ${active ? 'top-[101%]' : 'bottom-[100%]' }`}>
        <button type='button' className='py-2 pb-6 xl:pb-2 px-8 bg-buttonOne xl:rounded-lg border-b-[1px] xl:border-[1px] w-1/2 xl:w-auto'>Submit a request</button>
        <button type='button' className='py-2 px-8 xl:bg-buttonTwo xl:rounded-lg xl:border-[1px] w-1/2 xl:w-auto border-buttonTwo xl:transition-all ease-in duration-[0.3s] xl:hover:bg-white xl:hover:text-black'>Sign in</button>
      </div>
      <div className='w-14 h-7 md:w-16 md:h-8 flex gap-4 xl:hidden items-center'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBars} onClick={() => setActive(!active)}/>
      </div>
    </header>
  )
}
