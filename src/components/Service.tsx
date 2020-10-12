import React from 'react'
// @ts-ignore
import LineIcon from 'react-lineicons'

const Service: React.FC<any> = (props) => {
  return (
    <div className="mi-service">
      <span className="mi-service-icon">
        <LineIcon name={props.content.icon}/>
      </span>
      <h5>{props.content.title}</h5>
      <p>{props.content.details}</p>
    </div>
  )
}

export default Service
