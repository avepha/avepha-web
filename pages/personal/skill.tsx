import React, {useEffect, useState} from 'react'
import {NextPage} from 'next'
import SectionTitle from 'src/components/SectionTitle'
import axios from 'src/lib/axios'
import ReactMarkdown from 'react-markdown'

const SkillPage: NextPage = () => {
  const [content, setContent] = useState('')
  useEffect(() => {
    axios.get(`/md/tech-skill.md`).then((data) => {
      setContent(data.data)
    })
  })
  
  return (
    <>
      <div className="mi-section mi-padding-top">
        <div className="container">
          <SectionTitle title="Tech skills"/>
          <ReactMarkdown source={content} escapeHtml={false}/>
        </div>
      </div>
    </>
  )
}

export default SkillPage
