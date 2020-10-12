import React from 'react'
// @ts-ignore
import LineIcon from 'react-lineicons'

type SmallTitleProps = {
  icon: string
  title: string
}

const SmallTitle: React.FC<SmallTitleProps> = (props) => {
  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <LineIcon name={props.icon}/>
      </span>
      <h4>{props.title}</h4>
    </div>
  )
}

export default SmallTitle
