import React, { useEffect, useState } from "react";

const PublishedPage = () => {
  const [layout, setLayout] = useState([]);

  useEffect(() => {
    // Retrieve the layout from localStorage
    const savedLayout = JSON.parse(localStorage.getItem("publishedLayout"));
    if (savedLayout) {
      setLayout(savedLayout);
    }
  }, []);

  // Function to render the React component based on its id
  const renderComponent = (component) => {
    switch (component.id) {
      case "label":
        return <label key={component.id}>Label Text</label>;
      case "input":
        return (
          <input
            key={component.id}
            type="text"
            placeholder="Enter text"
            style={{ display: "block", margin: "10px 0" }}
          />
        );
      case "checkbox":
        return (
          <div
            key={component.id}
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            <input type="checkbox" />
            <label style={{ marginLeft: "10px" }}>Checkbox</label>
          </div>
        );
      case "button":
        return (
          <button
            key={component.id}
            style={{ display: "block", margin: "10px 0" }}
          >
            Click Me
          </button>
        );
      default:
        return <div key={component.id}>{component.id}</div>;
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Published Page</h1>
      <div
        style={{
          border: "1px solid",
          width: "500px",
          margin: "auto",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Render the layout components dynamically */}
        {layout.map((component, index) => renderComponent(component))}
      </div>
    </div>
  );
};

export default PublishedPage;
