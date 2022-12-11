import Image from "next/image"
import logo from '../public/logo-icon.svg'

export default function Footer() {
  return (
    <footer className='px-6 md:px-10 lg:px-20 pt-12 pb-20 md:pb-48 w-full bg-footer text-white'>
      <div className='flex gap-16 md:gap-14 lg:gap-10 flex-wrap relative'>
        <div className="w-[calc(50%-50px)] md:w-[15%] lg:w-[12%]">
          <h3 className="text-2xl font-bold mb-4">Abstract</h3>
          <ul>
            <li><a href='#'>Start Trial</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Download</a></li>
          </ul>
        </div>
        <div className="w-[calc(50%-50px)] md:w-[70%] lg:w-[12%]">
          <h3 className="text-2xl font-bold mb-4">Resources</h3>
          <ul className='flex flex-col'>
            <li><a href='#'>Blog</a></li>
            <li><a href='#'>Help Center</a></li>
            <li><a href='#'>Release Notes</a></li>
            <li><a href='#'>Status</a></li>
          </ul>
        </div>
        <div className="w-[calc(50%-50px)] md:w-[15%] lg:w-[12%]">
          <h3 className="text-2xl font-bold mb-4">Community</h3>
          <ul className='flex flex-col'>
            <li><a href='#'>Twitter</a></li>
            <li><a href='#'>LinkedIn</a></li>
            <li><a href='#'>Facebook</a></li>
            <li><a href='#'>Dribbble</a></li>
            <li><a href='#'>Podcast</a></li>
          </ul>
        </div>
        <div className="w-[calc(50%-50px)] md:w-[60%]  lg:w-[12%]">
          <h3 className="text-2xl font-bold mb-4">Company</h3>
          <ul className='flex flex-col'>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Legal</a></li>
          </ul>
          <div className='flex flex-col mt-8'>
            <h4 className="font-black">Contact Us</h4>
            <span>info@abstract.com</span>
          </div>
        </div>
        <div className="flex flex-col font-bold text-xl md:absolute md:right-0 md:bottom-[-15%] lg:bottom-[-50%]">
          <Image src={logo} alt="abstract logo" width={125} className="mb-4"/>
          <span>© Copyright 2022</span>
          <span>Abstract Studio Design, Inc.</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  )
}
