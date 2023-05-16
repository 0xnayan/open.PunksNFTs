import React from 'react'
import { Feature } from '../../components'
import "./features.css"
import img from "../../assets/3.png"


const featuresData = [
  {
    title: "Rarity and Ownership of Punks.",
    text: "Each open.Punk has a specific combination of attributes, such as hairstyle, facial features, accessories, and more. Some attributes are rarer than others, making certain open.Punks more valuable."
  },
  {
    title: "Collectibility and Trading",
    text: "open.Punks gained popularity due to their scarcity and the ability to buy, sell, and trade them on various NFT marketplaces like opensea."
  },
  {
    title: "Influence and Cultural Impact",
    text: "open.Punks played a pivotal role in establishing the concept of owning and trading digital assets on the blockchain."
  },
  {
    title: "Community and Engagement",
    text: " open.Punks have fostered a vibrant and passionate community of collectors, artists, and enthusiasts."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">About the Punks</h1>
          <img className='img' src={img} alt="punks" />
      </div>
      <div className="gpt3__features-container">
        <div>
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Features