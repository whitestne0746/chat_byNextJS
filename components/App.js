import React, { Component } from 'react'
import NameForm from './NameForm'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
import io from 'socket.io-client'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      text: '',
      userName: '',
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.submitUser = this.submitUser.bind(this)

    this.socket = io('localhost:8080')

    this.socket.on('RECEIVE_MESSAGE', (messages) => {
      this.setState({
        messages,
      })
    })
  }

  sendMessage({ inputMessage }) {
    const messages = this.state.messages

    messages.push({
      text: inputMessage,
      userName: this.state.userName,
    })

    this.socket.emit('SEND_MESSAGE', {
      text: inputMessage,
      userName: this.state.userName,
    })

    // this.setState({
    //   messages,
    // })
  }

  submitUser({ name }) {
    if (name !== this.state.userName) {
      console.log('changed name')
    }
    this.setState({
      userName: name,
    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">chat room</h1>
        <MessageList message={this.state.messages} name={this.state.userName} />
        <NameForm submitUser={this.submitUser} />
        <MessageForm sendMessage={this.sendMessage} />
        <style jsx>{`
          h1 {
            font-family: 'Arial';
          }
          .app {
            width: 95%;
            height: 95%;
          }
          .title {
            width: 100%;
            color: blue;
            position: fixed;
            text-align: center;
            top: 0;
          }
        `}</style>
      </div>
    )
  }
}
