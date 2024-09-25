import React from "react";
import ListItem from "./ListItem";

function SimpleList(props) {
  console.log("Render SImple List")
  const { data, onAction, onLabelClick } = props;

  return (
    <div className="app-list">
      {data.map((obj, index) => {
        return (
          <ListItem
            key={index}
            title={obj.title}
            descr={obj.descr}
            isActive={obj.isActive}
            onLabelClick={onLabelClick}
            onDelete={() => {
              onAction(obj);
            }}
          />
        );
      })}
    </div>
  );
}

export default SimpleList;
