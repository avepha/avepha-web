import React from 'react'
import dynamic from 'next/dynamic'
// @ts-ignore
const LineIcon: any = dynamic(() => import ('react-lineicons'), {ssr: false})

type SocialIconsProps = {
  socialLinks: any
  bordered: boolean
}

const SocialIcons: React.FC<SocialIconsProps> = (props) => {
  const {socialLinks, bordered} = props
  return (
    <ul className={bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      {!socialLinks.facebook ? null : <li>
        <a rel="noopener noreferrer" target="_blank"
           href={socialLinks.facebook}>
          <LineIcon name="facebook"/>
        </a>
      </li>}
      {!socialLinks.twitter ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.twitter}>
          {/*<LineIcon name="twitter"/>*/}
        </a>
      </li>}
      {!socialLinks.pinterest ? null : <li>
        <a rel="noopener noreferrer" target="_blank"
           href={socialLinks.pinterest}>
          {/*<LineIcon name="pinterest"/>*/}
        </a>
      </li>}
      {!socialLinks.behance ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.behance}>
          {/*<LineIcon name="behance"/>*/}
        </a>
      </li>}
      {!socialLinks.linkedin ? null : <li>
        <a rel="noopener noreferrer" target="_blank"
           href={socialLinks.linkedin}>
          {/*<LineIcon name="linkedin"/>*/}
        </a>
      </li>}
      {!socialLinks.dribbble ? null : <li>
        <a rel="noopener noreferrer" target="_blank"
           href={socialLinks.dribbble}>
          {/*<LineIcon name="dribbble"/>*/}
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <LineIcon name="github"/>
        </a>
      </li>}
    </ul>
  )
}

export default SocialIcons
