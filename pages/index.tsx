import type { NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import HomePage from './home';
import Navbar from '../components/navbar'
import React, { useEffect, useState } from 'react';
import { getNetwork } from '@wagmi/core';
import { WrongNetwork } from '../components/wrongNetwork';



const Home: NextPage = () => {
  const [correctNetwork, setCorrectNetwork] = useState<string | null>(null);
  const [rightNetwork, setRightNetwork] = useState<boolean | null>(null);
  
  const [network, setNetwork] = useState(getNetwork().chain?.network);
  const checkNetwork = () => {
  if (process.env.NODE_ENV === 'development' && network === 'goerli') {
    setRightNetwork(true);
  } else if (process.env.NODE_ENV === 'production' && network === 'polygon') {
    setRightNetwork(true);
  } else if (process.env.NODE_ENV === 'development' && network !== 'goerli') { 
    setRightNetwork(false);
    console.log('Wrong network')
     setCorrectNetwork("Goerli")
  }
    else if (process.env.NODE_ENV === 'production' && network !== 'polygon') {
      setRightNetwork(false);
      console.log('Wrong network')
      setCorrectNetwork("Polygon")
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentNetwork = getNetwork().chain?.network;
      setNetwork(currentNetwork);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    checkNetwork();
  }, [network]);
  return (
    <div >
      <Head>
        <title>Mint Mitch | Home</title>
        <meta name="This is the place to mint your favourite Mitch!" content="" />
        <link rel="icon" href="/Favicon.ico" />
      </Head>
      <Toaster />
      <Navbar />
      {rightNetwork ? <HomePage/> : <WrongNetwork rightNetwork={correctNetwork} /> }     
      </div>
  )
}


export default Home