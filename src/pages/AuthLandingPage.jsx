import React from 'react'
import '../styles/LandingPage.css'

const bg = 'https://d1g31diwtzkeb3.cloudfront.net/fin.png'

function AuthLandingPage () {
  return (

    <div>

      <div class='centered'>
        <img
          src={bg}
          alt='fin'
          height={318}
          width={546}
        />
      </div>

    </div>
  )
}

export default AuthLandingPage
