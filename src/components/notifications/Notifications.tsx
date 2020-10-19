import React from 'react'
// @ts-ignore
import classnames from 'classnames'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Notification from './Notification'
import {Notify} from './NotificationManager'

interface NotificationsProps {
  notifications: Notify[]
  onRequestHide: (notify: Notify) => void
  enterTimeout: number
  leaveTimeout: number
}

class Notifications extends React.Component<NotificationsProps> {
  handleRequestHide = (notification: Notify) => () => {
    const {onRequestHide} = this.props
    if (onRequestHide) {
      onRequestHide(notification)
    }
  }
  
  static defaultProps = {
    notifications: [],
    onRequestHide: () => {
      return
    },
    enterTimeout: 400,
    leaveTimeout: 400
  }
  
  render() {
    const {notifications, enterTimeout, leaveTimeout} = this.props
    const className = classnames('notification-container', {
      'notification-container-empty': notifications.length === 0
    })
    return (
      <div className={className}>
        <TransitionGroup>
          {notifications.map((notification) => {
            const key = notification.id || new Date().getTime()
            return (
              <CSSTransition
                classNames="notification"
                key={key}
                timeout={{exit: leaveTimeout, enter: enterTimeout}}>
                <Notification
                  key={key}
                  type={notification.type}
                  title={notification.title}
                  message={notification.message}
                  timeOut={notification.timeOut}
                  onClick={notification.onClick}
                  onRequestHide={this.handleRequestHide(notification)}
                  customClassName={notification.customClassName}
                />
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      </div>
    )
  }
}

export default Notifications
