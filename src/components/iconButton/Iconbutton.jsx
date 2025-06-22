import React from 'react'
import styles from './iconbutton.module.css' 
import Plus from '../../icons/Plus'

const Iconbutton = (
    {
        size = "sm",
        disabled = false
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
          <Plus className={iconclass} />
        </button>
      </>
    );
}

export default Iconbutton