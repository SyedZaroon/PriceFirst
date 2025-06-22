import React from 'react'
import Checkbox from '../components/checkbox/Checkbox'
import Check from '../icons/check';
import styles from "../components/checkbox/checkbox.module.css";

const Checkboxstyles = () => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Checkbox size="sm"></Checkbox>

      <Checkbox size="md" />
      <Checkbox size="lg" />
      <Checkbox size="lg" disabled={true} />
      <Checkbox
        size="lg"
        disabled={true}
        icon={<Check className={styles[`custom-check-icon`]} />}
      />
    </div>
  );
}

export default Checkboxstyles