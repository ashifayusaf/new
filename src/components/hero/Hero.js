import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='content'>
            <h1>find the perfect place</h1>
            <div className='search-text'>Search the largest selection of luxury high rise apartment,multi-family homes,and luxury homes</div>
    
          <form className='search'>
          <div>
          <input type='text' placeholder='Enter Keyword'/>
          </div>
          <div className='radio'>
              <input type="radio" checked/>

              <label>Buy</label>
              <input type="radio" />

             <label>Rent</label>

             <button type='submit'><AiOutlineSearch className='icon'/></button>


          </div>

          </form>
    
    
        </div>
    </div>
  )
}

export default Hero