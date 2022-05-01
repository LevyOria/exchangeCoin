import React, { useState } from 'react'
import Input from './input'
import MyDate from './myDate';
import Output from './output'

export default function App_exch() {
  const [res, setRes] = useState([]);
  return (
    <div style={{ height: '100vh' }} className='container-fluid p-0'>
      <div className='container-fluid strip '>
        <div style={{padding:'100px 0'}} className='container '>
          <div style={{ height: '60vh' }} className='row align-items-center  p-2'>
            <div className='col-6 p-0'><Input setRes={setRes} /></div>
            <div className='col-6 p-0'><Output res={res} /></div>
            <div  className=' time col-auto mx-auto p-4  '><MyDate/></div>
            
          </div>
       
        </div>



      </div>


    </div>

  )
}
