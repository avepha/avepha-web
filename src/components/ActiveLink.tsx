import {WithRouterProps} from 'next/dist/client/with-router'
import NextLink from 'next/link'
import {withRouter} from 'next/router'
import {ReactElementLike} from 'prop-types'
import React, {Children, cloneElement, Component} from 'react'

interface LinkProps extends WithRouterProps {
  href: string
  children: ReactElementLike
}

class ActiveLink<P extends LinkProps> extends Component<P> {
  public render() {
    const {
      router,
      children,
      href,
      ...otherProps
    } = this.props
    
    const child = Children.only(children)
    const active = this.props.router.pathname === href
    // @ts-ignore
    const className = `${active ? 'active' : ''} ${child.props.className}`
    
    return (
      <NextLink href={this.props.href} {...otherProps}>
        {cloneElement(child, {className})}
      </NextLink>
    )
  }
}

export default withRouter(ActiveLink)
