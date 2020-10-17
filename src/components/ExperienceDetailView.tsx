import React, {useEffect, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import {WorkingExperienceDetail} from 'src/data/types'
import axios from '../lib/axios'
import dynamic from 'next/dynamic'
// @ts-ignore
const LineIcon: any = dynamic(() => import ('react-lineicons'), {ssr: false})

const ExperienceDetailView: React.FC<{ detail: WorkingExperienceDetail }> = ({detail}) => {
  const {company, position, mdFile, year} = detail
  const [content, setContent] = useState('')
  useEffect(() => {
    axios.get(`/md/experiences/${mdFile}`).then((data) => {
      setContent(data.data)
    })
  })
  
  return (
      <div className="mi-resume mt-30">
        <div className="mi-resume-summary">
          <h6 className="mi-resume-year">{year}</h6>
        </div>
        <div className="mi-resume-details">
          <h5>{position}</h5>
          <h6 className="mi-resume-company"><LineIcon name="map-marker"/> {company}</h6>
          <ReactMarkdown source={content} escapeHtml={false} />
        </div>
      </div>
  )
}

export default ExperienceDetailView
