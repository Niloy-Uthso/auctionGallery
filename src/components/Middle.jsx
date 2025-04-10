import React, { use, useState } from 'react';
import { RxCross1 } from "react-icons/rx";

const Middle = ({fetUser,notify}) => {

    const [favoriteItems,setFavoriteItems]=useState([])
    const [disabl, setDisabled] = useState([]);
    // const [isDisabled, setIsDisabled] = useState(false);

    // const handleClick = () => {
    //   setIsDisabled(true); // Disable the button after clicking
    // };

    const [coLor,setCoLor]=useState([])

    const addcolor=(i)=>{
          
        i.condition=false
        coLor
        setCoLor(i)
        
        
    }

    const removecolor=(i)=>{
        i.condition=true
        coLor
        setCoLor(i)
    }
   
    const [totalSum, setTotalSum] = useState(0);

    const add=(c)=>{

        const t=parseFloat(c)
                setTotalSum(totalSum+t)
    }

    const deduct=(c)=>{

        const t=parseFloat(c)
                setTotalSum(totalSum-t)
    }

   const fetchUser=use(fetUser)

   const handleFavorite = (data) => {
   

      setFavoriteItems([...favoriteItems,data])
        const r=   document.getElementById('hid')
        r.classList.add('hidden');
           
         
         
  };
   
  
  const disable=(i)=>{
    setDisabled([...disabl,i])
 
  }

  const p=(i)=>{
        console.log(i)
        setFavoriteItems(favoriteItems.filter((cl)=>cl.id!==i))   
  }
//   console.log(favoriteItems[favoriteItems.length-1].title)
 
    return (
        <div className='flex justify-around  p-5 pt-20 h-[1360px]' style={{ backgroundColor: "rgba(235, 240, 245, 1.00)" }}>
         
          <div> 
          <h1 className='font-semibold text-2xl mb-2 ml-2' style={{ color: "rgba(14, 41, 84, 1.00)" }}>Active Auction</h1>
          <p className='font-normal mb-2 ml-2'>Discover and bid on extraordinary items</p>
             <div  className=' rounded-3xl w-[60vw] bg-white h-[1160px]'>
                
                <div className='grid grid-cols-4 mb-6 gap-4 pl-15 items-center border-b-[1px] h-[112px]'>
                    <p>Items</p>
                    <p>Current Bid</p>
                    <p>Time left</p>
                    <p>Bid Now</p>
                </div>
                  
                  {
                   fetchUser.map(i=>
                    <div className='grid border-b-[1px] grid-cols-4 mb-6 gap-16 items-center pl-3  h-[112px]'>
                    <div className='flex items-center gap-1 w-56'>
                        <img className='w-14 h-16' src={i.image} alt="" />
                        <p className=''>{i.title}</p>
                    </div>
                    <p className='ml-10'>${i.currentBidPrice}</p>
                    <p >{i.timeLeft}</p>
                    {/* <button id={`btn-${i.id}`}  onClick={()=>{handleFavorite(i);disable(i.id);notify();add(i);addcolor()} } className= {`btn btn-circle ${(coLor) ? "" : "bg-red-900 cursor-not-allowed border"}`} disabled={disabl.includes(i.id)}> */}
                    {/* <button id={`btn-${i.id}`}  onClick={()=>{handleFavorite(i);disable(i.id);notify();add(i.currentBidPrice);addcolor(i)} } className= {`btn btn-circle size-[1.2em] ${(i.condition) ? "" : "bg-red-900 cursor-not-allowed border"}`} > */}
                 <button disabled={!i.condition}>
                 <svg  onClick={()=>{handleFavorite(i);disable(i.id);notify();add(i.currentBidPrice);addcolor(i);} } xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"  className= {`size-[1.2em] ${(i.condition) ? "" : "fill-red-600 cursor-not-allowed"}`}><path strokeLinecap="" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                 </button>
                     {/* </button> */}
                      
                </div>
                   ) 
                    
                   
                  }
                  </div>
                  
            </div>
            <div className='w-[35%]  rounded-3xl mt-18 bg-white h-[1160px]'>
                     <div >
                     <div className='flex gap-2 justify-center items-center border-b-[1px] h-20'>
                      <button className="btn btn-circle ">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                                </button>
                        <h1 className='font-medium text-4xl'>Favorite Items</h1>
                      </div>
                     <div id='hid' className='mt-4 flex flex-col items-center h-24 border-b-[1px]'>
                        <h1 className='font-medium text-2xl'>No favorite yet</h1>
                        <p className='font-light text-sm'>Click the heart icon on any item to <br /> add it to your favorites</p>
                        </div>
                        
                     </div>
                     {
                       favoriteItems.map(item=>
                        <div className='flex justify-evenly border-b-[1px] h-28 items-center mt-5'>
                        <img className='w-14 h-16 ml-1' src={item.image} alt="" />
                        <div className='w-56  flex flex-col items-center gap-4'>
                            <p className=''>{item.title} </p>
                            <div className='flex gap-12'>
                                <p>{item.currentBidPrice}</p>
                                 <p>Bid:{item.bidsCount}</p>
                            </div>
                        </div>
                        <button className='mr-1' onClick={()=>{p(item.id);deduct(item.currentBidPrice);removecolor(item)}}><RxCross1 /></button>
                    </div>
                       )
                     }
                     <div className='flex justify-around mt-5'>
                            <p>Total bids amount</p>
                            <p className='font-bold'>${totalSum}</p>
                            </div> 

            </div>
        </div>
    );
};

export default Middle;