import './App.css'
import BookCard from './components/BookCard'
import book1 from './assets/images/book1.jpg'
import book2 from './assets/images/book2.jpg'
import book3 from './assets/images/book3.jpg'
// import FormField from './components/FormField'
import { Book } from './types/type'

const bookLists:Book[] = [
  {
    id: 1,
    title: 'Interesting Facts For Curious Mind',
    author: 'Jordan Moore',
    image: book1
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    image: book2
  },
  {
    id: 3,
    title: 'Fairy Tale',
    author: 'Stephen King',
    image: book3
  },
]

function App() {
  const getBook = (id:number)=>{
    const searchedBook = bookLists.find((book)=> book.id === id)
    console.log(searchedBook)
  }
  return (
    <section className='p-4 bg-[#d0d5d8] min-h-[100vh]'>
      {/* <FormField /> */}
      <h1 className='text-center font-bold text-[1.5rem]'>Amazon Best Sellers</h1>
      <div className="bookList w-[80%] max-mob:!w-[90%] mx-auto flex flex-wrap gap-4 justify-center mt-[4rem]">
        {
          bookLists.map((book, index)=>(
            <BookCard book={book} key={index} getBook={getBook} num={index}/>
          ))
        }
      </div>
    </section>
  )
}

export default App
