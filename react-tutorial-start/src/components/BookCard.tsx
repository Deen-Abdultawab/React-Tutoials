import { Book } from "../types/type" 

interface BookCardProps {
  book: Book;
  getBook: (id: number) => void;
  num: number
}
 
const BookCard: React.FC<BookCardProps> = ({ book, getBook, num })=> {
  return (
      <article className=' relative p-4 w-full max-w-[250px] max-mob:max-w-[100%] flex flex-col items-center gap-4 bg-[#fff] shadow-2xs rounded-[0.5rem] cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in'>
        <div className="absolute top-0 left-0 p-[0.2rem] px-4 font-bold text-[#fff] rounded-tl-[0.5rem] rounded-br-[0.5rem] bg-[gray]">{`#${num + 1}`}</div>
        <div className='w-[6rem] max-w-[80%] h-[10rem] border border-[gray]'>
            <img src={book.image} alt="book cover" className='w-full h-full object-cover'/>
        </div>
        <div className='w-full text-center'>
          <h3 className='text-[0.8rem] font-bold'>{book.title}</h3>
          <p className='text-[0.7rem] text-[#537693] font-bold tracking-wider'>{book.author}</p>
          <button onClick={()=>getBook(book.id)}>Get Book</button>
        </div>
      </article>
  )
}

export default BookCard