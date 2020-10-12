import React from 'react'
// @ts-ignore
import LineIcon from 'react-lineicons'

type PaginationProps = {
  itemsPerPage: number
  totalItems: number
  paginate: (e: any, currentPage: number) => void,
  currentPage: number
  className: string
}

const Pagination: React.FC<PaginationProps> = ({
       itemsPerPage,
       totalItems,
       paginate,
       currentPage,
       className
     }) => {
  const pageNumbers = []
  
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }
  
  return (
    <div className={className ? 'mi-pagination ' + className : 'mi-pagination'}>
      <ul>
        {currentPage === 1 ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage - 1)} href="!#">
              <LineIcon name="chevron-left"/>
            </a>
          </li>
        )}
        {pageNumbers.map(_number => (
          <li key={_number}  className={currentPage === _number ? 'is-active' : ''}
          >
            <a onClick={e => paginate(e, _number)} href="!#">
              {_number}
            </a>
          </li>
        ))}
        {currentPage === pageNumbers[pageNumbers.length - 1] ? null : (
          <li>
            <a onClick={e => paginate(e, currentPage + 1)} href="!#">
              <LineIcon name="chevron-right"/>
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Pagination
