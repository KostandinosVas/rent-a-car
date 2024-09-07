import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/logo.png"


const Navbar = () => {
  return (
   <div className="flex justify-between items-center h-[100px] z-50 mx-auto w-full  absolute top-0 left-0 right-0 px-[50px] bg-white bg-opacity-5">
    <div className="flex-1 justify-start flex z-10">
    <Image src={Logo} alt="logo" width={130} height={60} className="" />
    </div>
    <nav className="flex justify-between align-middle  w-full flex-1 ">
      <ul className="flex justify-start gap-4 items-center h-full">
        <li><Link className="text-white" href="/">Areality solutions</Link></li>
        <li><Link className="text-white" href="/technology/">Technology</Link></li>
        <li><Link className="text-white"  href="/">Subscription</Link></li>
        <li><Link className="text-white" href="/">AI to Reduce</Link></li>
      </ul>
    </nav>
    <div className="header-buttons flex justify-end gap-4 items-center flex-1">
      <button className=" rounded-full  text-white p-2">Register</button>
      <button className=" rounded-full bg-[#007bff] text-white p-2">Try demo</button>
    </div>
   </div>
  )
}

export default Navbar