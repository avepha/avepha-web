import React from 'react'
import dynamic from 'next/dynamic'
// @ts-ignore
const Particles: any = dynamic(() => import ('react-particles-js'), {ssr: false})

const GraphParticles = () => {
  const paramConfig: any = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: false
        }
      },
      color: {
        value: '#7dce94'
      },
      opacity: {
        value: 1
      },
      size: {
        value: 5,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: true,
        color: '#7dce94'
      },
      move: {
        random: true,
        speed: 1,
        direction: 'top',
        out_mode: 'out'
      }
    }
  }
  
  return <Particles className="mi-home-particle" params={paramConfig}/>
}

export default GraphParticles
