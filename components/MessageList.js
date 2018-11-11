import React, { Component } from 'react'
import Message from './Message'

export default class MessageList extends Component {
  render() {
    return (
      <div className="messages">
        {
          this.props.messages.map((message) => {
            console.log(message)
            return <Message {...message} key={message.number} />
          })
        }
        <style jsx>{`
          .messages {
            overflow: auto;
            width: 50%;
            height: 70vh;
            position: relative;
            margin-left: auto;
            margin-right: auto;
            top: 12%;
          }
        `}</style>
      </div>
    )
  }
}
