import React from 'react'

import './SignOut.css'

const SignOut = ({ signOut }) => {
  return (
    <div className="Center">
      <button
        onClick={signOut}
      >
        <i className="fa fa-sign-out"></i>
        Sign out 
      </button>
    </div>
  )
}

export default SignOut