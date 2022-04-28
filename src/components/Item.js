import React from "react";

export default function Item(props) {
    return (
        <li className="todo stack-small card">
            <div className="card-body">
                <div className="">
                    <label className="label" htmlFor={props.id}>
                        {props.name}
                    </label>
                </div>
                <button
                    type="button"
                    className="btn btn-danger btn-lg"
                    onClick={() => props.deleteTask(props.id)}
                >
                    Delete <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </li>
    );
  }