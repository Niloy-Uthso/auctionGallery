import React, { use, useState } from 'react';

const Middle = ({fetUser}) => {

    const [favoriteItems,setFavoriteItems]=useState([])

   
   const fetchUser=use(fetUser)

   const handleFavorite = (data) => {
    
      setFavoriteItems([...favoriteItems,data])
        const r=   document.getElementById('hid')
        r.classList.add('hidden');
  };
  const p=(i)=>{
        console.log(i)
        setFavoriteItems(favoriteItems.filter((cl)=>cl.id!==i))   
  }
//   console.log(favoriteItems[favoriteItems.length-1].title)
 
    return (
        <div className='flex justify-around mt-5'>
            <div  className='border rounded-2xl w-[60vw]'>
                <div className='border grid grid-cols-4 mb-6 gap-4 items-center h-[112px]'>
                    <p>Items</p>
                    <p>Current Bid</p>
                    <p>Time left</p>
                    <p>Bid Now</p>
                </div>
                  
                  {
                   fetchUser.map(i=>
                    <div className='border grid grid-cols-4 mb-6 gap-16 items-center pl-3  h-[112px]'>
                    <div className='flex items-center gap-1 w-56'>
                        <img className='w-14 h-16' src={i.image} alt="" />
                        <p className=''>{i.title}</p>
                    </div>
                    <p className='ml-10'>{i.currentBidPrice}</p>
                    <p>{i.timeLeft}</p>
                    <button  onClick={()=>handleFavorite(i)} className="btn btn-circle">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                     </button>
                </div>
                   ) 
                    
                   
                  }
                  
            </div>
            <div className='w-[35%] border'>
                     <div >
                     <div className='flex gap-2'>
                      <button className="btn btn-circle">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                                </button>
                        <h1 className='font-medium text-4xl'>Favorite Items</h1>
                      </div>
                     <div id='hid'>
                        <h1>No favorite yet</h1>
                        <p>Click the heart icon on any item to <br /> add it to your favorites</p>
                        </div>
                        <div>
                            <p>Total bids amount</p>
                            <p>$</p>
                            </div> 
                     </div>
                     {
                       favoriteItems.map(item=>
                        <div className='flex justify-between border items-center'>
                        <img className='w-14 h-16' src={item.image} alt="" />
                        <div className='w-56 border flex flex-col gap-4'>
                            <p className=''>{item.title} </p>
                            <div className='flex gap-3'>
                                <p>{item.currentBidPrice}</p>
                                 <p>jsbhdc</p>
                            </div>
                        </div>
                        <button onClick={()=>p(item.id)}>hdhd</button>
                    </div>
                       )
                     }

            </div>
        </div>
    );
};

export default Middle;