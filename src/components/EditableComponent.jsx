import React, { useState } from "react";

const EditableComponent = ({ component, onUpdate }) => {
  const [content, setContent] = useState(component.html);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setContent(newValue);

    // Update the layout with the new content
    onUpdate(component.id, newValue);
  };

  return (
    <div style={{ margin: "10px auto", width: "300px" }}>
      {component.id === "label" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
          }}
        >
          <label style={{ marginRight: "10px" }}>
            {content.replace(/<\/?[^>]+(>|$)/g, "")}
          </label>
          <input
            type="text"
            value={content.replace(/<\/?[^>]+(>|$)/g, "")}
            onChange={handleChange}
            style={{ flex: 1 }}
          />
        </div>
      )}
      {component.id === "input" && (
        <input
          type="text"
          placeholder={
            content.match(/placeholder="([^"]*)"/)?.[1] || "Enter placeholder"
          }
          onChange={(e) =>
            handleChange({
              target: {
                value: `<input type="text" placeholder="${e.target.value}" />`,
              },
            })
          }
          style={{ margin: "10px 0", width: "100%" }}
        />
      )}
      {component.id === "checkbox" && (
        <div style={{ margin: "10px 0" }}>
          <input type="checkbox" />
          <label style={{ marginLeft: "10px" }}>Checkbox</label>
        </div>
      )}
      {component.id === "button" && (
        <input
          type="text"
          value={content.replace(/<\/?[^>]+(>|$)/g, "")}
          onChange={handleChange}
          style={{ margin: "10px 0", width: "50px" }}
        />
      )}
    </div>
  );
};

export default EditableComponent;
