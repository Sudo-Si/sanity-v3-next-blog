import {ArrowUturnLeftIcon }from "@heroicons/react/24/solid";
import Link from 'next/link'
function StudioNavbar(props:any) {
  return (
    <div>
<div className="flex items-center justify-between">
    <Link href={"/"} className="text-[#eaa62a]">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#eaa62a]" />
             Go to the website
             </Link>
        <>{props.renderDefault(props)}</>
        </div>
        
        

    </div>
  )
}

export default StudioNavbar
