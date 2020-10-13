import React, {useState} from 'react'
import {GetStaticProps, NextPage} from 'next'
import SectionTitle from '../../src/components/section-title'
import Pagination from '../../src/components/Pagination'
import PortfoliosView from '../../src/components/PortfoliosView'
import db from '../../src/data/database'

const PhotosPage: NextPage<{ portfolios: any }> = ({portfolios}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [portfoliosPerPage] = useState(9)
  
  const indexOfLastPortfolios = currentPage * portfoliosPerPage
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage
  const currentPortfolios = portfolios.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  )
  
  const paginate = (e: any, pageNumber: any) => {
    e.preventDefault()
    setCurrentPage(pageNumber)
  }
  
  return (
    <>
      <div className="mi-about mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <SectionTitle title="Photos"/>
          {/*{<PortfoliosView portfolios={currentPortfolios}/>}*/}
          {/*{!(portfolios.length > portfoliosPerPage) ? null : (*/}
          {/*  <Pagination*/}
          {/*    className="mt-50"*/}
          {/*    itemsPerPage={portfoliosPerPage}*/}
          {/*    totalItems={portfolios.length}*/}
          {/*    paginate={paginate}*/}
          {/*    currentPage={currentPage}*/}
          {/*  />*/}
          {/*)}*/}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      portfolios: db.portfolios
    }
  }
}

export default PhotosPage
