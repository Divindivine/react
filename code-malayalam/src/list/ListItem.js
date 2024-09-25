import React from "react";
import Label2 from "./Label2";
import "./ListItem.css";

function ListItem(props) {
  console.log("Render List ITem")
  const { title, descr, isActive, onDelete, onLabelClick } = props;
  return (
    <div className="list-item">
      <hr />
      <div className="list-title">
        <h4>{title}</h4>
        <label onClick={onDelete}>delete</label>
      </div>
      <div className="list-descr">{descr}</div>
      <div className="list-label">
        <Label2 onAction={onLabelClick} isActive={isActive} />
      </div>
    </div>
  );
}

export default ListItem;

