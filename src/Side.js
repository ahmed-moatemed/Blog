import React from 'react'
import Cdata from './Cdata'
import './side.css'


const side = () => {
  return (
    <>
      <div className='card grid top'>
        {
            Cdata.map((value)=>{
                return(
                    <div key={value.id} className='box'>
                        <div className='img'>
                            <img src={value.cover} alt='img' />
                        </div>
                        <div className='text'>
                            <span>{value.category}</span>
                            <h2>{value.title}</h2>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default side