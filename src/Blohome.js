import React from 'react';
import './bloo.css';
import Slideone from './Slideone';
import Side from './Side.js';
import Slidetwo from './Slidetwo.js';
import Footer from './Footer.js';

const Blohome = () => {
    const data = [
        {
          id: 1,
          titleOne: "YOU CAN CHANGE THE WORLD",
          titletwo: "STRONG STYLE",
          paraOne: "How Women are Redirecting Hollywood",
          paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
          name: "By Jasmin Smith",
          subTitle: "How to Shop Mindfully",
          qrCode: "/images/qrcode.png",
          cover: "/Images/blog5.jpg",
        },
      ]
  return (
    <>
<<<<<<< HEAD
      <div className='container'>
=======
      <div className='continer'>
>>>>>>> 198fab7 (First one)
        <div className='left'>
            {
                data.map((value)=>{
                    return(
<<<<<<< HEAD
                        <div className='contect' key={value.id}>
=======
                        <div className='contect'>
>>>>>>> 198fab7 (First one)
                            <div className='logo'>
                            <h1>M</h1>
                        </div>
                        <div className='back'>
                            <img src={value.cover} alt=""/>
                        </div>
                        <div className='title1'>
                            <h2>{value.titleOne}</h2>
                            <p>{value.paraOne}</p>
                            <span>{value.name}</span>
                        </div>
                        <div className='title2'>
                            <h2>{value.titletwo}</h2>
                            <p>{value.paraTwo}</p>
                            <span>{value.subTitle}</span>
                        </div>
                        <div className='qr'>
                            <img src={value.qrCode} alt=""/>
                        </div>
                        </div>
                    )
                })
                
            }
        </div>
        <div className='right'>
            <Slideone />
            <Side />
            <Slidetwo />
            <Footer />
        </div>
      </div>
    </>
  )
}

<<<<<<< HEAD
export default Blohome
=======
export default Blohome
>>>>>>> 198fab7 (First one)
