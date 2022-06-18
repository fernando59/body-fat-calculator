import { FC } from "react"

interface Props{
    range:string
    title:string
    color:string
}
export const StepPoint:FC<Props> = ({range,title,color='bg-[#009fe3]'}) => {
  return <>
   <div className="flex flex-col justify-center items-center gap-2 hover:scale-110 transition duration-300 cursor-pointer">
        {/* <div className="bg-[#009FE3] rounded-md w-4 h-4"> </div> */}
        <div className={`${color} rounded-md w-4 h-4 `}> </div>
        <span className="text-xs lg:text-base">{range}</span>
        <span className="text-xs lg:text-base">{title}</span>
      </div>
  </>
}
