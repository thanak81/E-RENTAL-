import { useEffect, useState } from "react";
import door from "/door.png";
import door_sold from "/sold door.png";
import "./style.css";

function App() {
  const array = [];

  const room = "Room ";
  const roomLoop = 500;
  for (let i = 1; i <= roomLoop; i++) {
    // console.log(i)
    array.push(i);
  }

  const arrayroom = array.map((arr, index) => ({
    ...arr,
    roomName: room + index,
    id: crypto.randomUUID(),
    rented: false,
  }));

  const [roomArray, setRoomArray] = useState(arrayroom);
  const [countRented, setCountRented] = useState(0);
  const [countAvailable, setCountAvailable] = useState(roomArray.length);
  const [searchRoom, setSearchRoom] = useState("")


  function rentRoom(roomId) {
    const updatedRoom = roomArray.map((room) =>
      roomId === room.id
        ? {
            ...room,
            rented: true,
          }
        : room
    );
    setRoomArray(updatedRoom);
    setCountRented((count) => count + 1);
    setCountAvailable((count) => count - 1);
  }

  function cancleRoom(roomId) {
    const updatedRoom = roomArray.map((room) =>
      roomId === room.id
        ? {
            ...room,
            rented: false,
          }
        : room
    );
    setRoomArray(updatedRoom);
    if(countRented <= 0 ) return;
    setCountRented((count) => count - 1);
    setCountAvailable((count) => count + 1);
  }
  function handleSubmit(e){
    e.preventDefault();
    const filterRoom = roomArray.filter((room)=>{
      searchRoom? room.id === parseInt(searchRoom) : ""
    })
    setRoomArray(filterRoom)
    return filterRoom
  }
  return (
    <>
      <div className="title">
        <h1>Thanak Mech's Rental Management</h1>
        <div>Avaible Room: {countAvailable}</div>
        <div>Rented Room: {countRented}</div>
      </div>
      <div className="searchRoom">
        <form onSubmit={handleSubmit}>
          <input type="text"
          pattern="[0-9]*" 
          placeholder="Search Room By ID"
          value={searchRoom}
          onChange={(e)=>setSearchRoom(e.target.value)}
          />
          </form>
        </div>
        <div className="view">
          <span>View: </span>
          <button>All</button>
          <button>All Available Room</button>
          <button>All Rented Room</button>
        </div>
      <div className="container">
        {roomArray.map((room,index) => (
          <div key={room.id} className="room-card">
            {/* <div className="room_owner_title" >
              <p>Room Owner</p>
              <p>Ronaldo</p>
            </div> */}
            {room.rented ? (
              <img src={door_sold}  className="door" alt="Door" height={140} />
            ):(
              <img src={door} className="door" alt="Door_Sold" height={140} />
            )}
            <div>ID: {index+1}</div>
            <div>Room: {index+1}</div>
            {/* <div>{room.roomName}</div> */}
            {room.rented === true? (
              <div className="unavailable">Unavailable</div>
            ) : (
              <div className="available">Available</div>
            )}
            {!room.rented ? (
              <button onClick={() => rentRoom(room.id)}>Rent Room</button>
            ) : (
              <button onClick={() => cancleRoom(room.id)}>Cancle Room</button>
            )}
          </div>
        ))}
       
      </div>
    </>
  );
}

export default App;
