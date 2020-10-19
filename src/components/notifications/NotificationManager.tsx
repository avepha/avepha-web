import React from 'react'
import {EventEmitter} from 'events'

const createUUID = () => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  return pattern.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line:no-bitwise
    const r = (Math.random() * 16) | 0
    // tslint:disable-next-line:no-bitwise
    const v = c === 'x' ? r : ((r & 0x3) | 0x8)
    return v.toString(16)
  })
}

export interface Notify {
  id?: string
  type: 'info' | 'success' | 'warning' | 'error' | 'primary' | 'secondary',
  title: string,
  message: string,
  timeOut: number,
  customClassName: string,
  onClick: (e: React.MouseEvent<HTMLDivElement>) => any
}

class NotificationManager extends EventEmitter {
  listNotify: Notify[]
  
  constructor() {
    super()
    this.listNotify = []
  }
  
  create(notify: Notify, priority?: boolean) {
    const defaultNotify: Partial<Notify> = {
      id: createUUID(),
      type: 'info',
      title: '',
      message: '',
      timeOut: 5000,
      customClassName: ''
    }
    if (priority) {
      this.listNotify.unshift(Object.assign(defaultNotify, notify))
    } else {
      this.listNotify.push(Object.assign(defaultNotify, notify))
    }
    this.emitChange()
  }
  
  primary({message = '', title = '', timeOut = 5000, onClick = () => null, customClassName = ''}: Partial<Notify>, priority?: boolean) {
    this.create({
      type: 'primary',
      message,
      title,
      timeOut,
      onClick,
      customClassName
    }, priority)
  }
  
  secondary({message = '', title = '', timeOut = 5000, onClick = () => null, customClassName = ''}: Partial<Notify>, priority?: boolean) {
    this.create({
      type: 'secondary',
      message,
      title,
      timeOut,
      onClick,
      customClassName
    }, priority,)
  }
  
  info({message = '', title = '', timeOut = 5000, onClick = () => null, customClassName = ''}: Partial<Notify>, priority?: boolean) {
    this.create({
      type: 'info',
      message,
      title,
      timeOut,
      onClick,
      customClassName
    }, priority,)
  }
  
  success({message = '', title = '', timeOut = 5000, onClick = () => null, customClassName = ''}: Partial<Notify>, priority?: boolean) {
    this.create({
      type: 'success',
      message,
      title,
      timeOut,
      onClick,
      customClassName,
    }, priority,)
  }
  
  warning({message = '', title = '', timeOut = 5000, onClick = () => null, customClassName = ''}: Partial<Notify>, priority?: boolean) {
    this.create({
      type: 'warning',
      message,
      title,
      timeOut,
      onClick,
      customClassName
    }, priority,)
  }
  
  error({message = '', title = '', timeOut = 5000, onClick = () => null, customClassName = ''}: Partial<Notify>, priority?: boolean) {
    this.create({
      type: 'error',
      message,
      title,
      timeOut,
      onClick,
      customClassName
    }, priority,)
  }
  
  remove(notification: Notify) {
    this.listNotify = this.listNotify.filter(n => notification.id !== n.id)
    this.emitChange()
  }
  
  emitChange() {
    this.emit('change', this.listNotify)
  }
  
  addChangeListener(callback: (notifications: Notify[]) => any) {
    this.addListener('change', callback)
  }
  
  removeChangeListener(callback: (notifications: Notify[]) => any) {
    this.removeListener('change', callback)
  }
}

export default new NotificationManager()
