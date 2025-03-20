import arrowBtn from '../assets/images/arrowBtn.svg'

export const Reviews = ({activeReview, getActiveReview, allReviews}) => {
    const randomId = Math.floor(Math.random() * allReviews.length - 1) + 1;

    return (
        <article className='py-[24px] px-[36px] bg-[#FFFFFF] shadow-2xl w-[90%] max-w-[600px]'>
            <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden before:content-[''] before:absolute before:w-full before:h-full before:bg-[#645CFF] before:rounded-full before:-top-1 before:-right-2 mx-auto before:z-[-1]">
                <img src={activeReview.image} alt={activeReview.name} className='w-full h-full object-cover !z-10'/>
            </div>
            <div className='text-center mt-[1rem]'>
                <h3 className='text-[#0F172A] tracking-[1px] text-[25px] leading-[25.01px] capitalize font-bold'>{activeReview.name}</h3>
                <p className="text-[#645CFF] tracking-[1px] text-[13px] leading-[13.01px] mt-[0.5rem] mb-[13px] uppercase font-[500]">{activeReview.job}</p>
                <p className="text-[#475569] text-[16px] leading-[24px] font-[500]">
                {activeReview.text}
                </p>
            </div>
            <div className="navBtns flex items-center justify-center mt-[1rem] gap-[20px] mb-[24px]">
                <img src={arrowBtn} alt="" onClick={()=>getActiveReview(activeReview.id - 1)}/>
                <img src={arrowBtn} alt="" className='rotate-[180deg]' onClick={()=>getActiveReview(activeReview.id + 1)}/>
            </div>
            <button className='bg-[#C1BEFF] rounded-[4px] text-[#645CFF] text-[13px] tracking-[1px] py-[6px] px-[12px] mx-auto w-fit block capitalize cursor-pointer' onClick={()=>getActiveReview(randomId)}>suprise me</button>
        </article>
    )
}