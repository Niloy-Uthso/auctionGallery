import React, { use } from 'react';

const Middle = ({fetUser}) => {
   const fetchUser=use(fetUser)
   console.log(fetchUser)
    return (
        <div>
            <div className='border rounded-2xl '>
                <div className='border grid grid-cols-4 mb-6 gap-4 items-center h-[112px]'>
                    <p>Items</p>
                    <p>Current Bid</p>
                    <p>Time left</p>
                    <p>Bid Now</p>
                </div>
                  
                  {
                   fetchUser.map(i=>
                    <div className='border grid grid-cols-4 mb-6 gap-4 items-center h-[112px]'>
                    <div className='flex items-center gap-1'>
                        <img className='w-14 h-16' src={i.image} alt="" />
                        <p>{i.title}</p>
                    </div>
                    <p>{i.currentBidPrice}</p>
                    <p>{i.timeLeft}</p>
                    <button>fjkje</button>
                </div>
                   ) 
                    
                   
                  }
            </div>
            <div>


            </div>
        </div>
    );
};

export default Middle;