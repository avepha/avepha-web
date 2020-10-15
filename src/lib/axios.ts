import axios from 'axios'
import dynamic from 'next/dynamic'

// @ts-ignore
const config: any = dynamic(() => import ('../config'), {ssr: false})

export default axios.create({
  baseURL: config.baseUrl,
})
