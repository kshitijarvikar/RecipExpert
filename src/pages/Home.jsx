import React from 'react'
import Header from '../components/Header'
import Recipe from '../components/Recipe'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
      <Header 
        title={
            <p>Taste The World With <br />Flavours</p>
        }
      /> 
      <Recipe />
    </main>
  )
}

export default Home
