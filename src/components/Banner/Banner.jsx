import React from 'react';
import bannerMain from '../../assets/banner-main.png'
import './Banner.css'


const Banner = ({ addToCart }) => {
    return (
        <div className='flex  flex-col justify-center items-center gap-5  w-full h-[400px] rounded-2xl bg-black mt-10 bg bg-no-repeat bg-center bg-cover'>
            <img className='w-40' src={bannerMain} alt="" />
            <h1 className='text-white text-3xl'>Cricket Player Marketplace: Buy, Sell, and Build Your Dream Team</h1>
            <p className='text-white'>Buy, sell, and trade your favorite cricket players! Build your ultimate team with.</p>
            <button onClick={addToCart} className='btn rounded-2xl bg-yellow-500 border-0 text-black'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;