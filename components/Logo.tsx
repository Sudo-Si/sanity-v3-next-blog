import Image from "next/image";

function Logo(props:any) {
    const {renderDefault, title}= props;
  return (
    <div>
      <Image  
        width={50}
        height={50}
        className="rounded-full object-cover"
        src="https://i.postimg.cc/ydNk3D37/A-Sk-ll-Called-L-CK-3.png" 
        alt="logo"
         />
         {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo
