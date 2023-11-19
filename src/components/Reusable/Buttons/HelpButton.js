import React from 'react'

const HelpButton = ({ label, onClick }) => {

  return (
    <>

        <button
      className={`help-button-class px-lg-5 px-md-3 px-sm-3`}
      onClick={onClick}
    >
      {label}
    </button>
    </>
  )
}

export default HelpButton