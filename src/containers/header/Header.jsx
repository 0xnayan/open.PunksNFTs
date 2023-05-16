import React from 'react'
import "./header.css"
import punks from "../../assets/punks.png"
import { setAlert, setGlobalState, useGlobalState } from '../../store'
import { payToMint } from '../../Oxnayan'

const Header = () => {

  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div className="gpt3__header section_padding" id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">open.Punks</h1>
        <p>The project that inspired the modern CryptoArt movement. <br />10 unique collectible characters with proof of ownership stored on the Ethereum blockchain 
        </p>
        <div className='container'>
          <img className='punks' src={punks} alt="punks" />
        </div>
        <div className="gpt3__header-content__input">
          <button type="button" onClick={onMintNFT} >MINT</button>
        </div>
      </div>
    </div>
  )
}

export default Header