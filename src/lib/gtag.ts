import config from '../config'
export const GA_TRACKING_ID = 'UA-180753930-1'

export const pageview = (url: string) => {
  if (process.env.NODE_ENV === 'production') {
  // @ts-ignore
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
  
}
// @ts-ignore
export const event = ({action, category, label, value}) => {
  if (process.env.NODE_ENV === 'production') {
    // @ts-ignore
    window?.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}
