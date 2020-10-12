/* tslint:disable */
import React, {useState} from 'react'
import * as Icon from 'react-feather'
import FsLightBox from 'fslightbox-react'

type PortfolioProps = {
  content: {
    title: string
    subtitle: string
    imageUrl: string
    largeImageUrl: string[]
    url: string
  }
  isVisible?: any
}

const Portfolio: React.FC<PortfolioProps> = (props) => {
  const [toggle, setToggle] = useState(false)
  const {title, subtitle, imageUrl, largeImageUrl, url} = props.content
  
  const handleToggle = (value: boolean) => {
    setToggle(value)
  }
  
  return (
    <div className={props.isVisible ? 'mi-portfolio mi-portfolio-visible' : 'mi-portfolio'}>
      <div className="mi-portfolio-image">
        <img src={imageUrl} alt={title}/>
        <ul>
          {!largeImageUrl ? null : <li>
            <button onClick={() => handleToggle(!toggle)}>
              <Icon.ZoomIn/>
            </button>
          </li>}
          {url ? <li>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <Icon.Link/>
            </a>
          </li> : null}
        </ul>
      </div>
      {!url ? <h5>{title}</h5> : <h5>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {title}
        </a>
      </h5>}
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : <FsLightBox
        toggler={toggle}
        sources={largeImageUrl}
      />
      }
    </div>
  )
}

export default Portfolio
