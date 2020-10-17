import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import {TProject} from 'src/data/types'
import db from 'src/data/database'
import GraphParticles from 'src/components/GraphParticles'

const ProjectDetailPage: NextPage<{ project: TProject }> = ({project}) => {
  const [content, setContent] = useState('')
  useEffect(() => {
    axios.get(`/md/projects/${project.mdFile}`)
      .then(({data}) => setContent(data))
  })
  
  if (content === '') {
    return (
      <div className="w-100 d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
        <GraphParticles />
        <span style={{fontWeight: 600, fontSize: 15}}>{project.title} </span>
        <span style={{fontWeight: 600, fontSize: 35}}>Coming Soon</span>
      </div>
    )
  }
  
  return (
    <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
      <div className="container-fluid">
        <ReactMarkdown source={content} escapeHtml={false}/>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      project: db.projects.find(({id}) => `${id}` === params?.id)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = db.projects.map(project => {
    return {params: {id: `${project.id}`}}
  })
  
  return {
    paths,
    fallback: false,
  }
}

export default ProjectDetailPage
