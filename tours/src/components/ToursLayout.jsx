export const ToursLayout = ({children})=>{
    return (
        <section className="w-[70%] mx-auto pt-[4rem] pb-[94px]">
              <div className="header w-fit mx-auto mb-[2rem]">
                <h1 className="text-center text-[40px] leading-[40px] text-[#0F172A] font-bold mb-[1rem]">
                  Our Tours
                </h1>
                <span className="block bg-[#10B981] h-[4px] w-[70%] mx-auto"></span>
              </div>
        
                {children}
            </section>
    )
}