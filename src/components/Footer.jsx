import React from 'react';

const Footer = () => {
    return (
        <div className='flex flex-col items-center h-80 justify-center gap-3'>
            <p className='text-xl font-bold'><span className='' style={{color:'blue'}}>Auction</span><span style={{color:'yellow'}}>Gallery</span></p>
            <div className='flex gap-1'>
                <p className='font-semibold'>Bid.</p>
                <p className='font-semibold'>Win.</p>
                <p className='font-semibold'>Own.</p>
            </div>
            <div className='flex gap-3'>
                <p>Home</p>
                <p>Auction</p>
                <p>Categories</p>
                <p>How to Work</p>
            </div>
            <p>© 2025 AuctionHub.All rights reserved.</p>
             
        </div>
    );
};

export default Footer;