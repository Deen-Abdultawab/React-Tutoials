import { useState } from "react"

export const Tours = ({tour, removeTour})=>{
 const [truncateText, setTruncateText] = useState(true)
 const toggleTruncate = ()=>{
    setTruncateText(!truncateText)
 }

    return (
        <article className="w-full h-full bg-[#FFFFFF] shadow-2xl flex flex-col">
            <div className="w-full h-[300px] rounded-t-[4px] relative">
                <img src={tour.image} alt="" className="w-full h-full object-cover" />
                <span className="absolute top-0 right-0 rounded-tr-[4px] bg-[#10B981] py-[4px] px-[8px] text-white">
                    ${tour.price}
                </span>
            </div>

            <div className="p-[1.5rem] flex flex-col flex-grow justify-between">
                <div className="info">
                    <h3 className="text-center text-[#0F172A] text-[20px] leading-[30px] tracking-[1px] font-[500]">
                    {tour.name}
                    </h3>
                    <p className="text-[#64748B] text-[1rem] leading-[24px] min-h-[100px]">
                    {truncateText ? `${tour.info.substring(0, 200)}....` : tour.info}
                    </p>
                    <span className="text-[#10B981] cursor-pointer" onClick={toggleTruncate}>{truncateText? 'read more': 'show less'}</span>
                </div>
                <button className="mt-[1rem] w-full border border-[#10B981] rounded-[4px] p-[7px] text-[13px] tracking-[1px] text-[#10B981]" onClick={()=>removeTour(tour.id)}>
                    Not Interested
                </button>
            </div>
        </article>
    )
}