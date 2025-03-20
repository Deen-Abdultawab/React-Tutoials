import arrowBtn from './assets/images/arrowBtn.svg'
import { useEffect, useState } from 'react'
import reviews from './data'
import { Reviews } from './components/Reviews'

function App (){
  const [allReviews, setReviews] = useState(reviews)
  const [activeReview, setActivereview] = useState([])

  const getActiveReview = (id)=>{
    console.log(id)
    if(id === activeReview.id){
      id += 1
    }
    if(id <= 0){
      id = allReviews.length
    }
    if( id > allReviews.length){
      id = 1
    }

    const currentReview = allReviews.find((review)=>review.id === id)
    setActivereview(currentReview)
  }

  useEffect(()=>{
    getActiveReview(1)
  }, [])

  return (
    <section className="w-full min-h-[100vh] grid place-items-center">
     <Reviews activeReview={activeReview} getActiveReview={getActiveReview} allReviews={allReviews}/>
    </section>
  )
}

export default App