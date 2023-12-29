import { useEffect, useState } from "react";
import images from "/door.png";
import "./style.css";

function App() {
  const array = [];

  const room = "Room ";
  const roomLoop = 100;
  for (let i = 1; i <= roomLoop; i++) {
    // console.log(i)
    array.push(i);
  }

  const arraymap = array.map((arr, index) => ({
    ...arr,
    roomName: room + index,
    id: index + 1,
    rented: false,
  }));
  const [roomArray, setRoomArray] = useState(arraymap);
  const [countRented, setCountRented] = useState(0);
  const [countAvailable, setCountAvailable] = useState(roomArray.length);

  function rentRoom(roomId) {
    const updatedRoom = roomArray.map((room) =>
      roomId === room.id
        ? {
            ...room,
            rented: !room.rented,
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
            rented: !room.rented,
          }
        : room
    );
    setRoomArray(updatedRoom);
    setCountRented((count) => count - 1);
    setCountAvailable((count) => count + 1);
  }

  return (
    <>
      <div className="title">
        <div>Avaible Room: {countAvailable}</div>
        <div>Rented Room: {countRented}</div>
      </div>

      <div className="container">
        {roomArray.map((room) => (
          <div key={room.id} className="room-card">
            <img src={images} alt="Door" height={80} />
            <div>ID: {room.id}</div>
            <div>{room.roomName}</div>
            {room.rented ? <div className="unavailable">Unavailable</div> : <div className="available">Available</div>}
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
