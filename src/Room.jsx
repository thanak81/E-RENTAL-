import React from 'react'
import { useState } from 'react'
import door from "/door.png";
import door_sold from "/sold door.png";

function Room({roomArray,setRoomArray,setCountAvailable,countAvailable,}) {
   
    const [filter, setFilter] = useState("all")

    const [countRented, setCountRented] = useState(0);
    const [searchRoom, setSearchRoom] = useState("")
    function showAll(e){
        setFilter("all")
      }
    
      function showAvailable(e){
        setFilter("available")
      }
    
      function showRented(e){
        setFilter("rented")
      }
    
      const filteredRoom = roomArray.filter((room)=>{
        if(filter === "all"){
          return true
        }else if(filter === "available"){
          return !room.rented
        }else if(filter === "rented"){
          return room.rented
        }else{
          return false
        }
      })
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
          <button onClick={showAll} style={{backgroundColor:filter==="all"? "lightblue" : ""}}>All</button>
          <button onClick={showAvailable } style={{backgroundColor:filter==="available"? "lightblue" : ""}}>All Available Room</button>
          <button onClick={showRented} style={{backgroundColor:filter==="rented"? "lightblue" : ""}}>All Rented Room</button>
        </div>
      <div className="container">
        {filteredRoom.length === 0 ? (
        <div>There are {filteredRoom.length} {filter} rooms</div>  
      ):(
        filteredRoom.map((room,index) => (
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
            <div>ID: {room.id.substring(0,3)}</div>
            <div>{room.roomName}</div>
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
        ))
      )}
       
       
      </div>
    </>
  )
}

export default Room