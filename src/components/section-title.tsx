import React from 'react'

type SectionTitleProps = {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  return (
    <div className="mi-sectiontitle">
      <h2>{props.title}</h2>
      <span>{props.title}</span>
    </div>
  )
}

export default SectionTitle
