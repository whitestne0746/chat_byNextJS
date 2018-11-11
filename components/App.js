import React, { Component } from 'react'
import NameForm from './NameForm'
import MessageForm from './MessageForm'
import MessageList from './MessageList'
// import io from 'socket.io-client'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      Number: 1,
      Name: '',
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.submitUser = this.submitUser.bind(this)
  }

  sendMessage({ inputMessage }) {
    const {
      messages, Number, Name,
    } = this.state

    messages.push({
      message: inputMessage,
      number: Number,
      name: Name,
    })

    this.setState({
      messages,
      Number: Number + 1,
    })
  }

  submitUser({ name }) {
    if (name !== this.state.Name) {
      console.log('名前が変わりました')
    }
    this.setState({
      Name: name,
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        <h1 className="title">chat room</h1>
        <NameForm submitUser={this.submitUser} />
        <MessageList className="ML" messages={this.state.messages} />
        <MessageForm sendMessage={this.sendMessage} />
        <style jsx>{`
          h1 {
            font-family: 'Arial';
          }
          .app {
            width: 95%;
            height: 95vh;
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
