import data from "./data"
import { useState } from "react"
import { List } from "./components/List"



function App() {
  const [profiles, setProfiles] = useState(data)
  const handleClear = ()=> {
    setProfiles([])
  }
  return (
    <section className="w-full h-full min-h-[100vh] bg-[#fae8ff] grid place-items-center">
      <div className="bg-[white] px-[1rem] py-[1.5rem] w-[90%] max-w-[400px] shadow-xl">
        <h1 className="text-[#0F172A] !text-[1.5rem] font-[400]">{profiles.length} Birthdays Today</h1>
        <div className="flex flex-col gap-4 mt-[1.5rem]">
          {
            profiles.map((profile)=>{
              return (
                <List key={profile.id} profile={profile}/>
              )
            })
          }
        </div>
        <div className="w-full flex mt-4">
        <button className="w-[90%] mx-auto py-[0.2rem] text-center !bg-[#d946ef] text-[white] text-[0.5rem] rounded-[0.2rem]" type="button" onClick={handleClear}>
            Clear All
        </button>
        </div>
      </div>
      
    </section>
  )
}

export default App
