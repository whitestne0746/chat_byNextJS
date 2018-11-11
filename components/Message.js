import React from 'react'

export default function Message(props) {
  return (
    <div className="contents">
      <div className="userIcon"><img src="../picture/icon.svg" width="40" height="40" /></div>
      <div className="messageBox">
        {props.message}
      </div>
      <style jsx>{`
        .contents {
          overflow: hidden;
          margin: 10px;
        }
        .userIcon {
          float: left;
        }
        .messageBox {
          background-color: #332aa3;
          color: #ffffff;
          border-radius: 0em 1.0em 1.0em 1.0em/0em 1.0em 1.0em 1.0em;
          opacity: 1;
          text-align: left;
          word-wrap: break-word;
          min-width: 0;
          max-width: 400px;
          padding: 10px;
          margin: 10px;
          box-shadow: 3px 3px 4px  rgba(0,0,0,0.3);
          float: left;
        }
      `}</style>
    </div>
  )
}
