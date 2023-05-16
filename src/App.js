import { useEffect } from 'react'
import { useGlobalState } from './store'
import { isWallectConnected, loadNfts } from './Oxnayan'
import React from 'react'
import "./App.css"
import {Features,Footer,Header,Possibility} from "./containers";
import {Article,Loading,Alert,Navbar} from "./components";

function App() {

  const [nfts] = useGlobalState('nfts')

  useEffect(async () => {
    await isWallectConnected().then(() => console.log('Blockchain Loaded'))
    await loadNfts()
  }, [])

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Article artworks={nfts}/>
      <Alert/>
      <Loading/>
      <Features/>
      <Possibility/>
      <Footer/>
    </div>
  );
}

export default App;
