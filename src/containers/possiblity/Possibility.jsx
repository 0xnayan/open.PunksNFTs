import React from 'react'
import "./possibility.css"

import  possibilityImage  from '../../assets/2.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id='possibility'>
        
        <div className="gpt3__possibility-container">
          <p><a href="mailto: borahnayanmoni80@gmail.com">Request Early Access to Get notified upcoming NFT project</a></p>
          <h1>The expanding NFT space is beyond your imagination.</h1>
          <p>The NFT market has experienced exponential growth in recent years, with a significant increase in both the number of buyers and sellers participating. NFTs have moved beyond niche communities and gained significant mainstream adoption. Celebrities, athletes, musicians, and established brands are embracing NFTs as a means of engaging with fans, monetizing their content, or offering unique experiences. This widespread adoption has further accelerated the growth and visibility of the NFT market.</p>
        </div>
        <div className="gpt3__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
    </div>
  )
}

export default Possibility