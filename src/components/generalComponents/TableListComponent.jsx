import React, {useState} from 'react'
// import Pagination from './Pagination';

const TableListComponent = ({ headerList, dataList, itemComponent: ItemComponent, fontSize, func, scroll }) => {    
    const [currentPage, setCurrentPage] = useState(1);
    const [transactionPerPage] = useState(6);
  
    // Get current Transaction
    const indexOfLastTransaction = currentPage * transactionPerPage;
    const indexOfFistTransaction = indexOfLastTransaction - transactionPerPage;
    // const currentTransaction = dataList?.slice(indexOfFistTransaction, indexOfLastTransaction);

    const paginate = (num) => {
        setCurrentPage(num);
    };

    const style = {
      fontSize: `${fontSize}px`
    }

  return (
    <div className='mt-4 max-h-96 h-fit overflow-y-scroll p-3  use-scroll-bar-style'>
        {
          dataList?.length ? (
            <table className='min-w-full text-left text-xs user-balance-table'>
              <thead className='border-b font-medium'>
              <tr>
                  {
                    headerList?.map(header => (
                        <th key={header} scope="col" className="px-px py-4 text-xs" style={style}>{header}</th>
                    ))
                  }
              </tr>
              </thead>
              <tbody>
              {
                  dataList?.map((data, index) => (
                      <ItemComponent key={index} itemData={data} func={func} />
                  ))
              }
              </tbody>
          </table>
          ) : (
            <div className='text-center text-gray-400'>
              <i>NO AVAILABLE DATA</i>
            </div>
          )
        }
        <div className="pagination-area">
        {/* <Pagination
          itemsPerPage={transactionPerPage}
          totalItems={dataList.length}
          paginate={paginate}
          first={indexOfFistTransaction}
          last={indexOfLastTransaction}
          currentPage={currentPage}
        /> */}
      </div>
    </div>
  )
}

export default TableListComponent
