
import React from 'react'
import './style.css'
const SubsrcibeButton = ({ label, onClick }) => {

  return (
    <>

        <button
      className={`subscribe-button-class px-lg-5 px-md-3 px-sm-3`}
      onClick={onClick}
    >
      {label}
    </button>
    </>
  )
}

export default SubsrcibeButton