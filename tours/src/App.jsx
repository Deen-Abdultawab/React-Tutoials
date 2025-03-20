import { useEffect, useState } from "react"
import { Tours } from "./components/Tours";
import { Loading } from "./components/Loading";
import { ToursLayout } from "./components/ToursLayout";
const url = 'https://www.course-api.com/react-tours-project';

function App () {
  const [tours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchTours = async () => {
    setLoading(true);
    try {
      let response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id)=>{
    const newTours = tours.filter((tour)=>tour.id !== id) ;
    setTours(newTours)
  }

  if(isLoading){
    return (
      <ToursLayout>
        <Loading />
      </ToursLayout>
    )
  } else {
    
    if(tours.length === 0){
      return (
        <ToursLayout>
          <div className="flex flex-col justify-center">
          <h2 className="text-[2rem] text-center">No tours left</h2>
            <button className='border border-[#10B981] py-2 px-4 rounded-[4px] w-fit mx-auto text-[1.2rem] capitalize cursor-pointer' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
      </ToursLayout>
      )
    } else {
      return (
        <ToursLayout>
           <div className="grid grid-cols-3 max-tab:grid-cols-2 max-mob:grid-cols-1 gap-[2rem]">
            {tours.map((tour) => {
              return (
               <Tours tour={tour} key={tour.id} removeTour={removeTour}/>
              );
            })}
          </div>
        </ToursLayout>
      );
    }
  }
}

export default App;
