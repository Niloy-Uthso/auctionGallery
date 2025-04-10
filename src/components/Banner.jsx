import React from 'react';
 
const Banner = () => {
    return (
        <div className='h-[70vh] border border-red-700'>
            <div  className= "bg-[url('Banner-min.jpg')] bg-cover bg-center h-full  flex flex-col justify-center gap-3  pl-7">
                <h1 className='font-extrabold text-3xl text-white'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='font-light text-xl text-white'>Discover rare collectibles, luxury goods, and vintage <br/>treasures in our curated auctions</p>
                <button className='bg-white max-w-fit font-medium border rounded-3xl p-1'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Banner;