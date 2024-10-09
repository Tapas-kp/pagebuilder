
import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import EditableComponent from './EditableComponent';

const Dashboard = ({ layout, setLayout }) => {
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas' });

  // This will determine if something is over the droppable area
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = () => {
    setIsDropped(true); // Set this to true when an element is dropped
  };

  const handleUpdate = (id, newContent) => {
    const updatedLayout = layout.map((component) =>
      component.id === id ? { ...component, html: newContent } : component
    );
    setLayout(updatedLayout);
  };

  return (
    
    <div style={{border:"1px solid", width:"100%"}}>

    
    <div
      ref={setNodeRef}
      className="canvas"
      onDrop={handleDrop}
      style={{
        border: isDropped ? '1px solid' : 'none', // Conditionally apply the border
        width: '400px',
        margin: 'auto',
      }}
    >
      {layout.map((component, index) => (
        <EditableComponent
          key={index}
          component={component}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
    </div>
  );
};

export default Dashboard;

