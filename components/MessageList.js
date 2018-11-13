import React, { Component } from 'react'
import Message from './Message'

export default class MessageList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const time = {
      hour: hour,
      minute: minute,
    }
    return (
      <div className="messages">
        <div className="date">
          {'-------------- ' + month + '月' + day + '日' + ' --------------'}
        </div>
        {
          this.props.message.map((m, i) => {
            return <Message message={m} key={i} name={this.props.name} time={time} />
          })
        }
        <style jsx>{`
          .date {
            width: 95%;
            margin: 15px;
            padding: auto;
          }
          .messages {
            border: 1px solid #aaa;
            overflow: auto;
            width: 50%;
            height: 70%;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: absolute;
            margin: auto;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
