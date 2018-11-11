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
            border: 1px solid #aaa;
            overflow: auto;
            width: 50%;
            height: 70vh;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            position: absolute;
            margin: auto;
          }
        `}</style>
      </div>
    )
  }
}
