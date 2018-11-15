import React from 'react'

let name = ''

export default function Message(props) {
  name = props.name
  if (props.message.userName !== name) {
    name = props.message.userName
    return (
      <div className="contents">
        <div className="user">
          <div className="userIcon"><img src="../static/picture/icon.svg" width="60" height="60" /></div>
          <span className="userName">{name}</span>
        </div>
        <div className="messageBox">
          {props.message.text}
        </div>
        <div className="time">
          {props.time.hour + ' : ' + props.time.minute}
        </div>
        <style jsx>{`
          .contents {
            overflow: hidden;
            margin: 1%;
            padding: 1%;
            width: 95%;
          }
          .user {
            float: left;
          }
          .userName {
            font-size: 0.7rem,
            word-wrap: break-word;
          }
          .messageBox {
            background-color: #332aa3;
            color: #ffffff;
            border-radius: 0em 1.0em 1.0em 1.0em/0em 1.0em 1.0em 1.0em;
            opacity: 1;
            text-align: left;
            word-wrap: break-word;
            min-width: 0;
            max-width: 75%;
            padding: 1%;
            margin: 1%;
            box-shadow: 3px 3px 4px rgba(0,0,0,0.3);
            float: left;
          }
          .time {            
            float: left;
            font-size: 1rem;
            margin: 1%;
            text-align: center;
          }
        `}</style>
      </div>
    )
  } else {
    return (
      <div className="contents">
        <div className="user">
          <div className="userIcon"><img src="../static/picture/icon.svg" width="60" height="60" /></div>
          <span className="userName">{props.message.userName}</span>
        </div>
        <div className="messageBox">
          {props.message.text}
        </div>
        <div className="time">
          <p>{props.time.hour + ':' + props.time.minute}</p>
        </div>
        <style jsx>{`
          .contents {
            overflow: hidden;
            margin: 1%;
            padding: 1%;
            width: 95%;
          }
          .user {
            float: right;
          }
          .userName {
            font-size: 0.7rem,
            word-wrap: break-word;
          }
          .messageBox {
            background-color:#7f8184;
            color: #ffffff;
            border-radius: 1.0em 0em 1.0em 1.0em/1.0em 0em 1.0em 1.0em;
            opacity: 1;
            text-align: left;
            word-wrap: break-word;
            min-width: 0;
            max-width: 75%;
            padding: 1%;
            margin: 1%;
            box-shadow: 3px 3px 4px  rgba(0,0,0,0.3);
            float: right;
          }
          .time {
            float: right;
            font-size: 1rem;
            margin: 1%;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
