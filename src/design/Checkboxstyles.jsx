import React from 'react'
import Checkbox from '../components/checkbox/Checkbox'

const Checkboxstyles = () => {
  return (
    <div style={{display:"flex", gap:"10px" }}>
      <Checkbox size="sm" />
      <Checkbox size="md" />
      <Checkbox size="lg" />
    </div>
  );
}

export default Checkboxstyles