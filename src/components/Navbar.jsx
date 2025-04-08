import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm border flex justify-between">
  <div className="flex justify-around items-center border">
    <a className="text-xl font-bold "><span className='' style={{color:'blue'}}>Auction</span><span style={{color:'yellow'}}>Gallery</span></a>
    
  </div>

  <div className='flex border justify-around gap-3'>
          <p>Home</p>
          <p>Auction</p>
          <p>Category</p>
          <p>How to work</p>
        </div>  

  <div className="flex border">
    
     
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
 
     
  </div>
</div>
        </div>
    );
};

export default Navbar;