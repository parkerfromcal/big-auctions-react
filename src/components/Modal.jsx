import React from "react";

export default function Modal(props) {
    return (
      <div className="modal d-block">
        <div className="modal-dialog">
            <div className="modal-header">
                { props.children }
            </div>
            <div className="modal-body">
                { props.children }
            </div>
            <div className="modal-footer">
                { props.children }
            </div>
        </div>
      </div>
    );
  }

export default modal;
