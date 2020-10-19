import React from 'react'
import classnames from 'classnames'

type NotificationProps = {
  type: 'info'| 'success'| 'warning'| 'error'| 'primary'| 'secondary'
  title: React.ReactNode
  message: React.ReactNode,
  timeOut: number,
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void,
  onRequestHide: () => void,
  customClassName: string,
}

type NotificationState = {
  timer: NodeJS.Timeout
}

class Notification extends React.Component<NotificationProps, NotificationState> {
  static defaultProps = {
    type: 'info',
    title: null,
    message: null,
    timeOut: 5000,
    customClassName: ''
  }
  
  componentDidMount = () => {
    const {timeOut} = this.props
    if (timeOut !== 0) {
      this.setState({
        timer: setTimeout(this.requestHide, timeOut)
      })
    }
  }
  
  componentWillUnmount = () => {
    if (this.state.timer) {
      clearTimeout(this.state.timer)
    }
  }
  
  handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const {onClick} = this.props
    if (onClick) {
      onClick(e)
    }
    this.requestHide()
  }
  
  requestHide = () => {
    const {onRequestHide} = this.props
    if (onRequestHide) {
      onRequestHide()
    }
  }
  
  render() {
    const {type, message} = this.props
    let {title} = this.props
    const className = classnames(['notification', `notification-${type}`, this.props.customClassName])
    title = title ? (<h4 className="title">{title}</h4>) : null
    return (
      <div className={className} onClick={this.handleClick}>
        <div className="notification-message" role="alert">
          {title}
          <div className="message">{message}</div>
        </div>
      </div>
    )
  }
}

export default Notification
