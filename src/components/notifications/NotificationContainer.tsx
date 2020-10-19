import React from 'react'
// @ts-ignore
import NotificationManager, {Notify} from './NotificationManager'
import Notifications from './Notifications'

type NotificationContainerProps = {
  enterTimeout: number
  leaveTimeout: number
}

class NotificationContainer extends React.Component<NotificationContainerProps> {
  constructor(props: NotificationContainerProps) {
    super(props)
    NotificationManager.addChangeListener(this.handleStoreChange)
  }
  
  static defaultProps = {
    enterTimeout: 400,
    leaveTimeout: 400
  }
  
  state = {
    notifications: []
  }
  
  componentWillUnmount = () => {
    NotificationManager.removeChangeListener(this.handleStoreChange)
  }
  
  handleStoreChange = (notifications: Notify[]) => {
    this.setState({
      notifications
    })
  }
  
  handleRequestHide = (notification: Notify) => {
    NotificationManager.remove(notification)
  }
  
  render() {
    const {notifications} = this.state
    const {enterTimeout, leaveTimeout} = this.props
    return (
      <Notifications
        enterTimeout={enterTimeout}
        leaveTimeout={leaveTimeout}
        notifications={notifications}
        onRequestHide={this.handleRequestHide}
      />
    )
  }
}

export default NotificationContainer
