import React, { Children } from 'react'
import styles from './iconButton.module.css' 
import Plus from '../../assets/icons/Plus';

const IconButton = (
    {
        size = "sm",
    disabled = false,
        children 
    }) => {

    const iconbox = [
        styles.iconbox,
        styles[`iconbox-${size}`]
    ].filter(Boolean).join(" ");

    const iconclass = [
        styles.icon,
        styles[`icon-${size}`]
    ].filter(Boolean).join(" ");


    return (
      <>
        <button className={iconbox} disabled={disabled}>
          {React.isValidElement(children)? React.cloneElement(children, { className: iconclass }): <Plus className={iconclass} />}
        </button>
      </>
    );
}

export default IconButton