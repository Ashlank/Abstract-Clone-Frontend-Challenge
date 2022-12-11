import Image from "next/image"
import icon from "../public/arrow.svg"

export default function Search() {
  return (
    <div className="bg-back h-[60vh] py-24 px-6">
      <div className="w-full max-w-3xl m-auto flex flex-col items-center gap-8">
        <h2 className="text-4xl sm:text-7xl">How can we help?</h2>
        <div className="relative w-full">
          <input type="text" placeholder="Search" className="w-full border-[1px] border-black px-4 py-4 rounded-md shadow-lg text-2xl"></input>
          <Image src={icon} alt="Arrow Icon" className="absolute w-12 h-12 right-2 top-2"/>
        </div>
      </div>
    </div>
  )
}
