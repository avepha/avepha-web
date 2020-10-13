import React from 'react'
import dynamic from 'next/dynamic'
// @ts-ignore
const LineIcon: any = dynamic(() => import ('react-lineicons'), {ssr: false})

type SmallTitleProps = {
  title: string
  icon?: string
}

const SmallTitle: React.FC<SmallTitleProps> = (props) => {
  return (
    <div className="mi-smalltitle">
      <span className="mi-smalltitle-icon">
        <LineIcon name={props.icon} />
      </span>
      <h4>{props.title}</h4>
    </div>
  )
}

export default SmallTitle
