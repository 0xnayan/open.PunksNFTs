import React from 'react'
import { Feature } from '../../components'
import "./features.css"

const featuresData = [
  {
    title: "Rarity and Ownership of Punks.",
    text: "Each open.Punk has a specific combination of attributes, such as hairstyle, facial features, accessories, and more. Some attributes are rarer than others, making certain open.Punks more valuable. Each character is owned by an Ethereum wallet address, and ownership is recorded on the blockchain, providing proof of authenticity."
  },
  {
    title: "Collectibility and Trading",
    text: "open.Punks gained popularity due to their scarcity and the ability to buy, sell, and trade them on various NFT marketplaces. Their unique aesthetic and status as early pioneers in the NFT space contribute to their appeal among collectors."
  },
  {
    title: "Influence and Cultural Impact",
    text: "open.Punks played a pivotal role in establishing the concept of owning and trading digital assets on the blockchain. They inspired subsequent NFT projects and contributed to the mainstream adoption of NFTs."
  },
  {
    title: "Community and Engagement",
    text: " open.Punks have fostered a vibrant and passionate community of collectors, artists, and enthusiasts. The community actively discusses, trades, and showcases their open.Punks on social media platforms and dedicated forums."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">About the Punks</h1>
        <p>The openPunks are 24x24 pixel art images, generated algorithmically. Most are punky looking guys and girls, but there are a few rare type mixed in: Apes, Zombies and even the odd alien. Every punk has their own profile page that shows their attributes as well as their ownership for sale status.<br /> Overall, CryptoPunks represent an iconic and groundbreaking project within the Web3 space, combining art, technology, and blockchain to create unique, tradable digital assets that have significantly influenced the NFT ecosystem. </p>
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