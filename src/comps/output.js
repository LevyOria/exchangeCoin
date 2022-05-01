import React from 'react'

export default function Output({res}) {
  return (
    <div style={{color:'white'}} className='float-end col-auto p-0 text-center '>
<h1>{res[0]}</h1>
<h1>=</h1>
<h1>{res[1]}</h1>
    </div>
  )
}



