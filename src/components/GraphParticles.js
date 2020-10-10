import React from 'react'
import Particles from "react-particles-js";

const GraphParticles = () => {
  const paramConfig = {
    particles: {
      number: {
        value: 60,
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
