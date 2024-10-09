

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { DndContext } from "@dnd-kit/core";
import { saveLayoutToDB, loadLayoutFromDB } from "../utils/layoutUtils";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PageBuilder = () => {
  const [layout, setLayout] = useState([]);
  const navigate = useNavigate(); // Hook for navigation

  const generateHTML = (id) => {
    switch (id) {
      case "label":
        return "<label>Label Text</label>";
      case "input":
        return '<input type="text" placeholder="Enter text" />';
      case "checkbox":
        return '<input type="checkbox" />';
      case "button":
        return "<button>Click Me</button>";
      default:
        return `<div>${id}</div>`;
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over) {
      const newComponent = {
        id: active.id,
        html: generateHTML(active.id),
      };
      setLayout([...layout, newComponent]);
    }
  };

  const handleSave = () => {
    saveLayoutToDB(layout);
  };

  const handleLoad = async () => {
    const savedLayout = await loadLayoutFromDB();
    setLayout(savedLayout);
  };

  const handlePublish = () => {
    // Save the layout to local storage or pass it via state
    localStorage.setItem("publishedLayout", JSON.stringify(layout)); // Storing layout in localStorage

    // Navigate to the published page
    navigate("/published");
  };

  return (
    <div>
      <div className="controls">
        <button style={{ width: "fit-content" }} onClick={handleSave}>
          Save Layout
        </button>
        <button style={{ width: "fit-content" }} onClick={handleLoad}>
          Load Layout
        </button>
        <button style={{ width: "fit-content" }} onClick={handlePublish}>
          Publish
        </button>
      </div>

      <div className="builder-container">
        <DndContext onDragEnd={handleDragEnd}>
          <Sidebar />
          <Dashboard layout={layout} setLayout={setLayout} />
        </DndContext>
      </div>
    </div>
  );
};

export default PageBuilder;
