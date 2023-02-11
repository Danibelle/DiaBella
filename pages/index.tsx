import type { NextPage } from 'next'
import Head from 'next/head'
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import HomePage from './home';
import Store from './store';
import Navbar from '../components/navbar'
import { ReactDOM } from 'react';


const Home: NextPage = () => {
  return (
    <div className="max-w-screen-xl m-auto pb-4 md:pb-12">
      <Head>
        <title>Mint Mitch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/Favicon.png" />
      </Head>
      <Toaster />
      <Navbar />
      <HomePage />
    </div>
  )
}


export default Home