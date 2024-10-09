import React from 'react'
import Sdata from './Sdata'
import './slide.css'

const Slidetwo = () => {
  return (
    <>
      <div className='contener CardTwo'>
        {
        Sdata.map((value)=>{
          return(

              <div className='box'  key={value.id}>
               <div className='img'>
                  <img  src={value.cover} alt=''/>
               </div>
               <div className='text'>
                <span>{ value.category}</span>
                <h2>{value.title}</h2>
                <p>{value.desc}</p>
               </div>
             </div>

          )
        })
      }

    </div>
    </>
  )
}

<<<<<<< HEAD
export default Slidetwo
=======
export default Slidetwo
>>>>>>> 198fab7 (First one)
