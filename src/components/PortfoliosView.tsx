import React from 'react'
import TrackVisibility from 'react-on-screen'
import Portfolio from '../components/Portfolio'

const PortfoliosView: React.FC<any> = ({portfolios}) => {
  return (
    <div className="row mt-30-reverse">
      {
        portfolios.map((portfolio: any) => (
          <TrackVisibility
            once
            offset={200}
            className="col-lg-4 col-md-6 col-12 mt-30"
            key={portfolio.id}
          >
            
            <Portfolio content={portfolio} />
          </TrackVisibility>
        ))
      }
    </div>
  )
}

export default PortfoliosView
