import { useEffect, useState } from "react";

import "./style.css";
import Room from "./Room";

function App() {
  let roomData = []

  const [roomArray, setRoomArray] = useState(roomData);
  const [inputRoomAmount,setInputRoomAmount] = useState("")
  const [inputOwnerName , setInputOwnerName] = useState("")
  const [countAvailable, setCountAvailable] = useState(roomArray.length);
  
  function handleInputSubmit(e){
    e.preventDefault();
    if (inputOwnerName === "") return
    roomData = [
      ...roomArray,
      {
        roomName: inputOwnerName,
        id: crypto.randomUUID(),
        rented: false,
      }
  ]
  setInputOwnerName("")
  setRoomArray(roomData)
  setCountAvailable(roomData.length)
  }

  function handleRoomInput(e){
    e.preventDefault();
    if(inputRoomAmount === "") return;
    let array = [];
    
    for (let i = 1; i < inputRoomAmount; i++) {
      // console.log(i)
      array.push(i);
    }

  const arrayroom = array.map((arr, index) => ({
    ...arr,
    roomName: "Room",
    id: crypto.randomUUID(),
    rented: false,
  }));

  roomData = [
    ...roomArray,
    ...arrayroom,
    {
      roomName: inputOwnerName,
      id: crypto.randomUUID(),
      rented: false,
    }
]

  setRoomArray(roomData)
  setCountAvailable(roomData.length)
  }
  return (
    <>

      <Room roomArray={roomArray}setRoomArray={setRoomArray}setCountAvailable={setCountAvailable}countAvailable={countAvailable}/>
    </>
  );
}

export default App;
