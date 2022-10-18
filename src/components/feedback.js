import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AllCards from '../Screen/AllCards';
import Card from '../Screen/Card';
 function feedback () {
  return (
    <>
    <Routes>
      <Route path='/' element = {<AllCards/>} />
       <Route path='card' element={<Card/>}/>
    </Routes>
    </>

  )
}
export default feedback;