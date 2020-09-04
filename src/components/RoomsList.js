import React from "react";
import Room from "./Room";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return <div>no rooms available</div>;
  }

  return (
    <section className="roomlist">
      <div className="roomslist-center">
        {rooms.map((room) => (
          <Room key={room.id} room={room}></Room>
        ))}
      </div>
    </section>
  );
}
