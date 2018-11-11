import React, { Component } from 'react'

export default class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.buttonClick = this.buttonClick.bind(this)
    this.typeName = this.typeName.bind(this)
  }

  buttonClick(e) {
    e.preventDefault()
    const name = this.state
    this.props.submitUser(name)
  }

  typeName(e) {
    this.setState({
      name: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.buttonClick}>
        <input id="name" placeholder="name" value={this.state.name} onChange={this.typeName} />
        <button id="submit">submit</button>
        <style jsx>{`
          form {
            position: relative;
            left: 20px;
            top: 20%;
          }
          input {
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 2px 8px;
            background: none;
            outline: 0;
            width: 100px;
          }
          #submit {
            margin: 1%;
            border: 1px solid #00f;
            border-radius: 5px;
            padding: 2px 7px;
            outline: 0;
            color: white;
            background: blue;
          }
        `}</style>
      </form>
    )
  }
}
