import Link from "next/link"
import Image from "next/image"
import {FaGithubSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaInstagramSquare} from "react-icons/fa"
import {FaArrowRight} from "react-icons/fa"
// TODO Adjust nav buttons 
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-0 py-1 my-0">
      <div className=" flex items-center space-x-2">
        <Link href="/" className="flex items-center space-x-2 px-4">
        <Image
        src="https://i.postimg.cc/Px3pxSHz/A-Sk-ll-Called-L-CK-2.png" 
        width={40}
        height={40}
        alt= "logo"
        /> <h1>theYarn2.0</h1>
        </Link>
       
      </div>

      <div className="flex items-center space-x-3 px-4 ">
       <h3> More of my stuff </h3><FaArrowRight className="animate-bounce w-6 "/>
        <Link className=" hover:bg-sky-600 " href={"https://github.com/Sudo-Si?tab=repositories"}><FaGithubSquare/> </Link>
        <Link className="  hover:bg-sky-600 " href={"https://www.linkedin.com/in/othusitse-dalgleish-maswabi/"}><FaLinkedin/></Link>
        <Link className="  hover:bg-sky-600 " href={"https://www.instagram.com/thosedudes_3d/"}><FaInstagramSquare/></Link>
        
       
      </div>

   
    </header>
  )
}

export default Header
