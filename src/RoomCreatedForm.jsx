import React from 'react'
import { useState } from 'react'

function RoomCreatedForm() {
  const [inputRoomAmount,setInputRoomAmount] = useState("")

  return (
    <div className='create-form'>
    <label htmlFor="">Amount of Room </label>
    <input type="text" max="100" placeholder='1-100' pattern="[0-9]*" value={inputRoomAmount} onChange={(e)=> setInputRoomAmount(e.target.value.replace(/\D/g, ''))}/>
    <button onClick={handleRoomInput}>Submit</button>
    <label htmlFor="">Owner Name </label>
    <input type="text" placeholder='Name' value={inputOwnerName} onChange={(e)=> setInputOwnerName(e.target.value)}/>
    <button onClick={handleInputSubmit}>Submit</button>
</div>
  )
}

export default RoomCreatedForm