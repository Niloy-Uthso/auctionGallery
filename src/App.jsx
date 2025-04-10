 
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Middle from './components/Middle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
function App() {
  
  const  fetUser=fetch('data.json')
  .then(res=>res.json())
console.log(fetUser.length)
const notify = () => toast("An item is added to favorites.");
  return (
    <>
      <div className='sora-normal'>
      <Navbar></Navbar>
      <ToastContainer />
      <Banner></Banner>

      <Suspense fallback={ <h1>comming</h1>  }>
      <Middle fetUser={fetUser} notify={notify}></Middle>
      </Suspense>
           
      
       <Footer></Footer>

       
      </div>

       
       
    </>
  )
}

export default App
