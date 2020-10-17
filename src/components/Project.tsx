import React from 'react'
import {TProject} from 'src/data/types'
import Link from 'next/link'

const Project: React.FC<{ data: TProject }> = (props) => {
  const {id, featuredImage, title, createDay, createMonth} = props.data
  const getShortMonth = (month: string) => {
    return month.slice(0, 3)
  }
  const getNospaceTitle = (fileSource: string) => {
    const tempArr = fileSource.split('/')
    const fileName = tempArr[tempArr.length - 1]
    return fileName.slice(0, -3)
  }
  return (
    <div className="mi-blog">
      <div className="mi-blog-image">
        <Link href={`projects/project-detail/${id}`}>
          <img src={featuredImage} alt={title}/>
        </Link>
        <div className="mi-blog-date">
          <span className="date">{createDay}</span>
          <span className="month">{getShortMonth(createMonth)}</span>
        </div>
      </div>
      <div className="mi-blog-content">
        <h5>
          <Link href={`projects/project-detail/${id}`}>
            {title}
          </Link>
        </h5>
      </div>
    </div>
  )
}

export default Project
