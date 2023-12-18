
import React from 'react';

const Reorder = ({ onReorder }) => {
  return (
    <button className="fade-in" onClick={onReorder}>
      Reorder
    </button>
  );
};

export default Reorder;
