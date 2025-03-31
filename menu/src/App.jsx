import { useEffect } from "react"
import menu from "./data"
import { useState } from "react"

function App (){
  const [menuItems, setMenuItems] = useState(menu)
  const menuBtns = ['all', ...new Set(menu.map((menu)=>menu.category))]
  const filterByCategory = (categoryName)=>{
    if(categoryName === 'all'){
      setMenuItems(menu)
    } else {
      const newItems = menu.filter((item)=>item.category === categoryName)
      setMenuItems(newItems)
    }
  }
  const btns = ['all', 'breakfast', 'lunch', 'shakes']

  return (
   <section className="lg:w-[70%] w-[90%] mx-auto py-[4rem]">
    <header className="flex flex-col items-center text-center gap-[1rem] w-fit mx-auto mb-[2.2rem]">
      <h1 className="text-[2.5rem] tracking-[1px] capitalize font-[500]">our menu</h1>
      <span className="h-[4px] w-[70%] mx-auto bg-[#F59E0B]"></span>
    </header>
    <main>
      <div className="flex items-center justify-center gap-[1.13rem] mb-[3.9rem]">
        {
          menuBtns.map((btn)=>{
            return (
              <button 
              onClick={()=>filterByCategory(btn)}
              type="button" key={btn} className="bg-[#F59E0B] text-white capitalize py-[6px] px-[12px] rounded-[4px] cursor-pointer">
                {btn}
              </button>
            )
          })
        }
      </div>
      <div className="menu-items flex justify-center flex-wrap gap-[2rem] items-stretch">
        {
          menuItems.map((menu)=>{
            return (
              <article key={menu.id} className="menu-item w-full max-w-[367px] bg-[#FFFFFF] rounded-[4px] shadow-2xl overflow-hidden flex flex-col flex-grow">
                <div className="h-[240px] overflow-hidden">
                  <img src={menu.img} alt={menu.title} className="w-full h-full object-cover"/>
                </div>
                <div className="p-[1.5rem]">
                  <div className="flex items-center justify-between mb-[1.2rem]">
                    <h3 className="font-[500] text-[1.2rem] text-[#0F172A] capitalize leading-[1.25rem]">{menu.title}</h3>
                    <span className="bg-[#F59E0B] text-[#FFFFFF] px-[8px] py-[4px] text-[1rem] rounded-[4px]">${menu.price}</span>
                  </div>
                  <p className="text-[#64748B] leading-[2rem] text-[1rem]">
                   {menu.desc}
                  </p>
                </div>
              </article>
            )
          })
        }
      </div>

    </main>
   </section>
  )
}

export default App