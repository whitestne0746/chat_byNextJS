import React, { Component } from 'react'

export default class MessageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputMessage: '',
    }
    this.typeMessage = this.typeMessage.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }

  typeMessage(e) {
    this.setState({
      inputMessage: e.target.value,
    })
  }

  buttonClick(e) {
    e.preventDefault()
    const inputMessage = this.state
    this.props.sendMessage(inputMessage)
  }

  render() {
    return (
      <form className="form" onSubmit={this.buttonClick}>
        <input id="message" placeholder="入力してください" value={this.state.inputMessage} onChange={this.typeMessage} />
        <button id="send" type="submit">send</button>
        <style jsx>{`
          .form {
            border-radius: 5px;
            background: #FF8C00;
            position: absolute;
            bottom: 0;
            width: 50%;
            left: 50%;
            transform:translateX(-50%);
            margin: auto;
          }
          #message {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 0.5% 1%;
            background: #fff;
            outline: 0;
            width: 85%;
            margin-left: 1%;
          }
          #send {
            margin: 1%;
            border: 1px solid #fff;
            border-radius: 5px;
            padding: 0.5% 1%;
            outline: 0;
            background: white;
            width: 10%;
            margin-right: 0.5%;
          }
        `}</style>
      </form>
    )
  }
}
