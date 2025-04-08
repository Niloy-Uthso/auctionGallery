 
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Middle from './components/Middle'

function App() {
  
  const  fetUser=fetch('data.json')
  .then(res=>res.json())
console.log(fetUser.length)
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={ <h1>comming</h1>  }>
      <Middle fetUser={fetUser}></Middle>
      </Suspense>
      <h1 className=''></h1>
       
       
    </>
  )
}

export default App
