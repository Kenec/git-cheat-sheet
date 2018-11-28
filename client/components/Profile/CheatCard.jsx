import React from 'react';

const CheatCard = ({ gitCheat }) =>
  (gitCheat.owner === 0 || gitCheat.owner === 2) &&
    <div className="card card-custom">
      <div className="card-header">
        <b>{ gitCheat.title }</b>
      </div>
        <div className="card-body">
          {
            gitCheat.detail.map((detail, index) =>
              <div key={index}>
                <p className="card-title">{ detail.description }</p>
                <p className="command-code"><code className="card-text">{ detail.command }</code></p>
              </div>
            )
          }
        </div>
      <div className="card-footer text-muted">
        <i className="fas fa-edit float-left"></i>
        <i className="fas fa-trash-alt float-right"></i>
      </div>
    </div>

export default CheatCard;