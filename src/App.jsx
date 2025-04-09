import React from 'react'
import Home from './assets/Components/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Name from './assets/Components/Home/Name/Name'
import Intro from './assets/Components/Intro/Intro'
import Amazon from './assets/Components/Amazon/Amazon'
import Flipkart from './assets/Components/Flipkart/Flipkart'
import Meesho from './assets/Components/Meesho/Meesho'
import Comb from './assets/Components/Comb/Comb'
import Output from './assets/Components/Output/Output'
import Features from './assets/Components/Features/Features'
import User from './assets/Components/User/User'
import Seller from './assets/Components/Seller/Seller'
import Target from './assets/Components/Target/Target'
import Work from './assets/Components/Work/Work'
import Tech from './assets/Components/Tech/Tech'
import Result from './assets/Components/Result/Result'
import Conclusion from './assets/Components/Conclusion/Conclusion'

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/name" element={<Name/>}/>
        <Route path="/intro" element={<Intro/>}/>
        <Route path="/amazon" element={<Amazon/>}/>
        <Route path="/flipkart" element={<Flipkart/>}/>
        <Route path="/meesho" element={<Meesho/>}/>
        <Route path="/comb" element={<Comb/>}/>
        <Route path="/output" element={<Output/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/seller" element={<Seller/>}/>
        <Route path="/target" element={<Target/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/tech" element={<Tech/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/conclusion" element={<Conclusion/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
