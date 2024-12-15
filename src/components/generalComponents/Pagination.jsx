import React, { useState } from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate, first, last, currentPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

 const [start, setStart] = useState(0);
 const [end, setEnd] = useState(3);
 const [newPageNumbers, setNewPageNumbers] = useState(pageNumbers.slice(start, end));

  const handleDecrease =()=> {
    setNewPageNumbers(pageNumbers.slice(start - 1, end - 1));
    setStart(start - 1);
    setEnd(end - 1)
  } 

  const handleIncrease =()=> {
      setNewPageNumbers(pageNumbers.slice(start + 1, end + 1))
      setStart(start + 1);
      setEnd(end + 1);
  }

  
return (
    <div className='paginate-div flex justify-between items-center pt-5 pb-3'>
        <p className='text-xs font-semibold'>Showing {first + 1} - {last} from {totalItems}</p>
        <div>
        <ul class="flex justify-end gap-1 text-xs font-large">
            {
                newPageNumbers[0] !== 1 ? (
                    <li>
                    <button
                    class="inline-flex h-8 w-8 items-center hover:bg-blue-400 hover:text-white  font-semibold justify-center rounded rtl:rotate-180"
                    onClick={() => handleDecrease()}
                    >
                    <span class="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        />
                    </svg>
                    </button>
                </li>
                ) : ''
            }
            {
                newPageNumbers[0] > pageNumbers[0] ? (
                    <li>
                        <button
                        class="block h-8 w-8 rounded font-semibold hover:bg-blue-400 hover:text-white focus:bg-blue-600 focus:text-white text-center leading-8 "
                        >
                        ...
                        </button>
                    </li>
                ) : ''
            }

            {
                newPageNumbers.map(num => (
                    <li>
                        <button
                        onClick={() => paginate(num)}
                        className={num === currentPage ? `block h-8 w-8 rounded paginate-active font-semibold bg-blue-600 text-white text-center` : `block h-8 w-8 bbb rounded font-semibold hover:bg-blue-400 hover:text-white focus:bg-blue-600 focus:text-white text-center leading-8`}
                        >
                        {num}
                        </button>
                    </li>
                ))
            }

            {
                newPageNumbers[newPageNumbers.length - 1] < pageNumbers[pageNumbers.length - 1] ? (
                    <li>
                        <button
                        class="block h-8 w-8 rounded font-semibold hover:bg-blue-400 hover:text-white focus:bg-blue-600 focus:text-white text-center leading-8 "
                        >
                        ...
                        </button>
                    </li>
                ) : ''
            }

            {
                newPageNumbers[newPageNumbers.length - 1] < pageNumbers[pageNumbers.length - 1] ? (
                    <li>
                    <button
                    class="inline-flex h-8 w-8 font-semibold hover:bg-blue-400 hover:text-white  items-center justify-center rounded rtl:rotate-180"
                    onClick={() => handleIncrease()}
                    >
                    <span class="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        />
                    </svg>
                    </button>
                </li>
                ) : ''
            }
        </ul>
        </div>
    </div>
)
}

export default Pagination
