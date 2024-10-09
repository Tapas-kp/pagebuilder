
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const SidebarItem = ({ id, content }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className="draggable-item">
      {content}
    </div>
  );
};

const Sidebar = () => {
  const controls = [
    { id: 'label', content: 'Label' },
    { id: 'input', content: 'Input Box' },
    { id: 'checkbox', content: 'Check Box' },
    { id: 'button', content: 'Button' },
  ];

  return (
    <div className="sidebar">
      {controls.map((control) => (
        <SidebarItem key={control.id} id={control.id} content={control.content} />
      ))}
    </div>
  );
};

export default Sidebar;
